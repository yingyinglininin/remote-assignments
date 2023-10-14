import React, { useState } from 'react';
import { getPostData } from '../data/getPostData';
import Post from './Post';

const PostCount = () => {
  const [posts, setPosts] = useState(getPostData());

  const handleLike = (postId, liked) => {
    const updatedPosts = posts.map((post) => {
      if (post.id === postId) {
        const likeCount = liked ? post.likeCount + 1 : post.likeCount - 1;
        return { ...post, liked, likeCount };
      }
      return post;
    });
    setPosts(updatedPosts);
  };

  return (
    <div>
      {posts.map((post) => (
        <Post key={post.id} post={post} onLike={handleLike} />
      ))}
    </div>
  );
};

export default PostCount;
