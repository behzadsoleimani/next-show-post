export interface IHomePage {
    articles: any[]
}


export interface IMeta {
    title: string,
    keywords?: string,
    description?: string
}

export interface IArticle {
    id: number,
    title: string,
    body: string,
    userId: number
}

export interface IArticleItem {
    article: IArticle,
    arrayLength: number
}

export interface IArticleList {
    articles: IArticle[],
    arrayLength: number
}