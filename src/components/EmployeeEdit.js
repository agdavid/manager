import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import EmployeeForm from './EmployeeForm';
import { employeeUpdate } from '../actions';
import { Card, CardSection, Button } from './common';

class EmployeeEdit extends Component {
  componentWillMount() {
    //take all properties of this.props.employee
    //forward to employeeUpdate action creator to hit reducer
    //lodash to iterate over object
    _.each(this.props.employee, (value, prop) => {
      console.log(value);
      console.log(prop);
      this.props.employeeUpdate({ prop, value });
    });
  }

  render() {
    return (
      <Card>
        <EmployeeForm />
        <CardSection>
          <Button>
            Save Changes
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default connect(null, { employeeUpdate })(EmployeeEdit);
