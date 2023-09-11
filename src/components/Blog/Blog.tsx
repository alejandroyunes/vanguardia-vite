import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { blogDataProps } from "./blog-data";
// import { useNavigate } from "react-router-dom";
import Title from "../../components/Title/Title";
import { Link } from "react-router-dom";
import { BlogContainer } from "./blog.styled";

export default function Blog() {
  // let history = useNavigate();

  const [posts, setPosts] = useState([] as any);

  useEffect(() => {
    const fetch = async () => {
      try {
        const article: any[] = await blogDataProps;
        setPosts([...article]);
      } catch (err) {
        console.error(err);
      }
    };
    fetch();
  }, []);

  return (
    <>
      <Title message={"Blog"} title={""} />

      <BlogContainer>
        {posts.map((e: any, i: React.Key | null | undefined) => (
          <Link to={`/blog-article/${e.id}`} style={{ textDecoration: "none" }}>
            <div className="child-card" key={i}>
              <img className="about-logo" src={`${e.url}`} alt="" />
              <h4>{e.title}</h4>
              <p>{e.blogSummary}</p>
            </div>
          </Link>
        ))}
      </BlogContainer>
    </>
  );
}
