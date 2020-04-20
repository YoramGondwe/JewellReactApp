import React from 'react';
import {Container,Content,Card,CardItem, Text,Body} from 'native-base';
import PrimaryButton from '../../Components/PrimaryButton';
export default class Thanks extends React.Component{
    render(){
        return(
            <Container>
                <Content>
                    <Card>
                        <CardItem>
                            <Body>
                                <Text>
                                   Thank You an SMS has been sent to your p  hone confirming your booking
                                </Text>
                                <PrimaryButton
                                    loading={this.state.loading}
                                    title={'Go To Home'}
                                    onPress={()=>this.props.navigation.navigate('Home') } />
                            </Body>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        )
    }
}
