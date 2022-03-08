import ArticleList from '../components/ArticleList'
import { IHomePage } from '../types';

const Home = ({ articles }: IHomePage) => {

  return (
    <div>
      <ArticleList articles={articles} arrayLength={articles.length} />
    </div>
  )
}

export const getServerSideProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  }
}

export default Home;
