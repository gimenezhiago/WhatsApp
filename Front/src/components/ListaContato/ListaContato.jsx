import { useState, useEffect, useCallback } from "react";
import Formulario from "../Formulario/Formulario";
import ItemContato from "../ItemContato/ItemContato";
import { RotateCw } from "lucide-react"; 
import * as C from './ListaContato.styles';

export default function ListaContato({onSendMessage}) {
    const [contatos, setContatos] = useState([]);
    const [loading, setLoading] = useState(true);

    // função reaproveitável
    const fetchContatos = useCallback(async () => {
        setLoading(true);
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
    }, []);

    useEffect(() => {
        fetchContatos();
    }, [fetchContatos]);

    const handleDelete = async (id) => {
        if (!window.confirm("Deseja realmente excluir este contato?")) return;

        try {
            const res = await fetch(`http://localhost:3000/contacts/delete/${id}`, {
                method: "DELETE",
            });
            if (!res.ok) throw new Error("Erro ao excluir contato");
            // recarrega lista
            fetchContatos();
        } catch (err) {
            console.error(err);
            alert("Erro ao excluir contato");
        }
    };

    const handleEdit = async (id, novoContato) => {
        try {
            const res = await fetch(`http://localhost:3000/contacts/update/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(novoContato),
            });
            if (!res.ok) throw new Error("Erro ao editar contato");
            // recarrega lista
            fetchContatos();
        } catch (err) {
            console.error(err);
            alert("Erro ao editar contato");
        }
    };

    if (loading) return <p>Carregando...</p>;

    return (
        <C.Cartao>
            <C.TituloSecao>
                <C.H2Secao>Agenda de Contatos</C.H2Secao>
            </C.TituloSecao>

            <Formulario onSave={fetchContatos} />

            <C.TituloSecao style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <C.H3Lista>Seus Contatos ({contatos.length})</C.H3Lista>
                
                {/* Botão de recarregar */}
                <C.BotaoReload onClick={fetchContatos}>
                    <RotateCw size={18} style={{ marginRight: "6px" }} />
                    Recarregar
                </C.BotaoReload>
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
                            onEdit={handleEdit}
                            onDelete={handleDelete}
                            onSendMessage={onSendMessage}
                        />
                    ))}
                </C.ListaContatos>
            )}
        </C.Cartao>
    );
}
