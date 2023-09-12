import React, {  Key, useEffect, useState } from "react"
import avatarImg from "../../../assets/people/alejo-developer.png"
import { blogDataProps } from "../blog-data"
import { useLocation } from "react-router-dom"
import { BlogArticleContainer } from "./blog-article.styled"
import Time from "./svgs/time"
import Twitter from "./svgs/twitter"
import Tool from './svgs/tool'
import Star from "./svgs/star"

export default function BlogArticle() {
  let id = useLocation().pathname.substring(14)
  const [posts, setPosts] = useState([] as any)

  useEffect(() => {
    const fetch = async () => {
      try {
        const article: any[] = await blogDataProps
        const uniqueAriticle = article.filter((e: any) => e.id == id)
        setPosts([...uniqueAriticle])
      } catch (error) {
        console.error(error)
      }
    }
    fetch()
  }, [id])

  return (
    <BlogArticleContainer>
      {posts.map((e: any, index: Key | null | undefined) => (
        <div className="article" key={index}>

          <div className="title">
            <div className="article-date">
              <p>{e.date}</p>
            </div>
            <div className="article-title">
              <h2>{e.title}</h2>
            </div>
          </div>

          <div className="content">
            <section className="article-summary">
              {e.articleSummary}
            </section>
            <section className="article-summary__body">
              {e.step.map((e: any, index: Key | null | undefined) => (
                <React.Fragment key={index}>
                  <h2>{e.title}</h2>
                  <p>
                    <strong>{e.step} </strong>
                    {e.description}
                  </p>
                </React.Fragment >
              ))}
            </section>
          </div>

          <div className="meta-box-article">
            <ul>
              <li className="item published">
                <Time />
                {e.time} min read
              </li>
              <li className="item tags">
                {e.related.map((e: any,  index: Key | null | undefined) => (
                  <React.Fragment key={index}>
                    <Tool />
                    <a href="/category/css">{e}</a>
                    <span>,</span>
                  </React.Fragment>
                ))}
              </li>
              <li className="item author">
                <Star />
                Saved for offline reading
              </li>
              <li className="item twitter">
                <Twitter />
                Share on <a href="/">Twitter </a>&
                <a href="/"> LinkedIn</a>
              </li>
            </ul>
          </div>

        </div>
      ))}
      <div className="article-author">
        <div className="article-header">
          <div className="article-author-image">
            <img src={avatarImg} alt="Avatar" className="avatar" />
          </div>
          <div className="article-author-title">
            <p>Sobre el autor</p>
          </div>
        </div>
        <div className="article-author-description">
          <p>
            Un diseñador independiente y desarrollador front-end dedicado a mejorar la experiencia de todos en la web, con un enfoque centrado en la mejora progresiva y el perfeccionamiento constante.
          </p>
        </div>
      </div>
    </BlogArticleContainer>
  )
}
