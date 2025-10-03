import styled from 'styled-components';

export const ItemContato = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    border: 1px solid #e5e7eb;
    border-radius: 0.5rem;
    transition: all 0.2s;

    @media (max-width: 600px) {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.75rem;
        padding: 0.75rem;
    }
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
    align-items: center;
    justify-content: space-between;
    width: 18vw;

    @media (max-width: 900px) {
        width: 35vw;
    }
    @media (max-width: 600px) {
        width: 100%;
        justify-content: flex-start;
        gap: 0.5rem;
    }
`;

export const SpaceButtons = styled.div`
    display: flex;
    justify-content: space-around;
    gap: 0.2rem;

    @media (max-width: 900px) {
        width: 30vw;
    }
    @media (max-width: 600px) {
        width: 100%;
        justify-content: flex-start;
        gap: 0.5rem;
    }
`;

const buttonBase = `
    padding: 0.5rem 0.75rem;
    border: none;
    border-radius: 0.375rem;
    cursor: pointer;
    transition: all 0.2s;
    font-size: 0.875rem;
    font-weight: 500;

    @media (max-width: 600px) {
        padding: 0.5rem 0.5rem;
        font-size: 0.85rem;
    }
`;

export const BotaoMensagem = styled.button`
    color: #10b981;
    background-color: #f0fdf4;
    ${buttonBase}
`;

export const BotaoEditar = styled.button`
    color: #3b82f6;
    background-color: #eff6ff;
    ${buttonBase}
`;

export const BotaoExcluir = styled.button`
    color: #ef4444;
    background-color: #fef2f2;
    ${buttonBase}
`;
