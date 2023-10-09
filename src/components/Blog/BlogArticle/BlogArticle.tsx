import avatarImg from './images/alejo.webp'
import { BlogArticleContainer } from "./blog-article.styled"
import Time from './Time/time'

import useFetchBlogArticle from "../hooks/useFetchBlogArticle"
import Tools from './Tools/Tools'
import Shared from './Share/Shared'
import { Helmet, HelmetProvider } from 'react-helmet-async'

export default function BlogArticle() {

  const { post } = useFetchBlogArticle()

  return (
    <BlogArticleContainer>

      {post && post.blog.map((e, i) => (
        <div className="article" key={i}>

          <HelmetProvider>
            <Helmet>
              <meta name="description" content={e.meta} />
            </Helmet>
          </HelmetProvider>


          <div className="title">

            <div className="article-date">
              <span>{e.date}</span>
            </div>
            <div className="article-title">
              <h1>{e.title}</h1>
            </div>

          </div>

          <div className="content">
            <div className="article-summary">
              {e.articleSummary}
            </div>
            <div className="article-image">
              <img src={e.image} alt={e.alt} height="300" width="530" />
            </div>
            <div className="article-summary__body">
              {e.step.map((step, i) => (
                <div key={i} className="step">
                  <h2>{step.title}</h2>
                  <p>
                    {step.step && <strong>{step.step}</strong>}
                    {step.description}
                  </p>
                  {step.list?.map((item) => <ul><li> {item} </li></ul>)}

                  {step.code &&
                    <pre>
                      <code>
                        {step.code}
                      </code>
                    </pre>}

                  {step.img && <img src={step.img} alt={step.imgAlt} height="500" />}

                  {step.resource &&
                    <span aria-label="link">⬇️📦 <a href={step.resource}>{step.resource}</a></span>}

                </div>
              ))}
            </div>
          </div>

          <div className="meta-box">
            {/* <div className="ad-banner__short">
            </div> */}
            <div className="share">
              <ul>
                <li className="item">
                  <Time />
                  lectura de {e.time} min
                </li>
                <li className="item">
                  <Tools tools={e.related} />
                </li>
                <li className="item">
                  <Shared icons={e.shared} />
                </li>
              </ul>
            </div>
            {/* <div className="ad-banner__long">
            </div> */}
          </div>

        </div>
      ))}

      <div className="article-author">

        <div className="article-header">
          <div className="article-author-image">
            <img src={avatarImg} alt="Avatar" className="avatar" />
          </div>
          <div className="article-author-title">
            <p>{post?.author}</p>
          </div>
        </div>
        <div className="article-author-description">
          <p>
            {post?.description}
          </p>
        </div>

        {/* <div className="ad-banner__long-left">
        </div>
        <div className="ad-banner__long-left">
        </div> */}

      </div>

    </BlogArticleContainer>
  )
}


