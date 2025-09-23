import styled from 'styled-components';

export const GridStyle = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
`;

export const CampoInput = styled.input`
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #d1d5db;
    border-radius: 0.5rem;
    font-size: 1rem;
    transition: all 0.2s;
    box-sizing: border-box;
`;

export const GrupoFormulario = styled.div`
    margin-bottom: 1rem;
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
    margin-top: 0.75rem;
`;
