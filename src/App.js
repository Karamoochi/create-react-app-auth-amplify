import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator } from 'aws-amplify-react'
import Amplify, { Auth } from 'aws-amplify';
import aws_exports from './aws-exports';
import { Form } from 'semantic-ui-react'

Amplify.configure(aws_exports);

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
  { key: 'o', text: 'Other', value: 'other' },
]

class App extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })
  
  render() {
    const { value } = this.state
    return (
      <div className="App">
        
        <header className="App-header">
          Frush Food powered by Karmoochi
        </header>

        <Form>
          <Form.Group widths='equal'>
            <Form.Input fluid label='First name' placeholder='First name' />
            <Form.Input fluid label='Last name' placeholder='Last name' />
            <Form.Select fluid label='Gender' options={options} placeholder='Gender' />
          </Form.Group>
          <Form.Group inline>
            <label>Size</label>
            <Form.Radio
              label='Small'
              value='sm'
              checked={value === 'sm'}
              onChange={this.handleChange}
            />
            <Form.Radio
              label='Medium'
              value='md'
              checked={value === 'md'}
              onChange={this.handleChange}
            />
            <Form.Radio
              label='Large'
              value='lg'
              checked={value === 'lg'}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.TextArea label='About' placeholder='Tell us more about you...' />
          <Form.Checkbox label='I agree to the Terms and Conditions' />
          <Form.Button>Submit</Form.Button>
        </Form>
      
      </div>
    );
  }
}

export default withAuthenticator(App, true);
