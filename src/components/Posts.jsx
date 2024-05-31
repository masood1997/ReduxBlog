import React from 'react';
import { useSelector } from 'react-redux';
import { allPosts } from '../features/posts/postSlice';
import DisplayAuthor from './DisplayAuthor';
const Posts = () => {
  const posts = useSelector(allPosts);

  const displayPosts = posts ? (
    posts.map((post) => {
      return (
        <section key={post.id}>
          <p>{post.title}</p>
          <p>{post.description}</p>
          <DisplayAuthor userId={post.userId} />
        </section>
      );
    })
  ) : (
    <p>No Posts to Display</p>
  );

  return <div>{displayPosts}</div>;
};

export default Posts;
