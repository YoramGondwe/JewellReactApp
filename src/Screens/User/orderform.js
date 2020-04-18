import React from 'react'
import {Container, Content} from 'native-base';
import {CheckBox, Input} from 'react-native-elements';
import Icon from '../../Components/Icon';
import PrimaryButton from '../../Components/PrimaryButton';
export default class OrderPage extends React.Component{
    constructor(props:State) {
        super(props);
        this.state = {
            firstName:"",
            lastName:"",
            email:"",
            loading: false
        };
    }
    saveUserData  = async ()=> {
        this.setState({loading: true})
        const data = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email
        };
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
                    value={this.email}
                    onChangeText={value => this.setState({email:value})}
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
