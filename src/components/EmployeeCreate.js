import React,{ Component } from 'react';
import {Card,CardSection,Input,Button} from './common';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';
import { Picker,Text } from 'react-native';

class EmployeeCreate extends Component{
    render(){
        return(
           <Card>
               <CardSection>
                   <Input
                    label="Name"
                    placeholder="Jane"
                    value={this.props.name}
                    onChangeText={text => this.props.employeeUpdate({prop:'name',value:text})}
                   />
               </CardSection>

               <CardSection>
                   <Input
                   label="Phone"
                   placeholder="9874563210"
                   value={this.props.phone}
                   onChangeText={text => this.props.employeeUpdate({prop:'phone',value:text})}
                   />
               </CardSection>

               <CardSection style={{flexDirection:'column'}}>
                    <Text style={styles.pickerTextStyle}>
                    Shift
                    </Text>
                    <Picker
                    style={{}}
                    selectedValue={this.props.shift}
                    onValueChange={value => this.props.employeeUpdate({prop:'shift',value})}>
                        <Picker.Item label="Monday" value="Monday" />
                        <Picker.Item label="Tuesday" value="Tuesday" />
                        <Picker.Item label="Wednesday" value="Wednesday" />
                        <Picker.Item label="Thursday" value="Thursday" />
                        <Picker.Item label="Friday" value="Friday" />
                        <Picker.Item label="Saturday" value="Saturday" />
                    </Picker>   
               </CardSection>

               <CardSection>
                   <Button>
                       Create
                    </Button>
               </CardSection>
           
           </Card>
        );
    }
}

const styles={
    pickerTextStyle:{
        fontSize:18,
        paddingLeft:20
    },
}

const mapStateToProps= ({employeeForm}) =>{
    const { name, phone, shift }=employeeForm;
    
    return { name, phone, shift };
}

export default connect(mapStateToProps,{ employeeUpdate })(EmployeeCreate);