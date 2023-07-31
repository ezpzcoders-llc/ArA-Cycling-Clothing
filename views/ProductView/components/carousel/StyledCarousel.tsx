import styled from '@emotion/styled'

export const StyledCarousel = styled.div`
    @keyframes fade-in {
        from {
            opacity: 0;
            visibility: hidden;
        }
        to {
            opacity: 1;
            visibility: visible;
        }
    }

    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;

    .arrow {
        .MuiSvgIcon-root {
            font-size: 2rem;
            transition: all 0.4s linear;
            &:hover {
                transform: scale(1.2);
            }
            @media (max-width: 400px) {
                font-size: 1rem;
            }
        }

        &:hover {
            cursor: pointer;
        }
    }

    .img-container {
        height: 400px;
        width: 320px;
        margin: 0rem 2rem;
        @media (max-width: 780px) {
            height: 340px;
            width: 260px;
        }
        @media (max-width: 380px) {
            height: 300px;
            width: 220px;
        }
        .img {
            width: 100%;
            height: 100%;
            animation: fade-in 1s ease-in-out;
            animation-fill-mode: forwards;
        }
    }
`
