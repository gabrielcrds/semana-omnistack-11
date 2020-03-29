import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// use yarn start + aplicativo expo pra visualizar o carregamento do app
// 
// web => <div> <header> <footer> <span> etc...
// react native => "<div>" pra tudo. Tem algumas poucas, View e Text, mas elas não tem a mesma semantica que as tags em
// html. Também, não tem id, class etc. Usamos o atributo "style" que recebe um objetivo com o estilo
// 
// tudo usa display flex;
// 
// camel case ao inves de -
// 
// aspas em tudo que não é numero
// 
// herança de estilo => não existe. Se quer mudar o esitlo de divs filhas, tem que estilizar cada uma delas, ou seja;
// é necessário estilização propria
// 

import Routes from './src/routes';

export default function App() {
  return (
    <Routes/>
  );
}
