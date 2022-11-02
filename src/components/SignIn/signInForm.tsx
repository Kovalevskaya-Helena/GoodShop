import React, {useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { selectorsCategories, actionsCategories } from 'store';
import { AppDispatch } from 'store';
import {Form,Input,Button,Radio,Checkbox,Row,Col} from 'antd'
import { Switch, DatePicker,Select} from 'antd';


export const SignInForm:React.FC<{}> = () => {
  const categoriesItems = useSelector(selectorsCategories.getCategories);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(actionsCategories.fetchCategories())

  }, [])


const [form]=Form.useForm();
  


  const onFinish=(values:any)=>{console.log(values)}
  const { categories } = categoriesItems;
  const { Option } = Select;

  return (
    <Form form={form} name='signIn' onFinish={onFinish} scrollToFirstError>
     <Form.Item  
      name='name'
      label='Name'
      style={{width:'400px'}}
      hasFeedback
      rules={[
              {
                required: true,
                message: 'Please enter your name!',
              },
              { whitespace: true }, { min: 2 }
            ]}
     >
        <Input placeholder='name'/>
      </Form.Item>
      <Form.Item
      name='surname'
      label='Surname'
      style={{width:'400px'}}
      hasFeedback
      rules={[
              {
                required: false,
                message: 'Please enter your Surname!',
              },
              { whitespace: true }, { min: 2 }
            ]}
     >
        <Input placeholder='Surname'/>
      </Form.Item>
      <Form.Item
      name='e-mail'
      label='E-mail'
      style={{width:'400px'}}
      rules={[
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },{ min: 2 },
            ]}
      hasFeedback
     >
        <Input placeholder='Email'/>
      </Form.Item>
      <Form.Item name='password'
      label='Password'
      style={{width:'400px'}}
       rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
              { min: 6 }
            ]}
      hasFeedback>
        <Input.Password/>
      </Form.Item>
      <Form.Item name='confirm'
      label='Confirm password'
      dependencies={['password']}
      style={{width:'400px'}}
      rules={[{required:true,
      message:'Please confirm your password!'},
     ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('The two passwords that you entered do not match!'));
                },
              }),]}
      hasFeedback>
        <Input.Password/>
      </Form.Item>
      <Form.Item name='gender'label="Gender" >
            <Radio.Group >
              <Radio value="male"> Male </Radio>
              <Radio value="female"> Female </Radio>
            </Radio.Group>
          </Form.Item> 

        <Form.Item name='category' label='Category'>
            <Checkbox.Group  >
              <Row>
                {categories.map(({ label, id }) => <Col key={id} >
                  <Checkbox value={label} style={{ lineHeight: 'normal' }}>
                    {label}
                  </Checkbox>
                </Col>)}
              </Row>
            </Checkbox.Group>
          </Form.Item> 
          <label htmlFor='isSubcription' >Do you agree to the newsletter subscription?</label>
          <Form.Item name='isSubscription' initialValue={false} required valuePropName="checked">
            <Switch id='isSubcription'
               />
          </Form.Item>
           <Form.Item label="Date of Birth" name='dateofbirth' required hasFeedback>
            <DatePicker picker='date' format='DD/MM/YY' placeholder='Chose date of birth' />
          </Form.Item> 
          <Form.Item name='secretQuestion'>
            <Select defaultValue="No" style={{ width: 300 }} >
      <Option value="NamePets">What’s your pet’s name?</Option>
      <Option value="SurnameMother">What is your mother's maiden name?</Option>
      <Option value="DreamJob" >
        What job did you dream of as a child?
      </Option>
      <Option value="No">No</Option>
    </Select>
          </Form.Item>
      <Form.Item >
            <Button htmlType="submit" style={{ margin: '0 10px' }}>Registration
            </Button>
            <Button htmlType="reset" style={{ margin: '0 8px' }} >
              Cancel
            </Button>
          </Form.Item>

     
    </Form>
  )
}