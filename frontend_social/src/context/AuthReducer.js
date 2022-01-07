const AuthReducer = (state, action) => {
    switch (action.type) {
      case 'UPDATE_NAME':
        return {
         ...state,
         username:action.payload
          
        };
        default:return state;
    };
  };
  
  export default AuthReducer;