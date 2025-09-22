import { useState } from "react";
import { ManipularMudancaTelefone } from "../../funcao/Funcoes";

export default function Formulario({ onSave }) {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [botaoHover, setBotaoHover] = useState(false);

  const manipularEnvio = () => {
    if (nome.trim() === "" || telefone.trim() === "") {
        onSave({
            nome: nome.trim(),
            telefone: telefone.trim()
        })
        setNome("");
        setTelefone("");
    }
  };

  return (
    <div>
        <div>
            <input
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Nome de contato"
                onFocus={(e) => e.target.style.borderColor = '#10b981'}
                onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
            />
            <input
                type="text"
                value={telefone}
                onChange={setTelefone(ManipularMudancaTelefone(e.target.value))}
                placeholder="Número de telefone"
                onFocus={(e) => e.target.style.borderColor = '#10b981'}
                onBlur={(e) => e.target.style.borderColor = '#d1d5db'}  
            />
        </div>

        <div>
            <button
                onClick={manipularEnvio}
                disabled={nome.trim() === "" || telefone.trim() === ""}
                onMouseEnter={() => setBotaoHover(true)}
                onMouseLeave={() => setBotaoHover(false)}
            >
                Salvar na Agenda
            </button>
        </div>
    </div>
  )
}
