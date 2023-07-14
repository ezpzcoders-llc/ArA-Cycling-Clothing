import styled from '@emotion/styled'

export const StyledFooter = styled.footer`
    position: relative;
    bottom: 0;
    left: 0;
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;

    .logo {
        width: 12rem;
        height: 6rem;
    }

    .social-icons {
        display: flex;
        justify-content: space-around;
        column-gap: 1rem;

        .icon {
            display: grid;
            place-items: center;
            border-radius: 50%;
            padding: 0.4rem;
            font-size: 2.5rem;
            cursor: pointer;
            transition: all 0.3s linear;
            color: var(--off-black);
            background: linear-gradient(
                var(--off-white) 50%,
                var(--off-black) 50%
            );

            border: 2px solid var(--off-black);
            background-size: 100% 205%;
            &:hover {
                color: white;
                background-position: 100% 100%;
            }
        }
    }
    small {
        position: absolute;
        bottom: 5px;
        left: 5px;
    }
`
