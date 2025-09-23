import { useState } from "react";
import Formulario from "../Formulario/Formulario";
import ItemContato from "../ItemContato/ItemContato";
import { useEffect } from "react";
import { User } from "lucide-react";
import * as C from './ListaContato.styles'

export default function ListaContato({onDelete, onEdit, onSendMessage, onSave }) {
    const [contatos, setContatos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchContatos = async () => {
            try {
                const res = await fetch("http://localhost:3000/contacts/all");
                if (!res.ok) throw new Error("Erro ao carregar contatos");
                const data = await res.json();
                setContatos(data);
            } catch (err) {
                console.error(err);
                alert("Erro ao carregar contatos");
            } finally {
                setLoading(false);
            }
        };

        fetchContatos();
    }, []);

    if (loading) return <p>Carregando...</p>;

    return (
        <C.Cartao>
            <C.TituloSecao>
                <C.H2Secao>Agenda de Contatos</C.H2Secao>
            </C.TituloSecao>

            <Formulario onSave={onSave} />

            <C.TituloSecao>
                <C.H3Lista>Seus Contatos ({contatos.length})</C.H3Lista>
            </C.TituloSecao>

            {contatos.length === 0 ? (
                <C.ContatoVazio>
                    Nenhum contato salvo ainda.
                </C.ContatoVazio>
            ) : (
                <C.ListaContatos>
                    {contatos.map((contato) => (
                        <ItemContato
                            key={contato.id}
                            contato={contato}
                            onEdit={onEdit}
                            onDelete={onDelete}
                            onSendMessage={onSendMessage}
                        />
                    ))}
                </C.ListaContatos>
            )}
        </C.Cartao>
    )
}