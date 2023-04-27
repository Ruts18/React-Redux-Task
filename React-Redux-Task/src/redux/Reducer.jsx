const initialState = {
  posts: [],
  error: null,
};

//all actions of application
//reducer should update the state to reflect this.
const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_POSTS_REQUEST":
      return { ...state, };   
      //properties 
    case "FETCH_POSTS_SUCCESS":
      return {
        ...state,
        posts: action.payload,  //fetch or addd from server //arrya of post object
      };  
    case "FETCH_POSTS_FAILURE":
      return {
        ...state,
        posts: [],
        error: action.payload,
      };
    case "ADD_POST_REQUEST":
      return {
        ...state,

      };
    case "ADD_POST_SUCCESS":
      return {
        ...state,
        posts: [
        ...state.posts, 
        action.payload], 

      };
    case "ADD_POST_FAILURE":
      return {
        ...state,
        error: action.payload,//errror has occured //curent error state of application 
      };
    default:
      return state;
  }
};

export default postsReducer;
