import styled from "styled-components";

export const Cartao = styled.div`
    background-color: white;
    border-radius: 0.5rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    padding: 1.5rem;
    width: 100%;
    max-width: 50rem; /* Limita no desktop */
    margin-right: 0.75rem;
    margin-left: 0.75rem;
`;

export const TituloSecao = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;
`;

export const H2Secao = styled.h2`
    font-size: 1.5rem;
    font-weight: bold;
    color: #2d3748;
    margin: 0 0 0 0.5rem;
`;

export const GrupoFormulario = styled.div`
    margin-bottom: 1rem;
`;

export const Rotulo = styled.label`
    display: block;
    font-size: 0.875rem;
    font-weight: 500;
    color: #374151;
    margin-bottom: 0.5rem;
`;

export const ContainerInput = styled.div`
    position: relative;
`;

export const IconeInput = styled.div`
    position: absolute;
    left: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
    color: #9ca3af;
    pointer-events: none;
`;

export const CampoInputComIcone = styled.input`
    width: 100%;
    padding: 0.75rem 0.75rem 0.75rem 2.5rem;
    border: 1px solid #d1d5db;
    border-radius: 0.5rem;
    font-size: 1rem;
    transition: all 0.2s;
    box-sizing: border-box;
`;

export const AreaTexto = styled.textarea`
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #d1d5db;
    border-radius: 0.5rem;
    font-size: 1rem;
    resize: none;
    transition: all 0.2s;
    box-sizing: border-box;
    font-family: inherit;
`;

export const Botao = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: #10b981;
    color: white;
    font-weight: 600;
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: all 0.2s;
    font-size: 1rem;
`;

export const SecaoLink = styled.div`
    border-top: 1px solid #e5e7eb;
    padding-top: 1rem;
    margin-top: 1rem;
`;

export const GrupoInputLink = styled.div`
    display: flex;
    gap: 0.5rem;
    margin-bottom: 0.75rem;
`;

export const InputLink = styled.input`
    flex: 1;
    background-color: #f9fafb;
    padding: 0.75rem;
    border: 1px solid #d1d5db;
    border-radius: 0.5rem;
    font-size: 1rem;
    box-sizing: border-box;
`;

export const BotaoCopiar = styled.button`
    padding: 0.75rem;
    background-color: #f3f4f6;
    border: 1px solid #d1d5db;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: all 0.2s;
`;
