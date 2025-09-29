import { useState } from 'react';
import * as C from './ItemContato.styles';
import { Trash2 } from 'lucide-react';

export default function ItemContato({ contato, onSendMessageMensagem, onDelete, onEdit }) {
    const [hover, setHover] = useState({});
    const [itemHover, setItemHover] = useState(false);

    const [isEditOpen, setIsEditOpen] = useState(false);
    const [form, setForm] = useState({
        name: contato?.name ?? '',
        phone_number: contato?.phone_number ?? ''
    });

    const openEditModal = (e) => {
        e.stopPropagation();
        setForm({
        name: contato?.name ?? '',
        phone_number: contato?.phone_number ?? ''
        });
        setIsEditOpen(true);
    };

    const closeEditModal = () => {
        setIsEditOpen(false);
    };

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmitEdit = (e) => {
        e.preventDefault();
        if (!form.name.trim()) {
        alert('Nome é obrigatório.');
        return;
        }
        if (!form.phone_number.trim()) {
        alert('Telefone é obrigatório.');
        return;
        }

        onEdit?.(contato.id, {
        ...contato,
        name: form.name.trim(),
        phone_number: form.phone_number.trim()
        });

        setIsEditOpen(false);
    };

    return (
        <>
        <C.ItemContato
            onMouseEnter={() => setItemHover(true)}
            onMouseLeave={() => setItemHover(false)}
        >
            <C.AcoesContato>
            <C.H3Contato>{contato?.name ?? 'Sem nome'}</C.H3Contato>
            <C.PContato>{contato?.phone_number ?? '-'}</C.PContato>
            </C.AcoesContato>

            <C.SpaceButtons>
            <C.BotaoMensagem
                onClick={(e) => { e.stopPropagation(); onSendMessageMensagem?.(contato?.phone_number); }}
                onMouseEnter={() => setHover({ ...hover, message: true })}
                onMouseLeave={() => setHover({ ...hover, message: false })}
            >
                Mensagem
            </C.BotaoMensagem>

            <C.BotaoEditar
                onClick={openEditModal}
                onMouseEnter={() => setHover({ ...hover, edit: true })}
                onMouseLeave={() => setHover({ ...hover, edit: false })}
            >
                Editar
            </C.BotaoEditar>

            <C.BotaoExcluir
                onClick={(e) => { e.stopPropagation(); onDelete?.(contato.id); }}
                onMouseEnter={() => setHover({ ...hover, delete: true })}
                onMouseLeave={() => setHover({ ...hover, delete: false })}
            >
                <Trash2 size={16} />
            </C.BotaoExcluir>
            </C.SpaceButtons>
        </C.ItemContato>

        {isEditOpen && (
            <EditModal
            initialForm={form}
            onClose={closeEditModal}
            onChange={handleFormChange}
            onSubmit={handleSubmitEdit}
            />
        )}
        </>
    );
}

function EditModal({ initialForm, onClose, onChange, onSubmit }) {
    return (
        <div
        role="dialog"
        aria-modal="true"
        style={{
            position: 'fixed',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
        }}
        onMouseDown={onClose} // fechar clicando fora
        >
        <div
            style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(0,0,0,0.4)'
            }}
        />

        <form
            onSubmit={onSubmit}
            onMouseDown={(e) => e.stopPropagation()}
            style={{
            position: 'relative',
            minWidth: 320,
            maxWidth: '90%',
            background: '#fff',
            padding: '1rem 1.25rem',
            borderRadius: 8,
            boxShadow: '0 8px 24px rgba(0,0,0,0.2)'
            }}
        >
            <h3 style={{ margin: '0 0 0.5rem 0' }}>Editar Contato</h3>

            <label style={{ display: 'block', marginBottom: 8 }}>
            Nome
            <input
                name="name"
                defaultValue={initialForm.name}
                onChange={onChange}
                style={{
                width: '100%',
                padding: '0.5rem',
                marginTop: 4,
                boxSizing: 'border-box'
                }}
            />
            </label>

            <label style={{ display: 'block', marginBottom: 8 }}>
            Telefone
            <input
                name="phone_number"
                defaultValue={initialForm.phone_number}
                onChange={onChange}
                style={{
                width: '100%',
                padding: '0.5rem',
                marginTop: 4,
                boxSizing: 'border-box'
                }}
            />
            </label>

            <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end', marginTop: 12 }}>
            <button
                type="button"
                onClick={onClose}
                style={{
                padding: '0.5rem 0.75rem',
                borderRadius: 6,
                border: '1px solid #ccc',
                background: '#fff'
                }}
            >
                Cancelar
            </button>
            <button
                type="submit"
                style={{
                padding: '0.5rem 0.75rem',
                borderRadius: 6,
                border: 'none',
                background: '#10b981',
                color: '#fff'
                }}
            >
                Salvar
            </button>
            </div>
        </form>
        </div>
    );
}
