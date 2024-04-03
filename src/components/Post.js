import React from "react";
import { Link } from "react-router-dom";
import "./blogindex.css";

const Post = ({ post }) => {


  return (
    <article>
      <Link to={`/post/${post.id}`} className="Link">
        <div className="allpost">
          <div className="posthead">
            <div>
              <h2 className="postTitle">{post.title}</h2>
            </div>
            <div>
              <img className="postImg" src={post.imageUrl} alt="" />
            </div>
          </div>
          <div className="postbody">
            <div className="postBodyTxt">
              <p>
                {post.body.length <= 150
                  ? post.body
                  : `${post.body.slice(0, 150)}...`}
              </p>
            </div>
            <div>
              <p className="postDate">{post.datetime}</p>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default Post;
