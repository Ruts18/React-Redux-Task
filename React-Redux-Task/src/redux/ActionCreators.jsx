import axios from 'axios';

export const fetchPosts = () => (dispatch) => {
  dispatch({ type: "FETCH_POSTS_REQUEST" }); //network request occure to retirve the post 
  axios.get("https://jsonplaceholder.typicode.com/posts")

    .then((response) => {
      dispatch({ type: "FETCH_POSTS_SUCCESS", payload: response.data });
    })
    .catch((error) => {
      dispatch({ type: "FETCH_POSTS_FAILURE", payload: error.message });
    });
};



export const createPost = (postData) => async (dispatch) => {
  try {
    //dispatches action to redux store//
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });

    if (!response.ok) {
      throw new Error("Failed to create post"); 
    }

    const data = await response.json(); //pause execution of code //wait 

    dispatch({
      type: "ADD_POST_SUCCESS",
      payload: data,
    });

    console.log(data);
  } 
  catch (error) {
    console.error("Error creating post:", error);
  }
};






