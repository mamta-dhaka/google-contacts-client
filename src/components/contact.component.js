import posed from "react-pose";
import React, { Component, useState } from "react";
import { withRouter } from "react-router-dom";
import Header from './header.component';
import style from './style.css';
import axios from "axios";

class ListContact extends Component {
  constructor(props) {
    super(props);
    this.state ={
      profileObj: props.location && props.location.state && props.location.state[0].data.profileObj,
      accessToken: props.location && props.location.state && props.location.state[0].data.accessToken,
      contactList: []
    }
  }
  componentWillMount() {
    if (this.state.accessToken || (this.props.location && this.props.location.state &&  this.props.location.state[0].data.accessToken)) {
      const config = {
        headers: {
          "content-type": "application/json",
        }
      };
      const data = {
        accessToken : this.state.accessToken || (this.props.location && this.props.location.state &&  this.props.location.state[0].data.accessToken)
      }
      axios.post(`http://localhost:3001/api/contacts/list`, data, config)
      .then(response => {
        if (response.error !== undefined) {
          alert('error occured in api', response.error);
          return;
        }
        this.setState({contactList: response.data && response.data.message || []})
      })
      .catch(error => {});
    }
  }

  render() {

    return (
      <div>
        <div style={{padding:window.outerHeight * .025}}> 
          <Header accessToken= {this.state.accessToken} profileObj={this.state.profileObj} />
        </div>
        <div>
        <div>

        </div>
        <ol className="contact-list">
            {this.state.contactList && this.state.contactList.length ? this.state.contactList.map((contact) =>
                <li key={contact.id} className="contact-list-item" >
                    <div className="contact-avatar" style={{
                        backgroundImage: `url(${contact.photos[0].url})`
                    }} />
                    <div className="contact-details">
                        <p>{contact.names && contact.names[0].displayName}</p>
                    </div>
                    <div className="contact-details">
                      <p>{contact.emailAddresses ? contact.emailAddresses[0].value : ''}</p>
                    </div>
                    <div className="contact-details">
                      <p>{contact.phoneNumbers && contact.phoneNumbers[0].canonicalForm}</p>
                    </div>
                </li>
            ) : ''}
        </ol>
        </div>
        
        
      </div>
    );
  }
}

export default withRouter(ListContact);


