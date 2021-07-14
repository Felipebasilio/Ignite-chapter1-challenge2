import styled from "styled-components";

export const Container = styled.div`
  display: grid;

  /* 3 colunas de tamanhos iguais */
  grid-template-columns: repeat(3, 1fr);

  /* espaçamento em cada um dos itens do grid = gap */
  gap: 2rem;

  margin-top: -7.2rem;

  div {
    background: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--text-title);

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      /* Por padrao o strong vem com display: inline, e por isso o margin-top nao funciona, com o block o strong se coporta como uma div, e esse problema some */
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
    }

    &.highlight-background {
      background: var(--green);
      color: #FFF;
    }
  }
`;
