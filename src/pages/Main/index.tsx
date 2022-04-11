import React from 'react';
import Icon from '@expo/vector-icons/MaterialIcons';

import {
  Container,
  Content,
  CardHeader,
  CardContent,
  Title,
  Description,
  CardFooter,
  Annotation,
  Card

} from './style';

import { Header } from '../../components/Header';
import { Tabs } from '../../components/Tabs';


export function Main () {
  return (
    <Container>
      <Header />
      
      <Content>
        <Card>
          <CardHeader>
            <Icon name='attach-money' size={28} color='#666' />
            <Icon name='visibility-off' size={28} color='#666' />
          </CardHeader>
          <CardContent>
            <Title>Saldo disponível</Title>
            <Description>R$ 19.611,65</Description>
          </CardContent>
          <CardFooter>
            <Annotation>
              Transferência de R$ 50,00 recebida de Jeshua Ben
            </Annotation>
          </CardFooter>
        </Card>
      </Content>

      <Tabs />
    </Container>
  )
}
