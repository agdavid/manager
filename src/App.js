import React, { Component } from 'react';
import { View, Text } from 'react-native';
 // connects to redux store via connect so can obtain state for components
import { Provider } from 'react-redux';
// stores state
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyAmKD01s72jA96rLxT7kzuh42MmH2qiYPY',
      authDomain: 'manager-2ba33.firebaseapp.com',
      databaseURL: 'https://manager-2ba33.firebaseio.com',
      projectId: 'manager-2ba33',
      storageBucket: 'manager-2ba33.appspot.com',
      messagingSenderId: '354056496133'
    };

    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
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
