import { useState } from "react";
import * as C from "./Formulario.styles";
import { User } from "lucide-react";

export default function Formulario({ onSave }) {
    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const nomeTrim = nome.trim();
        const telefoneTrim = telefone.trim();
        if (nomeTrim === "" || telefoneTrim === "") {
            alert("Preencha nome e telefone.");
            return;
        }
        setLoading(true);
        const contato = {
            name: nomeTrim,
            phone_number: telefoneTrim.replace(/\D/g, ""),
        };
        await onSave(contato);
        setNome("");
        setTelefone("");
        setLoading(false);
    };

    return (
        <form onSubmit={handleSubmit}>
            <C.GridStyle>
                <C.CampoInput
                    type="text"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    placeholder="Nome de contato"
                />
                <C.CampoInput
                    type="text"
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                    placeholder="Número de telefone"
                />
            </C.GridStyle>
            <C.GrupoFormulario>
                <C.Botao type="submit" disabled={loading || nome.trim() === "" || telefone.trim() === ""}>
                    <User size={16} style={{ marginRight: '0.5rem' }} />
                    Salvar na Agenda
                </C.Botao>
            </C.GrupoFormulario>
        </form>
    );
}