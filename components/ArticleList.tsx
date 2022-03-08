import ArticleItem from './ArticleItem'
import articleStyles from '../styles/Article.module.css'
import { IArticleList } from '../types'

const ArticleList = ({ articles , arrayLength }: IArticleList) => {
  return (
    <main className={articleStyles.grid}>
      {articles.map((article: any) => (
        <ArticleItem article={article} key={article.id} arrayLength={arrayLength} />
      ))}
    </main>
  )
}

export default ArticleList
