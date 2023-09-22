import { Key } from "react"
import avatarImg from "../../../assets/people/alejo-developer.png"
import { BlogDataTypes } from "../blog-data"
import { BlogArticleContainer } from "./blog-article.styled"
import Time from "./svgs/time"
import Twitter from "./svgs/twitter"
import Tool from './svgs/tool'
import Star from "./svgs/star"
import React from "react"
import useFetchBlogArticle from "../hooks/useFetchBlogArticle"

export default function BlogArticle() {

  const { postFiltered } = useFetchBlogArticle()

  return (
    <BlogArticleContainer>
      {postFiltered.map((post: BlogDataTypes, index: Key) => (
        <div className="article" key={index}>

          <div className="title">
            <div className="article-date">
              <p>{post.date}</p>
            </div>
            <div className="article-title">
              <h2>{post.title}</h2>
            </div>
          </div>

          <div className="content">
            <section className="article-summary">
              {post.articleSummary}
            </section>
            <section className="article-summary__body">
              {post.step.map((e: any, index: Key | null | undefined) => (
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
                {post.time} min read
              </li>
              <li className="item tags">
                {post.related.map((e: any, index: Key | null | undefined) => (
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
