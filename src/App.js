import React, { Component } from 'react';
import { View, Text } from 'react-native';
 // connects to redux store via connect so can obtain state for components
import { Provider } from 'react-redux';
// stores state
import { createStore } from 'redux';

class App extends Component {
  render() {
    return (
      <Provider store={createStore()}>
        <View>
          <Text>
            Hello!
          </Text>
        </View>
      </Provider>
    );
  }
}

export default App;
