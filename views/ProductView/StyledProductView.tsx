import styled from '@emotion/styled'

export const StyledProductPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #c0bbc1;
    .imageList {
        min-width: 100vw;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 5px;
        img {
            width: 50vw;
        }
    }
`
