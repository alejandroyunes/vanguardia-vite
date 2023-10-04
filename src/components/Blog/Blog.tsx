import Title from "../../components/Title/Title"
import { Link } from "react-router-dom"
import { BlogContainer } from "./blog.styled"
import useFetchBlogData from "./hooks/useFetchBlogData"
import { BlogDataTypes } from "./blog-data"
import { useReadLocalStorage } from "usehooks-ts"
import { english, spanish } from "../../pages/translate/blog"

export default function Blog() {
  const { posts } = useFetchBlogData()

  const lang = useReadLocalStorage('language')
  const language = lang === 'spanish' ? spanish : english

  return (
    <>
      <Title title={language.title} message={language.subtitle}/>

      <BlogContainer>
        {posts.map((post: BlogDataTypes, i) => (
          <Link to={`/blog-article/${post.id}`} key={i}>
            <div className="child-card">
              <img src={`${post.image}`} alt={post.alt} />
              <h2>{post.title}</h2>
              <p>{post.blogPageSummary}</p>
            </div>
          </Link>
        ))}
      </BlogContainer>
    </>
  )
}
