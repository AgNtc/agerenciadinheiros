import styled from "styled-components";

export const Container= styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: -10rem;

    div {
        background: var(--shape);
        padding: 1.5rem 2rem;
        border-radius: 0.25;
        color: var(--text-title);

        &.highlight-bg{
            background: var(--green);
            color: #FFF;
        }
    }

    header{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    strong {
        margin-top: 1rem;
        display: block;
        font-size: 2rem;
        font-weight: 500;
        line-height: 3rem;
    }

`;