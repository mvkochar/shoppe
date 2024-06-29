type Product = {
    id: number
    image: string
    title: string
    price: string 
}

const ProductsList:Product[] = [
    {
        id: 0,
        image: '/images/catalog/1.png',
        title: 'Lira Earrings',
        price: '20.00'
    },

    {
        id: 1,
        image: '/images/catalog/2.png',
        title: 'Hal Earrings',
        price: '25.00'
    },

    {
        id: 2,
        image: '/images/catalog/3.png',
        title: 'Kaede Hair Pin Set Of 3',
        price: '30.00'
    },

    {
        id: 3,
        image: '/images/catalog/4.png',
        title: 'Hair Pin Set of 3',
        price: '30.00'
    },

    {
        id: 4,
        image: '/images/catalog/5.png',
        title: 'Plaine Necklace',
        price: '19.00'
    },

    {
        id: 5,
        image: '/images/catalog/6.png',
        title: 'Yuki Hair Pin Set of 3',
        price: '29.00'
    }
]

export default ProductsList