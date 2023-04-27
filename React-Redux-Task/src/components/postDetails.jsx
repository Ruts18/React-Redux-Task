import React from "react";
// import styled from 'styled-components';

export default function PostDetails({ post }) {
  return (
    <div>
      <h3><label htmlFor="detail">Details</label></h3>

      <h3>id</h3>
      <p>{post.id}</p>

      <h3>Title</h3>
      <p>{post.title}</p>

      <h2>Details</h2>
      <p>{post.body}</p>
    </div>
  );
}
