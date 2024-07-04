type TPost = {
    id: number
    image: string
    category: string
    author: string
    date: string
    title: string
    description: string
}

const PostsList:TPost[] = [
    {
        id: 0,
        image: '/images/blog/1.png',
        author: 'Anny Jonson',
        category: 'Fashion',
        date: 'October 8, 2020',
        title: 'Top Trends From Spring',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.  faucibus augue, a maximus elit ex vitae libero...'
    },

    {
        id: 1,
        image: '/images/blog/2.png',
        author: 'Anny Jonson',
        category: 'Fashion',
        date: 'October 8, 2020',
        title: 'Top Trends From Spring',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.  faucibus augue, a maximus elit ex vitae libero... '
    },

    {
        id: 2,
        image: '/images/blog/3.png',
        author: 'Anny Jonson',
        category: 'Fashion',
        date: 'October 8, 2020',
        title: 'Top Trends From Spring',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.  faucibus augue, a maximus elit ex vitae libero... '
    },

    {
        id: 3,
        image: '/images/blog/4.png',
        author: 'Anny Jonson',
        category: 'Fashion',
        date: 'October 8, 2020',
        title: 'Top Trends From Spring',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.  faucibus augue, a maximus elit ex vitae libero... '
    }
]

export default PostsList