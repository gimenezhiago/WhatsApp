import { useState } from "react";
import { ManipularMudancaTelefone } from "../../funcao/Funcoes";
import * as C from "./GeradorLink.styles.js";
import { MessageCircle, Phone, Copy } from "lucide-react";

export default function GeradorLink() {
  const [numeroTelefone, setNumeroTelefone] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [linkGerado, setLinkGerado] = useState("");
  const [botaoHover, setBotaoHover] = useState({});

  const gerarLink = () => {
    const numeros = numeroTelefone.replace(/\D/g, "");
    const numeroCompleto = `55${numeros}`;
    let link = `https://wa.me/${numeroCompleto}`;

    if (mensagem.trim()) {
      // Verifica se a mensagem não está vazia
      link = link + `?text=${encodeURIComponent(mensagem)}`; // Adiciona a mensagem ao link
    }

    setLinkGerado(link);
  };

  const copiarLink = () => {
    try {
      navigator.clipboard.writeText(linkGerado);
    } catch (err) {
      console.error("Erro ao copiar o link: ", err);
    }
  };

  const abrirWhatsApp = () => {
    window.open(linkGerado, "_blank"); // Abre o link em uma nova aba
  };

  return (
    <C.Cartao>
      <C.TituloSecao>
        <MessageCircle size={24} color="#10b981"/>
        <C.H2Secao>Gerador de Links</C.H2Secao>
      </C.TituloSecao>

      <C.GrupoFormulario>
        <C.Rotulo>Número do WhatsApp</C.Rotulo>
        <C.ContainerInput>
          <C.IconeInput>
            <Phone size={18} />
          </C.IconeInput  >
          <C.CampoInputComIcone
            type="text"
            value={numeroTelefone}
            onChange={(e) =>
              setNumeroTelefone(ManipularMudancaTelefone(e.target.value))
            }
            placeholder="(XX) XXXXX-XXXX"
            onFocus={(e) => (e.target.style.borderColor = "#10b981")}
            onBlur={(e) => (e.target.style.borderColor = "#d1d5db")}
          />
        </C.ContainerInput>
      </C.GrupoFormulario>

      <C.GrupoFormulario>
        <C.Rotulo>Mensagem (opcional)</C.Rotulo>
        <C.AreaTexto
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
          rows={4}
          placeholder="Digite sua mensagem aqui..."
          onFocus={(e) => (e.target.style.borderColor = "#10b981")}
          onBlur={(e) => (e.target.style.borderColor = "#d1d5db")}
        />
      </C.GrupoFormulario>

      <C.GrupoFormulario>
        <C.Botao
          onClick={gerarLink}
          onMouseEnter={() => setBotaoHover({ ...botaoHover, gerar: true })}
          onMouseLeave={() => setBotaoHover({ ...botaoHover, gerar: false })}
        >
            <MessageCircle size={20} style={{ marginRight: "0.5rem" }} />
          Preparar Mensagem
        </C.Botao>
      </C.GrupoFormulario>

      <C.SecaoLink>
        <C.Rotulo>Link Gerado</C.Rotulo>
        <C.GrupoInputLink>
          <C.InputLink
            type="text"
            value={linkGerado}
            readOnly // Campo somente leitura
          />
          <C.BotaoCopiar
            onClick={copiarLink}
            title="Copiar Link"
            onMouseEnter={() => setBotaoHover({ ...botaoHover, copiar: true })}
            onMouseLeave={() => setBotaoHover({ ...botaoHover, copiar: false })}
          >
            <Copy size={18} />
          </C.BotaoCopiar>
        </C.GrupoInputLink>

        <C.Botao
          onClick={abrirWhatsApp}
          onMouseEnter={() => setBotaoHover({ ...botaoHover, abrir: true })}
          onMouseLeave={() => setBotaoHover({ ...botaoHover, abrir: false })}
        >
          <MessageCircle size={20} style={{ marginRight: "0.5rem" }} />
          Abrir WhatsApp
        </C.Botao>
      </C.SecaoLink>
    </C.Cartao>
  );
}
