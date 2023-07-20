export interface HomePageProps {
    heroImg: {
        altText: string
        src: string
    }
    heroBanner: string
}

export interface ProductProps {
    id: string
    inStock: boolean
    name: string
    price: number
    size: { symbol: string; quantity: number }[]

    mainImg: {
        url: string
        altText: string
    }
    allImg: {
        url: string
        altText: string
    }[]
}
