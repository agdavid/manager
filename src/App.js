import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
