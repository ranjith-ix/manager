import  React ,{ Component } from 'react';
import { View,Text } from 'react-native';
import { Provider }from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

class App extends Component{

    componentWillMount(){
        const config = {
            apiKey: 'AIzaSyCmKLeuDPzoUngghKOZM4Keu_B4CrFhBrA',
            authDomain: 'manager-2ad7d.firebaseapp.com',
            databaseURL: 'https://manager-2ad7d.firebaseio.com',
            projectId: 'manager-2ad7d',
            storageBucket: 'manager-2ad7d.appspot.com',
            messagingSenderId: '322690756866'
          };
          firebase.initializeApp(config);
    }

    render(){
    return(
        <Provider store={createStore(reducers)}>
            <LoginForm />    
        </Provider>
    );
    }
}

export default App;