import React from 'react';

import {  
  Container,
  TopContent,
  Logo,
  User,
} from './style';

import logo from '../../assets/nuLogo.png';

import Icon from '@expo/vector-icons/MaterialIcons';


export function Header () {
  return(
    <Container>
      <TopContent>
        <Logo source={logo}/>
        <User>Jeshua</User>
      </TopContent>
      <Icon name='keyboard-arrow-down' size={20} color='#FFF'/>
    </Container>
  )
}