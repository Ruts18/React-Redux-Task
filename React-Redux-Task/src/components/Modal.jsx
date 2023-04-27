import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createPost } from "../redux/ActionCreators";
import styled from "styled-components";

let postId = 100;
const CreatePostModal = ({ onClose }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleFormSubmit = (e)   => {
    e.preventDefault();
    dispatch(createPost({ id: postId++, title, body }));
    onClose();
  };

  return (
    <Container>
      <div className="modal-content">
        <h2 className="post-head"> New Post</h2>
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label htmlFor="body">Body</label>
          <textarea
            id="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
          <button type="submit">Add New Post</button>
        </form>
      </div>
    </Container>
  );
};
const Container = styled.div`
  border: 2px solid grey;
  margin-top: 7rem;
  border-radius: 8px;
  border-collapse: separate;
  margin-left: 1px;
  margin-bottom: 700rem;
  width: 10vw;
  .modal-content {
    display: flex;
    flex-direction: column;
  }

  div {
    background: #fdd6f9;
  }

  label {
    padding: 5px;
    font-weight: bold;
  }
  input {
    margin-left: 5px;
    margin-right: 5px;
  }
  textarea {
    padding: 5px;
    margin-left: 5px;
    margin-right: 100px;
  }
  button {
    border-radius: 8px;
    margin-top: 20px;
    margin-bottom: 20px;
    align-item: center;
    width: 155px;
    height: 30px;
    display: grid;
  }

  .post-head {
    margin-left: 33%;
  }
`;

export default CreatePostModal;
