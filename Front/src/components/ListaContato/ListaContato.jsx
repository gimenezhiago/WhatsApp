import { useState } from "react";
import Formulario from "../Formulario/Formulario";
import ItemContato from "../ItemContato/ItemContato";
import { useEffect } from "react";

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
        <div>
            <div>
                <h2>Agenda de Contatos</h2>
            </div>

            <Formulario onSave={onSave} />

            <div>
                <h3>Seus Contatos ({contatos.length})</h3>
            </div>

            {contatos.length === 0 ? (
                <div>
                    Nenhum contato salvo ainda.
                </div>
            ) : (
                <div>
                    {contatos.map((contato) => (
                        <ItemContato
                            key={contato.id}
                            contato={contato}
                            onEdit={onEdit}
                            onDelete={onDelete}
                            onSendMessage={onSendMessage}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}