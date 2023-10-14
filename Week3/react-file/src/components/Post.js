import React from 'react';
import {
  PostContainer,
  LikeButton,
} from '../styles';

const Post = ({ post, onLike }) => {
  const handleLike = () => {
    // Toggle the like status and update the like count
    onLike(post.id, !post.liked);
  };

  return (
    <PostContainer>
      <p>{post.content}</p>
      <LikeButton liked={post.liked} onClick={handleLike}>
        👍 ({post.likeCount})
      </LikeButton>
    </PostContainer>
  );
};

export default Post;
