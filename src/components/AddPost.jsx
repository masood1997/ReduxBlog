import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPost, allPosts } from '../features/posts/postSlice';
import { allUsers } from '../features/users/usersSlice';
const AddPost = () => {
  //   const posts = useSelector(allPosts);
  //console.log(posts.length);
  const users = useSelector(allUsers);
  //console.log(users);
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [userId, setUserId] = useState('');

  const userList = users
    ? users.map((user) => (
        <option key={user.id} value={user.id}>
          {user.author}
        </option>
      ))
    : 'No Users to Display';

  const canSubmit = Boolean(title) && Boolean(description) && Boolean(userId)

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    // const post = {
    //   title: title,
    //   description: description,
    //   id:id
    // };
    dispatch(addPost(title, description, userId));
    setTitle('');
    setDescription('');
    setUserId('');
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <label htmlFor="title">Title</label>
      <input id="title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />

      <label htmlFor="description">Description</label>
      <input id="description" type="text" value={description} onChange={(e) => setDescription(e.target.value)} />

      <label htmlFor="author">Author</label>
      <select id="author" value={userId} onChange={(e) => setUserId(e.target.value)}>
        {userList}
      </select>

      <button disabled={!canSubmit}>Submit</button>
    </form>
  );
};

export default AddPost;
