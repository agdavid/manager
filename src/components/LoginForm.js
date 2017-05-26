import React, { Component } from 'react';
import { connect } from 'react-redux'; // access action creators via connect
import { emailChanged } from '../actions'; // action creators
import { Card, CardSection, Input, Button } from './common';

class LoginForm extends Component {
  onEmailChange(text) {
      this.props.emailChanged(text);
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@gmail.com"
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
          />
        </CardSection>
        <CardSection>
          <Button>
            Login
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  // becomes this.props.email in component
  return {
    email: state.auth.email
  };
};

// second argument is action creator you want bound to component
export default connect(mapStateToProps, { emailChanged })(LoginForm);
