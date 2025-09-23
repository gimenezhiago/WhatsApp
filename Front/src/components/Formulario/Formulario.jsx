import { useState } from "react";
import { ManipularMudancaTelefone } from "../../funcao/Funcoes";
import * as C from "./Formulario.styles";
import { User } from "lucide-react"

export default function Formulario({ onSave }) {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [botaoHover, setBotaoHover] = useState(false);

  const manipularEnvio = () => {
    if (nome.trim() !== "" && telefone.trim() !== "") {
        onSave({
            nome: nome.trim(),
            telefone: telefone.trim()
        });
        setNome("");
        setTelefone("");
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
                onChange={e => setTelefone(ManipularMudancaTelefone(e.target.value))}
                placeholder="Número de telefone"
                onFocus={(e) => e.target.style.borderColor = '#10b981'}
                onBlur={(e) => e.target.style.borderColor = '#d1d5db'}  
            />
        </C.GridStyle>

        <C.GrupoFormulario>
            <C.Botao
                onClick={manipularEnvio}
                disabled={nome.trim() === "" || telefone.trim() === ""}
                onMouseEnter={() => setBotaoHover(true)}
                onMouseLeave={() => setBotaoHover(false)}
            >
                <User size={16} style={{ marginRight: '0.5rem' }} />
                Salvar na Agenda
            </C.Botao>
        </C.GrupoFormulario>
    </div>
  )
}
