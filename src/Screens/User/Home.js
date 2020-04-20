import React from 'react';
import {Image} from 'react-native';
import {
  Container,

  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,Right
} from 'native-base';
import * as data from '../../data/products'
import {ScrollView} from "react-native-gesture-handler";
import PrimaryButton from '../../Components/PrimaryButton';
export default class Home extends React.Component {
  render() {
    return (
        <Container>
          <Content>
            <ScrollView>
              {
                data.store.map((item:any) => (
                    <Card key={item.id} style={{flex: 0}}>
                      <CardItem>
                        <Left>
                          <Thumbnail source={{uri: 'https://document-export.canva.com/DAD5zZGdY4o/1/thumbnail/0001-6089229792.png'}} />
                          <Body>
                            <Text>{item.name}</Text>
                            <Text note>{item.data}</Text>
                          </Body>
                        </Left>
                      </CardItem>
                      <CardItem>
                        <Body>
                          <Image source={{uri: `${item.uri}`}} style={{height: 200, width: 200, flex: 1}}/>
                          <Text>
                            {item.description}
                          </Text>
                        </Body>
                      </CardItem>
                      <CardItem>
                        <Left>
                          <PrimaryButton
                              title={'Book an Appointment'}
                              onPress={()=>this.props.navigation.navigate('Order')  } />
                        </Left>
                      </CardItem>
                    </Card>
                ))
              }
            </ScrollView>
          </Content>
        </Container>
    );
  }
}
