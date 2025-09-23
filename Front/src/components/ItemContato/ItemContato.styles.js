import styled from 'styled-components';

export const ItemContato = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    border: 1px solid #e5e7eb;
    border-radius: 0.5rem;
    transition: all 0.2s;
`;

export const InfoContato = styled.div`
    flex: 1;
`;

export const H3Contato = styled.h3`
    font-weight: 600;
    color: #1f2937;
    margin: 0 0 0.25rem 0;
`;

export const PContato = styled.p`
    color: #6b7280;
    font-size: 0.875rem;
    margin: 0;
`;

export const AcoesContato = styled.div`
    display: flex;
    gap: 0.5rem;
`;

export const BotaoMensagem = styled.button`
    color: #10b981;
    background-color: #f0fdf4;
    padding: 0.5rem 0.75rem;
    border: none;
    border-radius: 0.375rem;
    cursor: pointer;
    transition: all 0.2s;
    font-size: 0.875rem;
    font-weight: 500;
`;

export const BotaoEditar = styled.button`
    color: #3b82f6;
    background-color: #eff6ff;
    padding: 0.5rem 0.75rem;
    border: none;
    border-radius: 0.375rem;
    cursor: pointer;
    transition: all 0.2s;
    font-size: 0.875rem;
    font-weight: 500;
`;

export const BotaoExcluir = styled.button`
    color: #ef4444;
    background-color: #fef2f2;
    padding: 0.5rem 0.75rem;
    border: none;
    border-radius: 0.375rem;
    cursor: pointer;
    transition: all 0.2s;
    font-size: 0.875rem;
    font-weight: 500;
`;
