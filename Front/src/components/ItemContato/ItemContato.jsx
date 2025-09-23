import { useState } from 'react';

export default function ItemContato({ contato, onEdit, onDelete, onSendMessage }) {
    const [hover, setHover] = useState({});
    const [itemHover, setItemHover] = useState(false);

    return (
        <div
            onMouseEnter={() => setItemHover(true)}
            onMouseLeave={() => setItemHover(false)}  
        >
            <div>
                <h3>{contato.name}</h3>
                <p>{contato.phone_number}</p>
            </div>
            <div>
                <button
                    onClick={() => onSendMessageMensagem(contato)}
                    onMouseEnter={() => setHover({ ...hover, message: true })} 
                    onMouseLeave={() => setHover({ ...hover, message: false })}
                >
                    Mensagem
                </button>
                <button
                    onClick={() => onEdit(contato)}
                    onMouseEnter={() => setHover({ ...hover, edit: true })}
                    onMouseLeave={() => setHover({ ...hover, edit: false })}
                >
                    Editar
                </button>
                <button
                    onClick={() => onDelete(contato.id)}
                    onMouseEnter={() => setHover({ ...hover, delete: true })}
                    onMouseLeave={() => setHover({ ...hover, delete: false })}
                >
                    Excluir
                </button>
            </div>
        </div>
    )
}