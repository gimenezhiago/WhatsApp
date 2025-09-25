import * as C from './App.styles.js';
import { useState } from 'react';
import Cabecalho from './components/Cabecalho/Cabecalho';
import ListaContato from './components/ListaContato/ListaContato';
import GeradorLink from './components/GeradorLink/GeradorLink';

export default function App() {

  const manipularEnviarMensagem = (contato) => {
    const numeros = contato.telefone.replace(/\D/g, '');
    const numeroCompleto = `55${numeros}`;
    const link = `https://wa.me/${numeroCompleto}`;
    window.open(link, '_blank');
  }

  const manipularLinkGerado = (link) => {
    console.log(link)
  }

  return (
    <C.Container>
      <Cabecalho/>

      <C.ConteudoPrincipal>
          <GeradorLink aoGerarLink={manipularLinkGerado}/>
          <ListaContato
            onSendMessage={manipularEnviarMensagem}
          />
      </C.ConteudoPrincipal>
    </C.Container>
  )
}