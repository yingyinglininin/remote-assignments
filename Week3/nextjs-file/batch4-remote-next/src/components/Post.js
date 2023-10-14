import { useState } from 'react';

export default function Post({ post }) {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(post.likeCount);

  const handleLike = () => {
    if (liked) {
      setLiked(false);
      setLikeCount(likeCount - 1);
    } else {
      setLiked(true);
      setLikeCount(likeCount + 1);
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md border-solid">
      <p className='text-black py-2'>{post.content}</p>
      <button onClick={handleLike} className="text-white bg-button-color px-3 py-2 rounded-md">
        👍 ({likeCount})
      </button>
    </div>
  );
}
