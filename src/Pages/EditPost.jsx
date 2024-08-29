import React, { useEffect, useState } from "react";
import { Container, PostForm } from "../Components/index";
import appwriteService from "../appwrite/Config";
import { useNavigate, useParams } from "react-router-dom";

function EditPost() {
  const [post, setPost] = useState(null);
  const { postId } = useParams();
  const navigate = useNavigate();

  
  useEffect(() => {
    if (postId) {
      appwriteService.getPost(postId).then((post) => {
        if (post) {
          setPost(post);
        }
      });
    } else {
      navigate("/");
    }
  }, [postId, navigate]);
  return post ? (
    <div className="py-8">
      <Container>
        <PostForm post={post} />
      </Container>
    </div>
  ) : null;
}

export default EditPost;