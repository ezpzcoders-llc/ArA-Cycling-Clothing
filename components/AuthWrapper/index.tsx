import { PropsWithChildren } from 'react'
import { StyledAuthWrapper } from './StyledAuthWrapper'
import Nav from '../Nav'
import Footer from '../Footer'
const AuthWrapper = ({ children }: PropsWithChildren) => {
    //will use this later for Auth and loading
    return (
        <StyledAuthWrapper>
            <Nav />
            {children}
            <Footer />
        </StyledAuthWrapper>
    )
}

export default AuthWrapper
