import { useLocation } from 'react-router-native'

export const getPageName = () => {
    const { pathname } = useLocation()
    const pageName = pathname.split('/')[1]
    return pageName
}

export const getPageId = () => {
    const { pathname } = useLocation()
    const pageId = pathname.split('/')[2]
    return pageId
}