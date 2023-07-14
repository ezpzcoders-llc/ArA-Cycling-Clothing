import styled from '@emotion/styled'

export const StyledLandingParralaxTrialView = styled.div`
    height: 100vh;
    overflow-y: auto;
    overflow-x: hidden;
    perspective: 10px;

    .heroContainer {
        position: relative;
        display: grid;
        place-items: center;
        height: 100%;
        transform-style: preserve-3d;
        z-index: -1;
        .heroImg {
            position: absolute;
            height: 100%;
            width: 100%;
            object-fit: fill;
            z-index: -1;
            transform: translateZ(-10px) scale(2);
        }
        .heroBanner {
            font-size: 5rem;
            color: white;
            text-shadow: 0 0 5px green;
            font-style: italic;
            font-weight: 400;
        }
    }
    .productContainer {
        background-color: white;
    }
`

export const StyledLandingView = styled.div`
    height: 100vh;

    .heroContainer {
        position: relative;
        display: grid;
        place-items: center;
        height: 100%;

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
            text-shadow: 0 0 3px black;
            font-style: italic;
            font-weight: 400;
            @media (max-width: 605px) {
                font-size: 3rem;
            }
        }
    }
    .productContainer {
        background-color: white;
    }
`
