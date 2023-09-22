import { useState, useEffect } from "react"
import { BlogDataTypes, blogData } from "../blog-data"

export default function useFetchBlogData() {
  const [posts, setPosts] = useState<BlogDataTypes[]>([])

  const fetch = () => {
    try {
      setPosts(blogData)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    fetch()
  }, [])

  return {
    posts
  }
}