import styled from '@emotion/styled'

export const StyledLandingView = styled.div`
    .heroContainer {
        position: relative;
        display: grid;
        place-items: center;
        height: 100vh;

        .heroImg {
            position: absolute;
            height: 100%;
            width: 100%;
            object-fit: cover;
            z-index: -1;
        }
        .heroBanner {
            font-size: 6rem;
            color: white;

            font-weight: 600;
            @media (max-width: 605px) {
                font-size: 3rem;
            }
        }
    }
    .productContainer {
        background-color: white;
    }
`
