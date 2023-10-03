import { useState, useEffect } from "react"
import { BlogDataTypes, blogData } from "../blog-data"
// import { useReadLocalStorage } from "usehooks-ts"

export default function useFetchBlogData() {
  const [posts, setPosts] = useState<BlogDataTypes[]>([])
  // const lang = useReadLocalStorage('language')


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