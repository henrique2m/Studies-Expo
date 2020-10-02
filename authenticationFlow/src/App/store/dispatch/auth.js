import AuthActions from "../actions/auth";

function authDispatch() {
  const authDispatch = {};
  const authActions = AuthActions();
  const { state, dispatch } = authActions;

  async function signIn(data) {
    dispatch({ type: "SIGN_IN", token: "dummy-auth-token" });
  }
  async function signUp(data) {
    dispatch({ type: "SIGN_IN", token: "dummy-auth-token" });
  }
  function signOut() {
    dispatch({ type: "SIGN_OUT" });
  }

  function restoreToken(userToken) {
    dispatch({ type: "RESTORE_TOKEN", token: userToken });
  }

  authDispatch.signIn = signIn;
  authDispatch.signUp = signUp;
  authDispatch.signOut = signOut;
  authDispatch.restoreToken = restoreToken;

  return { state, authDispatch };
}

export default authDispatch;
