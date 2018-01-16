import React, {Component} from 'react';
import { Card,CardSection,Input,Button } from './common';
import { connect } from 'react-redux';
import { emailChanged } from '../actions';


class LoginForm extends Component{
    onEmailChange(text){
        this.props.emailChanged(text);
    }
    
    render(){
    return(
        <Card>
            <CardSection>
                <Input 
                    label="Email"
                    placeholder="user@email.com"
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

const mapStateToProps = state=>{
    return{
        email:state.auth.email,
    };
};

export default connect(null,{emailChanged})(LoginForm);