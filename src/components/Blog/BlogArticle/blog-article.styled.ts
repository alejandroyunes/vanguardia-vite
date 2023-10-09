import styled from "styled-components"

export const BlogArticleContainer = styled.section`
  max-width: ${({ theme }) => theme.breakpoint.md};
  margin: 0 auto;
  padding: 24px 24px 0;
  display: grid;
  grid-template-columns: 0.2fr 0.8fr;
  grid-template-rows: auto;
  grid-template-areas: "author article";

  @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    grid-template-areas:
      "article"
      "author";
  }

  .article {
    display: grid;
    grid-template-columns: repeat(3, auto);
    gap: 0px 0px;
    grid-area: article;
    grid-template-areas:
      "title title title"
      "content content meta";
    border-bottom: none;

    @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
      grid-template-columns: auto;
      grid-template-rows: repeat(3, auto);
      grid-template-areas:
        "title"
        "meta"
        "content";
      border-bottom: 2px solid ${({ theme }) => theme.palette.red};
    }
    .title {
      grid-area: title;
      .article-date {
        span {
        font-style: italic;
        font-weight: 500;
        display: block;
          color: ${({ theme }) => theme.palette.red};
        }
        @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
          padding-bottom: 16px;
        }
      }
      .article-title {
        margin-bottom: 16px;
        h1 {
          text-align: left;
          font-size: 2rem;
          font-weight: bold;
          color: ${({ theme }) => theme.palette.primary.main};
          line-height: 3rem;
        }
        @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
          h1 {
            font-size: 1.5rem;
            line-height: 1.5rem;
          }
        }
      }

    }
    .content {
      grid-area: content;
      margin-right: 16px;
      .article-summary::before {
        content: "Breve Resumen ↬ ";
        display: inline;
        font-style: normal;
        letter-spacing: 2px;
        font-size: 0.75em;
        margin: 0;
        font-weight: 600;
        color: ${({ theme }) => theme.palette.red};
        text-transform: uppercase;
      }
      .article-summary {
        color: ${({ theme }) => theme.textColor};
        font-style: italic;
        padding-bottom: 24px;
        border-bottom: 2px solid ${({ theme }) => theme.palette.gray};
      }
      .article-image {
        margin: 24px 0;
        display: flex;
        justify-content: center;
        img {
          height: 300px;
          max-width: auto;

        }
      @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
        text-align: center;
        img {
          height: auto;
          max-width: 100%;
        }
      }
      }
      .article-summary__body {
        .step {
          margin-bottom: 24px;
          h2 {
            font-size: 24px;
            padding: 8px 0;
            color: ${({ theme }) => theme.palette.primary.main};
          }
          p {
            padding-bottom: 8px;
            color: ${({ theme }) => theme.textColor};

            strong {
              font-weight: 600;
              padding-right: 8px;
              color: ${({ theme }) => theme.palette.red};
            }
          }
          ul {
            padding-bottom: 10px;
            li::before {
              content: "↬";
              display: inline;
              font-style: normal;
              letter-spacing: 2px;
              font-size: 1em;
              padding-left: 16px;
              margin: 0;
              font-weight: 600;
              color: ${({ theme }) => theme.palette.red};
              text-transform: uppercase;
            }

            li {
              list-style-type: none;
            }
          }
          span {
            a {
              color: ${({ theme }) => theme.palette.primary.main};
            }
          }
          pre {
            background: ${({ theme }) => theme.textColor};
            border: 1px solid #ddd;
            border-left: 3px solid #f36d33;
            color: ${({ theme }) => theme.bodyColor};
            page-break-inside: avoid;
            font-family: monospace;
            font-size: 15px;
            line-height: 1.6;
            margin: 10px 0;
            max-width: 100%;
            overflow: auto;
            padding: 1em 1.5em;
            display: block;
            word-wrap: break-word;
          }
        }
      }
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
        margin-right: 0;
    }
    }
    .meta-box {
      grid-area: meta;
      position: sticky;
      top: 60px;
      height: fit-content;
      .share {
        background: ${({ theme }) => theme.palette.secondary.contrastText};
        padding: 8px 8px;
        list-style: none;
        border-radius: 11px;
        font-size: 0.8em;
        .item {
          list-style: none;
          line-height: 1.4;
          padding: 4px 8px;
          color: ${({ theme }) => theme.palette.black};
          a {
            background-color: transparent;
            text-decoration-skip-ink: auto;
            text-decoration-line: underline;
            color: #006fc6;
          }
          span {
            padding-right: 4px;
          }
          display: flex;
          svg {
            height: 18px;
            width: 18px;
            margin-right: 8px;
          }
        }
        
        @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
          margin: 0 0 16px 0;
        }
        @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
          width: 100%;
        }
      }
      .ad-banner__short {
        margin: 0 0 20px 0;
        height: 180px;
        width: 100%;
        background-color: lightpink;
      }
      .ad-banner__long {
        margin-top: 20px;
        height: 400px;
        width: 100%;
        background-color: lightblue;
      }
      @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
        position: relative;
        top: 0;
        .ad-banner__long {
          display: none;
        }
        .ad-banner__short {
          display: none;
        }
      }
    }


  .article-author {
    grid-area: author;
    padding-right: 16px;
    position: sticky;
    top: 60px;
    height: fit-content;
    @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
      padding-top: 16px;
    }
    .article-header {
      display: flex;
      .article-author-image {
        .avatar {
          vertical-align: middle;
          width: 50px;
          height: 50px;
          border-radius: 50%;
        }
      }
      .article-author-title {
        display: flex;
        align-items: center;
        padding-left: 16px;
        p {
          font-weight: bold;
          font-size: 1rem;
          color: ${({ theme }) => theme.palette.primary.main};
        }
      }
    }
    .article-author-description {
      padding-top: 10px;
      p {
          color: ${({ theme }) => theme.palette.secondary.main};
        }
    }
    .ad-banner__long-left {
      margin: 20px 0;
      height: 380px;
      width: 100%;
      background-color: lightpink;
      @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
        display: none;
      }
    }
  }
`