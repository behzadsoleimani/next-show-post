import Link from 'next/link'
import articleStyles from '../styles/Article.module.css'
import { IArticleItem } from '../types';

const ArticleItem = ({ article, arrayLength }: IArticleItem) => {

  const date = new Date((new Date().getTime() - (1000000000 * (arrayLength - (arrayLength - article.id))))).toDateString();
  return (
    <article>
      <header>
        <h3 className={articleStyles.title}>
          <Link  href={`/article/${article.id}`}>
            <a className={articleStyles.link}>{article.title}</a>
          </Link>
        </h3>
        <small className={articleStyles.subHeader}>
          {date}
        </small>
      </header>
      <p className={articleStyles.para}>{article.body.substring(0, 60)}</p>
    </article>

  )
}

export default ArticleItem
