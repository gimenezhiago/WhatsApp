import { useState } from 'react';
import * as C from './ItemContato.styles';
import { Trash2 } from 'lucide-react';

export default function ItemContato({ contato, onSendMessageMensagem }) {
    const [hover, setHover] = useState({});
    const [itemHover, setItemHover] = useState(false);

    return (
        <C.ItemContato
            onMouseEnter={() => setItemHover(true)}
            onMouseLeave={() => setItemHover(false)}  
        >
            <C.AcoesContato>
                <C.H3Contato>{contato.name}</C.H3Contato>
                <C.PContato>{contato.phone_number}</C.PContato>
            </C.AcoesContato>
            <C.SpaceButtons>
                <C.BotaoMensagem
                    onClick={() => onSendMessageMensagem(contato.phone_number)}
                    onMouseEnter={() => setHover({ ...hover, message: true })} 
                    onMouseLeave={() => setHover({ ...hover, message: false })}
                >
                    Mensagem
                </C.BotaoMensagem>
                <C.BotaoEditar
                    onClick={() => onEdit(contato.id)}
                    onMouseEnter={() => setHover({ ...hover, edit: true })}
                    onMouseLeave={() => setHover({ ...hover, edit: false })}
                >
                    Editar
                </C.BotaoEditar>
                <C.BotaoExcluir
                    onClick={() => onDelete(contato.id)}
                    onMouseEnter={() => setHover({ ...hover, delete: true })}
                    onMouseLeave={() => setHover({ ...hover, delete: false })}
                >
                    <Trash2 size={16} />
                </C.BotaoExcluir>
            </C.SpaceButtons>
        </C.ItemContato>
    )
}