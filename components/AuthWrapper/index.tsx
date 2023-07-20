import { PropsWithChildren, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { setLoading } from '@/lib/redux/slices/app'
import { StyledAuthWrapper } from './StyledAuthWrapper'
import Nav from '../Nav'
import Footer from '../Footer'
import { RootState } from '@/lib/redux/store'
const AuthWrapper = ({ children }: PropsWithChildren) => {
    const router = useRouter()
    const dispatch = useDispatch()

    const handleRouteChangeStart = () => dispatch(setLoading(true))
    const handleRouteChangeComplete = () => dispatch(setLoading(false))
    useEffect(() => {
        router.events.on('routeChangeStart', handleRouteChangeStart)
        router.events.on('routeChangeComplete', handleRouteChangeComplete)

        return () => {
            router.events.off('routeChangeStart', handleRouteChangeStart)
            router.events.off('routeChangeComplete', handleRouteChangeComplete)
        }
    }, [router])
    return (
        <StyledAuthWrapper>
            <Nav />
            {children}
            <Footer />
        </StyledAuthWrapper>
    )
}

export default AuthWrapper
