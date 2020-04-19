import React from 'react'
import {Container, Content} from 'native-base';
import {CheckBox, Input} from 'react-native-elements';
import Icon from '../../Components/Icon';
import PrimaryButton from '../../Components/PrimaryButton';
import axios from 'axios';
export default class OrderPage extends React.Component{
    constructor(props:State) {
        super(props);
        this.state = {
            firstName:"",
            lastName:"",
            phoneNumber:"",
            loading: false
        };
    }
    saveUserData  = async ()=> {
        const data = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            phoneNumber: this.state.phoneNumber
        };
        axios.post(`http://192.168.0.101:3000/`,{data}).then(res =>{console.log(res)}).catch(error => console.log(error));
        this.props.navigation.navigate('Thanks')
    };
render(){
    return(
        <Container>
            <Content>
                <Input
                    placeholder='Enter First Name'
                    value={this.firstName}
                    onChangeText={value => this.setState({firstName:value})}
                    leftIcon={
                        <Icon
                            name='user'
                            size={24}
                            color='black'
                        />
                    }

                />
                <Input
                    placeholder='Enter Last Name'
                    value={this.lastName}
                    onChangeText={ value => this.setState({lastName:value})}
                    leftIcon={
                        <Icon
                            name='user'
                            size={24}
                            color='black'
                        />
                    }
                />
                <Input
                    placeholder='enter email address'
                    value={this.phoneNumber}
                    onChangeText={value => this.setState({phoneNumber:value})}
                    leftIcon={
                        <Icon
                            name='at'
                            size={24}
                            color='black'
                        />
                    }
                />
                <PrimaryButton
                    loading={this.state.loading}
                    title={'Submit'}
                    onPress={()=>this.saveUserData()  } />
            </Content>
        </Container>
    )
}

}
