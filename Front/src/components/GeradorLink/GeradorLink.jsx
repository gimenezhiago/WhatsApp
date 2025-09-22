import { useState } from "react";
import { ManipularMudancaTelefone } from "../../funcao/Funcoes";

export default function GeradorLink() {
    const [numeroTelefone, setNumeroTelefone] = useState("");
    const [mensagem, setMensagem] = useState("");
    const [linkGerado, setLinkGerado] = useState("");
    const [botaoHover, setBotaoHover] = useState({});

    const gerarLink = () => {
        const numeros = numeroTelefone.replace(/\D/g, "");
        const numeroCompleto = `55${numeros}`;
        let link = `https://wa.me/${numeroCompleto}`;

        if (mensagem.trim()) { // Verifica se a mensagem não está vazia
            link = link + `?text=${encodeURIComponent(mensagem)}`; // Adiciona a mensagem ao link
        }

        setLinkGerado(link);
    }

    const copiarLink = () => {
        try {
            navigator.clipboard.writeText(linkGerado);
        }
        catch (err) {
            console.error("Erro ao copiar o link: ", err);
        }
    }

    const abrirWhatsApp = () => {
        window.open(linkGerado, '_blank'); // Abre o link em uma nova aba
    }

    return (
        <div>
            <div>
                <h2>Gerador de Links</h2>
            </div>

            <div>
                <label>Número do WhatsApp</label>
                <div>
                    <div>
                    </div>
                    <input 
                        type="text"
                        value={numeroTelefone}
                        onChange={e => setNumeroTelefone(ManipularMudancaTelefone(e.target.value))}
                        placeholder="(XX) XXXXX-XXXX"
                        onFocus={(e) => e.target.style.borderColor = '#10b981'}
                        onBlur={(e) => e.target.style.borderColor = '#d1d5db'} 
                    />
                </div>
            </div>

            <div>
                <label>Mensagem (opcional)</label>
                <textarea
                    value={mensagem}
                    onChange={(e) => setMensagem(e.target.value)}
                    rows={4}
                    placeholder="Digite sua mensagem aqui..."
                    onFocus={(e) => e.target.style.borderColor = '#10b981'}
                    onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                />
            </div>

            <div>
                <button
                    onClick={gerarLink}
                    onMouseEnter={() => setBotaoHover({ ...botaoHover, gerar: true })}
                    onMouseLeave={() => setBotaoHover({ ...botaoHover, gerar: false })}
               >Preparar Mensagem</button>
            </div>

            <div>
                <label>Link Gerado</label>
                <div>
                    <input
                        type="text"
                        value={linkGerado}
                        readOnly // Campo somente leitura
                    />
                    <button
                        onClick={copiarLink}
                        title="Copiar Link"
                        onMouseEnter={() => setBotaoHover({ ...botaoHover, copiar: true })}
                        onMouseLeave={() => setBotaoHover({ ...botaoHover, copiar: false })}
                    ></button>
                </div>

                <button
                    onClick={abrirWhatsApp}
                    onMouseEnter={() => setBotaoHover({ ...botaoHover, abrir: true })}
                    onMouseLeave={() => setBotaoHover({ ...botaoHover, abrir: false })}
                >
                    Abrir WhatsApp
                </button>
            </div>
        </div>
    )
}