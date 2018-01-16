import  React ,{ Component } from 'react';
import { Provider }from 'react-redux';
import { createStore,applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
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
        const store=createStore(reducers,{},applyMiddleware(ReduxThunk));
    return(
        <Provider store={store}>
            <LoginForm />    
        </Provider>
    );
    }
}

export default App;