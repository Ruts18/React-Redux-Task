import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../redux/ActionCreators";
import styled from "styled-components";
import PostDetails from "./postDetails";
import Modal from "./Modal";
import { useAuth0 } from "@auth0/auth0-react";
const DashboardTablePage = ({ posts, error, fetchPosts }) => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [isCreatePostModalOpen, setCreatePostModalOpen] = useState(false);
  // const {  } = useAuth0();
  // const { } = useAuth0();
  const { loginWithRedirect,logout , user, isAuthenticated} = useAuth0();
  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);
  if (error) {
    return <div>Error: {error}</div>;
  }
  const handleRowClick = (post) => {
    setSelectedPost(post);
  };
  return (
    <Container>
      <div className="btn">
        <button onClick={() => setCreatePostModalOpen(true)}>
          Add New Post
        </button>
        {isAuthenticated && (<li>
          <p>
            {user.name}
          </p> </li>)}
        {
          isAuthenticated ? (
            <li><button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
            Log Out
          </button>
          </li>) : (
            <li> <button onClick={() => loginWithRedirect()}>
            Log In</button>
          </li>)
        }

      </div>

      {isCreatePostModalOpen && (
        <Modal onClose={() => setCreatePostModalOpen(false)} />
      )}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Descripation</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id} onClick={() => setSelectedPost(post)}>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.body}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="details">
        {selectedPost && <PostDetails post={selectedPost} />}
      </div>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    posts: state.posts.posts,
    error: state.posts.error,
  };
};

const mapDispatchToProps = {
  fetchPosts,
};


const Container = styled.div`
  display: flex;
  justify-content: space-between;
  .details {
    border: 2px solid grey;
    border-radius: 8px;
    height: 70vh;
    width: 50vw;
    margin-left: 1px;
    margin-right: 1rem;
    margin-top: 7rem;
    top: 0;
    position: sticky;
    padding: 1rem;
  }
  table {
    margin-top: 7rem;
    margin-left: 20px;
    border-collapse: separate;
    border: 2px solid grey;
    border-radius: 8px; 
}
thead{
          background: #fdd6f9;
}

 ;;
    padding: 1px;
  }
  
  tr:nth-child(even) {
    padding: 0px;
  }
tbody{
    border: 2px solid black;
    border-radius: 8px;  
}
  th {
    // background-color: #ddd;
    font-weight: bold;
  }
label{ 
  display: flex;
  align-items: center;
   background: #fdd6f9;

}
  button {
    transiton-duration: 0.4s;
    margin-bottom: 1rem;
    align-item:center;
    padding:5px;
    width: 155px;
    height: 30px; 
    border:2px solid green ;
    display:grid;
  }
  button:hover{
    background-color:#4CAF50;
    color:white;
  }
`;


export default connect(mapStateToProps, mapDispatchToProps)(DashboardTablePage);
