import { Alert } from 'antd';


import React from 'react';



export const ErrorAlert: React.FC = () => <Alert
      message="Error"
      description="Please try again later!"
      type="error"
      showIcon
    />