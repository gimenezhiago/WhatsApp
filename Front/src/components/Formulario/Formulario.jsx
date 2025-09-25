import { useState } from "react";
import { ManipularMudancaTelefone } from "../../funcao/Funcoes";
import * as C from "./Formulario.styles";
import { User } from "lucide-react"

export default function Formulario() {
    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState("");
    const [botaoHover, setBotaoHover] = useState(false);
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

        const telefoneApenasDigitos = telefoneTrim.replace(/\D/g, "");

        const contato = {
        name: nomeTrim,
        phone_number: telefoneApenasDigitos,
        };

        console.log("Salvando contato:", contato);

        try {
            const res = await fetch("http://localhost:3000/contacts/add", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(contato),
            });
            if (!res.ok) {
                throw new Error("Erro ao salvar contato");
            }
            setNome("");
            setTelefone("");
        } catch (err) {
            console.error(err);
            alert("Erro ao salvar contato. Veja o console.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <C.GridStyle>
                <C.CampoInput
                    type="text"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    placeholder="Nome de contato"
                    onFocus={(e) => e.target.style.borderColor = '#10b981'}
                    onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                />
                <C.CampoInput
                    type="text"
                    value={telefone}
                    onChange={(e) => setTelefone(ManipularMudancaTelefone(e.target.value))}
                    placeholder="Número de telefone"
                    onFocus={(e) => e.target.style.borderColor = '#10b981'}
                    onBlur={(e) => e.target.style.borderColor = '#d1d5db'}  
                />
            </C.GridStyle>

            <C.GrupoFormulario>
                <C.Botao
                    onClick={handleSubmit}
                    disabled={nome.trim() === "" || telefone.trim() === ""}
                    onMouseEnter={() => setBotaoHover(true)}
                    onMouseLeave={() => setBotaoHover(false)}
                >
                    <User size={16} style={{ marginRight: '0.5rem' }} />
                    Salvar na Agenda
                </C.Botao>
            </C.GrupoFormulario>
        </div>
    );
}