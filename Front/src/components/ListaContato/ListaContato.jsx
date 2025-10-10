import { useState, useEffect, useCallback } from "react";
import * as C from "./ListaContato.styles";
import Formulario from "../Formulario/Formulario";
import ItemContato from "../ItemContato/ItemContato";
import { RotateCw } from "lucide-react";

export default function ListaContato({ onSendMessage }) {
  const [contatos, setContatos] = useState([]);
  const [loading, setLoading] = useState(true);

  // Defina a URL base da API conforme ambiente
  const API_URL =
    window.location.hostname === "localhost"
      ? "http://localhost:3000"
      : "https://whatsappback-p61r.onrender.com";

  const fetchContatos = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/contacts/all`);
      if (!res.ok) throw new Error("Erro ao buscar contatos");
      const data = await res.json();
      setContatos(data);
    } catch (err) {
      console.error(err);
      alert("Erro ao carregar contatos");
    } finally {
      setLoading(false);
    }
  }, [API_URL]);

  useEffect(() => {
    fetchContatos();
  }, [fetchContatos]);

  const handleDelete = async (id) => {
    if (!window.confirm("Deseja realmente excluir este contato?")) return;
    try {
      await fetch(`${API_URL}/contacts/delete/${id}`, {
        method: "DELETE",
      });
      fetchContatos();
    } catch (err) {
      console.error(err);
      alert("Erro ao excluir contato");
    }
  };

  const handleEdit = async (id, novoContato) => {
    try {
      await fetch(`${API_URL}/contacts/edit/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(novoContato),
      });
      fetchContatos();
    } catch (err) {
      console.error(err);
      alert("Erro ao editar contato");
    }
  };

  const handleSave = async (contato) => {
    try {
      await fetch(`${API_URL}/contacts/add`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contato),
      });
      fetchContatos();
    } catch (err) {
      console.error(err);
      alert("Erro ao adicionar contato");
    }
  };

  return (
    <C.Cartao>
      <C.TituloSecao>
        <C.H2Secao as="div" role="heading" aria-level={2}>
          Agenda de Contatos
        </C.H2Secao>
      </C.TituloSecao>

      <Formulario onSave={handleSave} />

      <C.TituloSecao>
        <C.H3Lista as="div" role="heading" aria-level={3}>
          Seus Contatos ({contatos.length})
        </C.H3Lista>
        <C.BotaoReload onClick={fetchContatos} disabled={loading}>
          <RotateCw size={18} />
        </C.BotaoReload>
      </C.TituloSecao>

      {contatos.length === 0 ? (
        <C.ContatoVazio>Nenhum contato salvo ainda.</C.ContatoVazio>
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
