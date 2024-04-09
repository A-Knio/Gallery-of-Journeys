import React from 'react'
import { redirect } from 'react-router-dom';

import AuthService from '../utils/auth';

const Account = () => {
  console.log(AuthService.hasUser());
  return (
    <div>
      
    </div>
  )
}

export default Account