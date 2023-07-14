import { useEffect, useState } from 'react'
import useBreakpointSize, {
    MOBILE_BREAKPOINT
} from '@/utils/hooks/useBreakPointSize'

import DesktopNav from './Desktop'
import MobileNav from './Mobile'

const Nav = () => {
    const breakpoint = useBreakpointSize()
    const [showMobileNav, setShowMobileNav] = useState(false)

    useEffect(() => {
        setShowMobileNav(breakpoint === MOBILE_BREAKPOINT)
    }, [breakpoint])
    return <>{showMobileNav ? <MobileNav /> : <DesktopNav />}</>
}

export default Nav
