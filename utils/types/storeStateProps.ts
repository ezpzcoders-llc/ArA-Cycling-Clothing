export interface HomePageProps {
    heroImg: {
        altText: string
        src: string
    }
    heroBanner: string
}

export interface AboutPageProps {
    header: ''
    text: ''
    img: {
        src: ''
        altText: ''
    }
}

export interface AboutDataProps {
    top: AboutPageProps
    bottom: AboutPageProps
    center: AboutPageProps
}

export interface ProductProps {
    id: string
    inStock: boolean | null
    title: string
    price: number | null
    size: { sizeSymbol: string; size: string; quantity: number | null }[]
    color: string
    img: {
        src: string
        altText: string
    }
    imgList: {
        src: string
        altText: string
    }[]
    imgGallery: {
        src: string
        altText: string
    }[]
    productInfo: {
        productDetails: {
            label: string
            details: string[]
        }
        sizingInfo: {
            label: string
            chartImage: {
                src: string
                altText: string
            }
        }
    }
}
