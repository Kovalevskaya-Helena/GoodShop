import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { selectorsCategories, actionsCategories } from 'store';
import { AppDispatch } from 'store';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";
import {
  Form,
  Input,
  Button,
  Radio,
  DatePicker,
  Switch,
  Checkbox,Space
} from 'antd';
import { Col, Row, Divider } from 'antd';
import css from './registrationForm.module.css'
export const RegistrationForm: React.FC<{}> = () => {
  const navigate = useNavigate();
  const categoriesItems = useSelector(selectorsCategories.getCategories);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(actionsCategories.fetchCategories())

  }, [])

  const { categories } = categoriesItems

  return (<>

    <Row>
      <Col span={24} ><h1 className={css.center}>My account</h1></Col>
      <Divider />
    </Row>

    <Row>
      <Col span={12}>
        <Form
          autoComplete='off'
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 10,
          }}
          layout="horizontal"

          onFinish={(values) => {
            console.log({ values }
            );
          }
          }

        >

          <Form.Item label=" User Name" name='UserName'
            rules={[
              {
                required: true,
                message: 'Please enter your name!',
              },
              { whitespace: true }, { min: 2 }
            ]} hasFeedback>
            <Input placeholder='Name' />
          </Form.Item>
          <Form.Item label="Surname" name='UserSurname'
            rules={[
              { whitespace: true }, { min: 2 }
            ]} hasFeedback>
            <Input placeholder='Surname' />
          </Form.Item>
          <Form.Item name="email"
            label="E-mail"
            rules={[
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ]}>
            <Input placeholder='Email' />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
              { min: 6 }
            ]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            name="confirm"
            label="Confirm Password"
            dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Please confirm your password!',
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('The two passwords that you entered do not match!'));
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item label="Gender">
            <Radio.Group>
              <Radio value="male"> Male </Radio>
              <Radio value="female"> Female </Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Category" required>
            <Checkbox.Group>
              <Row>
                {categories.map(({ label, id }) => <Col key={id} >
                  <Checkbox value={label} style={{ lineHeight: 'normal' }}>
                    {label}
                  </Checkbox>
                </Col>)}
              </Row>
            </Checkbox.Group>
          </Form.Item>
          <Form.Item label='Subcription' valuePropName="checked" required>
            <p>Do you agree to the newsletter subscription?</p>
            <Switch checkedChildren={<CheckOutlined />}
              unCheckedChildren={<CloseOutlined />}
              defaultChecked />
          </Form.Item>
          <Form.Item label="Date of Birth" name='dateofbirth' required hasFeedback>
            <DatePicker picker='date' format='DD/MM/YY' placeholder='Chose date of birth' />
          </Form.Item>
          <Form.Item >
            <Button htmlType="submit" style={{ margin: '0 10px' }}>Registration
            </Button>
            <Button htmlType="button" style={{ margin: '0 8px' }} >
              Cancel
            </Button>
          </Form.Item>
        </Form>
      </Col>
      <Col span={12}>
        <Space><div>REGISTARTION</div></Space>
        
        <Space><div>Registering on this site allows you to access the status and history of your order. Just fill in the fields below and we will create a new account for you as soon as possible. We will only ask you for the information necessary to speed up and simplify the purchase process.
          </div>
          </Space>
          <Button>Sign in</Button>
        </Col>
    </Row>




  </>)
}



