import { useState } from "react";
import * as C from "./Formulario.styles";
import { User } from "lucide-react";
import { ManipularMudancaTelefone } from "../../funcao/Funcoes";

export default function Formulario({ onSave }) {
    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const nomeTrim = nome.trim();
        const telefoneNumeros = telefone.replace(/\D/g, "");
        if (nomeTrim === "" || telefoneNumeros === "") {
            alert("Preencha nome e telefone.");
            return;
        }
        if (telefoneNumeros.length < 10 || telefoneNumeros.length > 13) {
            alert("Por favor, insira um número de telefone válido.");
            return;
        }
        setLoading(true);
        const contato = {
            name: nomeTrim,
            phone_number: telefoneNumeros,
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
                    onChange={(e) => setTelefone(ManipularMudancaTelefone(e.target.value))}
                    placeholder="Número de telefone"
                />
            </C.GridStyle>
            <C.GrupoFormulario>
                <C.Botao type="submit">
                    <User size={16} style={{ marginRight: '0.5rem' }} />
                    Salvar na Agenda
                </C.Botao>
            </C.GrupoFormulario>
        </form>
    );
}