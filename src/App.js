import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/login.component';
import Navigation from './components/Navigation';
import ListContacts from './components/contact.component';

class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
          <Navigation />
            <Switch>
             <Route path="/" component={Login} exact/>
             <Route path="/contacts" component={ListContacts} exact/>
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;