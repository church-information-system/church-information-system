import { useEffect, useState } from "react";
import { requestImage } from "../api/FirebaseHelper";

export default function Post({ post }) {
  const [image, setImage] = useState("");

  useEffect(() => {
    async function getImage() {
      let imgSrc = await requestImage(post.id, "events", "jpg");
      setImage(() => imgSrc);
    }

    getImage();
  }, [post.id]);

  return (
    <div className="card posts_card" key={post.id}>
      {image !== null ? (
        <img src={image} className="post_img" alt="events" />
      ) : (
        ""
      )}
      <div className="card-header flex-space">
        <div className="post_title">{post.title}</div>
        <div className="post_date">{post.date}</div>
      </div>
      <div className="card-body">
        <p className="card-text">{post.content}</p>
      </div>
    </div>
  );
}
