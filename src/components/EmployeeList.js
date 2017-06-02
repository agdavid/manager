import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, View, Text } from 'react-native';
import { employeesFetch } from '../actions';

class EmployeeList extends Component {
  componentWillMount() {
    this.props.employeesFetch();

    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    // nextProps are the next set of props that componentWillReceiveProps
    // will be rendered with
    //this.props is still the old set of props

    this.createDataSource(nextProps);
  }

  createDataSource({ employees }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(employees);
  }

  render() {
    return (
      <View>
        <Text>Employee</Text>
        <Text>Employee</Text>
        <Text>Employee</Text>
      </View>
    );
  }
}

const mapStateToProps = state => {
  // take object of employees with many key-value pairs (state.employees)
  // for every employee (val), take the key (uid)
  const employees = _.map(state.employees, (val, uid) => {
    // object containing all props of employee (val) and the id (uid)
    return { ...val, uid };
    // { shift: 'Monday', name: 'Steve', id: '12345'};
    // put each object into the array 'employees'
  });

  return { employees };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
