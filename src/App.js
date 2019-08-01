import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator } from 'aws-amplify-react'
import Amplify, { Auth } from 'aws-amplify';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Frush Food powered by Karmoochi
        </header>
      

<div data-role="page" id="order">
  <div data-role="header" data-theme="b">
    <header>
    <a href="#profile" data-transition="flip" data-icon="gear" data-iconpos="right">Profile</a>
    <h1>My Order</h1>
  </div>

<div data-role="content">

<form id='orderForm' method='post' action='confirmation.php'>
  <fieldset data-role="controlgroup">
<button class="ui-icon" disabled="true" data-theme="b">Order date</button>
<select type="range" name="order-date" id="order-date"></select>
  </fieldset>
  



  <button type="submit" id='Purchase' value="Order" data-theme="b">Order</button>
</form>

</div>

<div data-role="footer" data-theme="b">
<h4>Frush Food</h4>
</div>

</div>



<div data-role="page" id="profile">

<div data-role="header"  data-theme="b">
  <a href="#order" data-transition="flip" data-icon="delete" data-iconpos="right">Cancel</a>
  <h1>Profile</h1>
  <a href="#order" data-transition="flip" data-icon="check" data-iconpos="right">Save</a>
</div>

<div data-role="content">
  <p>Profile page to confirm or update your account details</p>

  

</div>

<div data-role="footer"  data-theme="b">
  <h4>Frush Food</h4>
</div>
</div>


</div>
    );
  }
}

export default withAuthenticator(App, true);
