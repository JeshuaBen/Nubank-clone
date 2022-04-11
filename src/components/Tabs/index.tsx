import React from 'react';

import Icon from '@expo/vector-icons/MaterialIcons'

import { 
  Container,
  TasbContainer,
  TabItem,
  TabText,


 } from './style';

 export function Tabs () {
   return (
     <Container>
       <TasbContainer>
         <TabItem>
           <Icon name='person-add' size={24} color='#fff'></Icon>
           <TabText>Indicar amigos</TabText>
         </TabItem>
         <TabItem>
           <Icon name='chat-bubble-outline' size={24} color='#fff'></Icon>
           <TabText>Cobrar</TabText>
         </TabItem>
         <TabItem>
           <Icon name='arrow-downward' size={24} color='#fff'></Icon>
           <TabText>Depositar</TabText>
         </TabItem>
         <TabItem>
           <Icon name='arrow-upward' size={24} color='#fff'></Icon>
           <TabText>Transferir</TabText>
         </TabItem>
         <TabItem>
           <Icon name='lock' size={24} color='#fff'></Icon>
           <TabText>Bloquear cartão</TabText>
         </TabItem>
       </TasbContainer>
     </Container>
   )
 }