import * as C from './App.styles.js';
import { useState } from 'react';
import Cabecalho from './components/Cabecalho/Cabecalho';
import ListaContato from './components/ListaContato/ListaContato';
import GeradorLink from './components/GeradorLink/GeradorLink';

export default function App() {
  const [telefoneSelecionado, setTelefoneSelecionado] = useState(""); 

  const manipularEnviarMensagem = (telefone) => {
    setTelefoneSelecionado(telefone); 
  };

  // const manipularEnviarMensagem = (contato) => {
  //   const numeros = contato.replace(/\D/g, '');
  //   const numeroCompleto = `55${numeros}`;
  //   const link = `https://wa.me/${numeroCompleto}`;
  //   console.log(link)
  //   window.open(link, '_blank');
  // }

  const manipularLinkGerado = (link) => {
    console.log(link)
  }

  return (
    <C.Container>
      <Cabecalho/>

      <C.ConteudoPrincipal>
          <GeradorLink 
            aoGerarLink={manipularLinkGerado}
            numeroInicial={telefoneSelecionado}/>
          <ListaContato
            onSendMessage={manipularEnviarMensagem}
          />
      </C.ConteudoPrincipal>
    </C.Container>
  )
}