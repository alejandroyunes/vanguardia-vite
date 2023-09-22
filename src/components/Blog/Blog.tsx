import { Key } from "react"
import Title from "../../components/Title/Title"
import { Link } from "react-router-dom"
import { BlogContainer } from "./blog.styled"
import useFetchBlogData from "./hooks/useFetchBlogData"
import { BlogDataTypes } from "./blog-data"

export default function Blog() {
  const { posts } = useFetchBlogData()

  return (
    <>
      <Title message={"Blog"} title={""} />

      <BlogContainer>
        {posts.map((post: BlogDataTypes, i: Key ) => (
          <Link to={`/blog-article/${post.id}`} key={i}>
            <div className="child-card">
              <img className="about-logo" src={`${post.url}`} alt="" />
              <h4>{post.title}</h4>
              <p>{post.blogSummary}</p>
            </div>
          </Link>
        ))}
      </BlogContainer>
    </>
  )
}
