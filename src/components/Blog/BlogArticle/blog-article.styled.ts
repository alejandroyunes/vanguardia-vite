import styled from "styled-components"

export const BlogArticleContainer = styled.div`
  max-width: ${({ theme }) => theme.breakpoint.md};
  margin: 0 auto;
  padding: 24px 24px;
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
      grid-template-columns: 1fr;
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
        p {
          font-style: italic;
          color: ${({ theme }) => theme.palette.red};
        }
        @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
          padding-bottom: 16px;
        }
      }
      .article-title {
        margin-bottom: 16px;
        h2 {
          text-align: left;
          font-size: 2rem;
          font-weight: bold;
          color: ${({ theme }) => theme.palette.primary.main};
          line-height: 3rem;
        }
        @media (max-width: ${({ theme }) => theme.breakpoint.sm}) { 
          h2 {
            font-size: 1.5rem;
            line-height: 1.5rem;
          }
        }
      }
    

    }
    .content {
      grid-area: content;
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
        padding: 0 16px 24px 0;
        border-bottom: 2px solid ${({ theme }) => theme.palette.gray};
      }
      .article-summary__body {
        padding: 24px 0;
        p {
          padding-bottom: 8px;
          color: ${({ theme }) => theme.textColor};
          strong {
            font-weight: bold;
            color: ${({ theme }) => theme.palette.red};
          }
        }
        h2 {
          font-size: 24px;
          padding: 8px 0;
          color: ${({ theme }) => theme.palette.primary.main};
        }
      }
    }
    .meta-box-article {
      grid-area: meta;
      background: ${({ theme }) => theme.palette.secondary.contrastText};
      padding: 8px 8px;
      margin-left: 16px;
      list-style: none;
      border-radius: 11px;
      font-size: 0.8em;
      height: fit-content;
      width: fit-content;
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
      }

      .published, .tags, .author, .twitter {
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
  }

  .article-author {
    grid-area: author;
    padding-right: 16px;
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
  }
`