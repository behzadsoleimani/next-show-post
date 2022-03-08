import Link from 'next/link'
import Meta from '../../../components/Meta'
import articleStyles from '../../../styles/Article.module.css'

const article = ({ article }: any) => {

  return (
    <>
      <Meta title={article.title} />
      <article>
        <header>
          <h3 className={articleStyles.detailTitle}>
            <p className={articleStyles.detailLink}>{article.title}</p>
          </h3>
        </header>
        <p className={articleStyles.para}>{article.body}</p>
      </article>
      <button className={articleStyles.backButton}>      <Link href='/' >Go Back</Link>
      </button>
    </>
  )
}

export const getStaticProps = async (context: any) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  )

  const article = await res.json();

  return {
    props: {
      article,
    },
  }
}

export const getStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)

  const articles = await res.json()

  const ids = articles.map((article: any) => article.id)
  const paths = ids.map((id: number) => ({ params: { id: id.toString() } }))

  return {
    paths,
    fallback: false,
  }
}

export default article
