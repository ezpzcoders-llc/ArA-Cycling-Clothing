import styled from '@emotion/styled'

export const StyledDescriptionDisplay = styled.div`
    width: 100%;
    background-color: white;
    display: grid;
    place-items: center;
    padding: 3rem 0;
    .paragraph-holder {
        display: flex;
        max-width: var(--max-width);
        column-gap: 2rem;
        padding: 1rem;
        @media (max-width: 1000px) {
            flex-direction: column;
        }
    }
    p {
        margin-bottom: 1rem;
    }
`
