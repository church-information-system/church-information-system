import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// PAGES
import Header from "./layout/header";
import Footer from "./layout/footer";

import church from "./../assets/images/church.png";
import donateicon from "./../assets/images/donateicon.png";

export default function Posts(props) {
  const { posts } = props;

  return (
    <div>
      <Header />

      <div className="posts_welcome mlr">
        <h3>
          What's Popping ?
          <img src={church} alt="church" />
        </h3>
      </div>

      {/* POSTS */}
      <div className="posts margin padding mlr mt-5">
        <div className="post_main_head">
          <h3 className="post_header">Posts</h3>
        </div>
        {posts.map((post) => (
          <div className="card posts_card mb-3" key={post.id}>
            <div className="card-header flex-space">
              <div className="post_title">{post.title}</div>
              <div className="post_date">{post.date}</div>
            </div>
            <div className="card-body">
              <div className="mb-0">
                <p>{post.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* FLOATING DONATION ICON */}

      <Link to="/donate" className="donate_icon">
        <img src={donateicon} alt="donate here" />
        <div className="donate_tooltip">Click here to donate</div>
      </Link>

      <Footer />
    </div>
  );
}
