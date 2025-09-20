import * as C from './App.styles';
import { useState } from 'react';
import Cabecalho from './components/Cabecalho/Cabecalho';
import ListaContato from './components/ListaContato/ListaContato';
import GeradorLink from './components/GeradorLink/GeradorLink';

export default function App() {
  const [contatos, setContatos] = useState([
    { id: 1, nome: 'Hiago Gimenez', telefone: '(11) 91234-5678' },
  ]);

  const manipularSalvarContato = (contato) => {
    const novoContato = { 
      id: Date.now(),
      ...contato
    };
    setContatos([...contatos, novoContato]);
  }

  const manipularDeletarContato = (id) => {
    setContatos(contatos.filter((contato) => contato.id !== id));
  }
  
  const manipularEditarContato = (contato) => {
    console.log(contato);
  }

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
    <div>
      <Cabecalho/>

      <div>
        <div>
          <GeradorLink aoGerarLink={manipularLinkGerado}/>
          <ListaContato
            contatos={contatos}
            onEdit={manipularEditarContato}
            onDelete={manipularDeletarContato}
            onSendMessage={manipularEnviarMensagem}
            onSave={manipularSalvarContato}
          />
        </div>
      </div>
    </div>
  )
}