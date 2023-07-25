import styled from '@emotion/styled'

export const StyledAddProductDisplay = styled.div`
    max-width: var(--max-width);
    padding: 4rem;
    display: flex;
    align-items: center;
    column-gap: 5rem;
    background-color: #c0bbc1;
    @media (max-width: 1000px) {
        flex-direction: column;
        padding: 5rem 0rem 2rem 0rem;
    }

    .productInfo {
        align-items: baseline;
        display: grid;
        grid-template-columns: auto auto;
        padding: 0 10px;
        width: 100%;
        row-gap: 0rem;

        .productTitle {
            width: 150px;
            strong {
                font-size: 22px;
            }
            p {
                padding: 0;
                font-weight: 400;
            }
        }

        .productPrice {
            width: 13rem;
            text-align: right;
            span {
                font-weight: 600;
            }
        }

        .productAddForm {
            grid-column-end: span 2;
            display: flex;
            flex-direction: column;
            row-gap: 0.5rem;
        }

        button {
            appearance: none;
            background-color: transparent;
            border: 2px solid #1a1a1a;
            border-radius: 0.9375em;
            box-sizing: border-box;
            color: white;
            cursor: pointer;
            display: inline-block;
            font-size: 16px;
            font-weight: 600;
            margin: 0;
            min-height: 3rem;
            min-width: 100%;
            outline: none;
            padding: 1rem 2rem;
            text-align: center;
            text-decoration: none;
            transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
            user-select: none;
            -webkit-user-select: none;
            touch-action: manipulation;
            will-change: transform;
        }

        button:disabled {
            pointer-events: none;
        }

        button:hover {
            color: #fff;
            background-color: #1a1a1a;
            box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
            transform: translateY(-1px);
        }

        button:active {
            box-shadow: none;
            transform: translateY(0);
        }
    }
`
