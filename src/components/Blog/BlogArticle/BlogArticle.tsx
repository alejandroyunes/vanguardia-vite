import avatarImg from './images/alejo.webp'
import { BlogDataTypes } from "../blog-data"
import { BlogArticleContainer } from "./blog-article.styled"
import Time from "./svgs/time"

import useFetchBlogArticle from "../hooks/useFetchBlogArticle"
import Tools from './Tools/Tools'
import Shared from './Share/Shared'

export default function BlogArticle() {

  const { postFiltered } = useFetchBlogArticle()

  return (
    <BlogArticleContainer>
      {postFiltered.map((post: BlogDataTypes, index) => (
        <div className="article" key={index}>

          <div className="title">

            <div className="article-date">
              <span>{post.date}</span>
            </div>
            <div className="article-title">
              <h1>{post.title}</h1>
            </div>

          </div>

          <div className="content">
            <div className="article-summary">
              {post.articleSummary}
            </div>
            <div className="article-image">
              <img src={post.image} alt="" />
            </div>
            <div className="article-summary__body">
              {post.step.map((step, index) => (
                <div key={index} className="step">
                  <h2>{step.title}</h2>
                  <p>
                    <strong>{step.step} </strong>
                    {step.description}
                  </p>
                  {step.resource &&
                    <span aria-label="link">⬇️📦 <a href={step.resource}>{step.resource}</a></span>}
                </div>
              ))}
            </div>
          </div>

          <div className="meta-box">
            <div className="ad-banner__short">
            </div>
            <div className="share">
              <ul>
                <li className="item">
                  <Time />
                  lectura de {post.time} min
                </li>
                <li className="item">
                  <Tools tools={post.related} />
                </li>
                <li className="item">
                    <Shared icons={post.shared}/>
                </li>
              </ul>
            </div>
            <div className="ad-banner__long">
            </div>
          </div>

        </div>
      ))}

      <div className="article-author">

        <div className="article-header">
          <div className="article-author-image">
            <img src={avatarImg} alt="Avatar" className="avatar" />
          </div>
          <div className="article-author-title">
            <p>Alejandro Cano</p>
          </div>
        </div>
        <div className="article-author-description">
          <p>
            Un diseñador independiente y desarrollador front-end dedicado a mejorar la experiencia de todos en la web, con un enfoque centrado en la mejora progresiva y el perfeccionamiento constante.
          </p>
        </div>

        <div className="ad-banner__long-left">
        </div>
        <div className="ad-banner__long-left">
        </div>

      </div>

    </BlogArticleContainer>
  )
}


