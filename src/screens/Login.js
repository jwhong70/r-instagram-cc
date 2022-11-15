import { isLoggedInVar } from "../apollo";

function Login() {
  return (
    <>
      <h1>Login</h1>
      <button onClick={() => isLoggedInVar(true)}>Log in now!</button>
    </>
  );
}
export default Login;
