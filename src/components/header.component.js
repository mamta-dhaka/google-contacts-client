
import React, { Component, useState } from "react";
import {withRouter } from 'react-router-dom'

import logout from './Logout.png'

// const [setCookie, cookies] = useCookies(['accessToken']);

 class Header extends Component{
    constructor(props) {
        super(props);
        this.state = {
          profileObj: props.profileObj || localStorage.getItem('profileObj')
        };
      }

      
      handleLogout = () => {
        localStorage.setItem('accessToken', null);
        localStorage.setItem('profileObj', null);

        this.props.history.push({
          pathname: "/",
        });
      }

    render() {
        return (
          <div>
            {this.state.profileObj ? 
            <div>
              <div style={{position: 'absolute',
            width: window.outerWidth,
            height: window.outerHeight * .075,
            left: '0px',
            top: '0px',
            background: 'blue',
            flex: 1,
            display: 'flex',
            justifyContent:'flex-start'
            }}>
            <div className="contact-avatar" style={{
              margin: '10px',
                backgroundImage: `url(${this.state.profileObj.imageUrl})`
            }}/>
            <div style={{color: "white", fontFamily: "sans-serif", textAlign: "center", paddingTop: "20px"}}>
            <div style={{padding: "2px"}}> {this.state.profileObj.name} </div>
            <div style={{padding: "2px"}}>{this.state.profileObj.email}</div>
            </div>
          </div>
            <div onClick={() => this.handleLogout()}
              style={{position: "absolute",
              right: "5.44%"}} > 
              <img src={logout}></img>
            </div>
            </div> : 
             <div onClick={() => this.handleLogout()}
            style={{position: "absolute",
            right: "5.44%"}} > 
            <img src={logout}></img>
          </div>}
            
          </div>
        )
    }
}

export default withRouter(Header)
