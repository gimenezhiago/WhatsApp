import styled from 'styled-components';

export const Container = styled.div`
    min-height: 100vh;
    background-color: #f7fafc;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif;
    box-sizing: border-box;
    padding: 0 1rem;
    margin: 0;
`;

export const ConteudoPrincipal = styled.main`
    margin: 0 auto;
    padding: 2rem 1rem;
    display: flex;
    justify-content: center;

    /* Layout padrão (desktop) */
        flex-direction: row;
        gap: 2rem; /* Opcional, para espaçamento entre os itens no desktop */

    /* Versão Mobile */
    @media (max-width: 1000px) {
        flex-direction: column;
        align-items: center; /* Centraliza os itens na vertical */
        gap: 1.5rem; /* Dá espaçamento entre os componentes */
    }
`