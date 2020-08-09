import React, {Component} from 'react';
import GoogleLogin from 'react-google-login';
import {withRouter } from 'react-router-dom'
import axios from "axios";
import { red } from 'color-name';

export class Login extends Component{

  responseGoogle = (response) => {
    if (response.error !== undefined) {
      alert('error occured', response.error);
      return;
    }
    localStorage.setItem('accessToken', response.accessToken);
    localStorage.setItem('profileObj', response.profileObj);
    // setCookie('accessToken', response.accessToken);
    const data =  {
      profileObj: response.profileObj,
      accessToken: response.accessToken,
      tokenObj: response.tokenObj
    };
    const config = {
      headers: {
        "content-type": "application/json"
      }
    };
    console.log('data', data);
    

    axios.post(`http://localhost:3001/api/auth/authenticate-user`, data, config)
      .then(response => {
        if (response.error !== undefined) {
          alert('error occured in api', response.error);
          return;
        }
        this.props.history.push({
          pathname: "/contacts",
          state: [{ data }]
        });
      })
      .catch(error => {});
  }
  render() {
    return( 

    <div style={{flex: 1}} >
      <div style={{margin: window.outerHeight * .2}}></div>
      <div style={{flex: 1, backgroundColor:red, justifyContent: "center", display: "flex"}}>
        <GoogleLogin
          clientId="777570114264-v3lmk0ljmlqjp5ov6ercu8pb07e1naca.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
          cookiePolicy={'single_host_origin'}
          approvalPrompt="force"
          prompt="consent"
          scope='email profile https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/contacts.readonly openid'
        />
      </div>
      

    </div>
  )
}
}
export default withRouter(Login)
