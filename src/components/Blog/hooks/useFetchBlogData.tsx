import { useState, useEffect } from "react"
import { BlogDataTypes, spanish, english } from "../blog-data"
import { useReadLocalStorage } from "usehooks-ts"

export default function useFetchBlogData() {

  const lang = useReadLocalStorage('language')
  const language = lang === 'spanish' ? spanish : english

  const [posts, setPosts] = useState<BlogDataTypes>()

  const fetch = async () => {

    try {
      setPosts(language)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    fetch()
  }, [lang])

  return {
    posts
  }
}