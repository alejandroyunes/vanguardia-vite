import { useState, useEffect } from "react"
import { BlogDataTypes } from "../blog-data"
import useFetchBlogData from "./useFetchBlogData"
import { useLocation } from "react-router-dom"


export default function useFetchBlogArticle() {

  let id = Number(useLocation().pathname.substring(14))

  const [post, setPost] = useState<BlogDataTypes>()
  const { posts } = useFetchBlogData()


  const fetch = () => {

    try {

      if (posts !== undefined) {
        const { author, description } = posts
        const blog = posts.blog.find((e) => e.id === id)

        if (blog !== undefined) {
          const article = {
            author,
            description,
            blog: [blog]
          }
          setPost(article)
        }
      }
    } catch (err) {
      console.error(err);
    }
  }


  useEffect(() => {
    fetch()
  }, [posts])


  return {
    post
  }
}