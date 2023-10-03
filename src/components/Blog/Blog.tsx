import Title from "../../components/Title/Title"
import { Link } from "react-router-dom"
import { BlogContainer } from "./blog.styled"
import useFetchBlogData from "./hooks/useFetchBlogData"
import { BlogDataTypes } from "./blog-data"

export default function Blog() {
  const { posts } = useFetchBlogData()

  return (
    <>
      <Title title={"Blog"}  />

      <BlogContainer>
        {posts.map((post: BlogDataTypes, i: React.Key ) => (
          <Link to={`/blog-article/${post.id}`} key={i}>
            <div className="child-card">
              <img src={`${post.url}`} alt="" />
              <h2>{post.title}</h2>
              <p>{post.blogSummary}</p>
            </div>
          </Link>
        ))}
      </BlogContainer>
    </>
  )
}
