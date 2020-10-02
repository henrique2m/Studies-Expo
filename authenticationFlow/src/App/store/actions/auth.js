import * as React from 'react';

function Auth() {
  const auth = {};

  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );

  auth.state = {
    isLoading: state.isLoading,
    isSignout: state.isSignout,
    userToken: state.userToken,
  };

  auth.dispatch = dispatch;

  return auth;
}

export default Auth;
