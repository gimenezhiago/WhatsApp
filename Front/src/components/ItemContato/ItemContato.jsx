import { useState } from 'react';
import * as C from './ItemContato.styles';
import { Trash2 } from 'lucide-react';

export default function ItemContato({ contato, onEdit, onDelete, onSendMessage }) {

    return (
        <C.ItemContato>
            <C.InfoContato>
                <C.H3Contato>{contato.name}</C.H3Contato>
                <C.PContato>{contato.phone_number}</C.PContato>
            </C.InfoContato>
            <C.AcoesContato>
                <C.BotaoMensagem onClick={() => onSendMessage(contato.phone_number)}>
                    Mensagem
                </C.BotaoMensagem>
                <C.BotaoEditar onClick={() => onEdit(contato.id, contato)}>
                    Editar
                </C.BotaoEditar>
                <C.BotaoExcluir onClick={() => onDelete(contato.id)}>
                    <Trash2 size={16} />
                </C.BotaoExcluir>
            </C.AcoesContato>
        </C.ItemContato>
    );
}