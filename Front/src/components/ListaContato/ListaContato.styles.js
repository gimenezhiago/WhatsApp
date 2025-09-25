import styled from 'styled-components';

export const Cartao = styled.div`
    background-color: white;
    border-radius: 0.5rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    padding: 1.5rem;
    width: 200rem;
    gap: 1.5rem;
    margin-left: 0.75rem;
`;

export const TituloSecao = styled.h2`
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;
`;

export const H3Lista = styled.h3`
    font-size: 1.125rem;
    font-weight: 600;
    color: #1f2937;
    margin-bottom: 1rem;
`;

export const H2Secao = styled.h2`
    font-size: 1.5rem;
    font-weight: bold;
    color: #2d3748;
    margin: 0 0 0 0.5rem;
`;

export const ListaContatos = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
`;

export const ContatoVazio = styled.div`
    text-align: center;
    padding: 2rem 0;
    color: #6b7280;
`;

export const BotaoReload = styled.button`
    display: flex;
    align-items: center;
    background: #f3f4f6;
    color: #111827;
    border: 1px solid #d1d5db;
    padding: 0.4rem 0.8rem;
    border-radius: 6px;
    font-size: 0.9rem;
    cursor: pointer;
    transition: background 0.2s;

    &:hover {
        background: #e5e7eb;
    }
`;