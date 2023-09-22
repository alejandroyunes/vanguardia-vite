import { useState, useEffect } from "react"
import { BlogDataTypes } from "../blog-data"
import useFetchBlogData from "./useFetchBlogData"
import { useLocation } from "react-router-dom"

export default function useFetchBlogArticle() {

  let id = Number(useLocation().pathname.substring(14))

  const [postFiltered, setPostFilter] = useState<BlogDataTypes[]>([])
  const { posts } = useFetchBlogData()

  const fetch = () => {
    try {
      const article = posts.filter((e: BlogDataTypes) => e.id == id)
      setPostFilter(article);
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    fetch()
  }, [posts])


  return {
    postFiltered
  }
}