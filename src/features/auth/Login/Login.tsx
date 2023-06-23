import React from "react"
import { useAppDispatch, useAppSelector } from "app/hooks"
import { authThunks } from "features/auth/authSlice"

const Login = () => {
  const isLoading = useAppSelector((state) => state.app.isLoading)
  const dispatch = useAppDispatch()

  const loginHandler = () => {
    const payload = {
      email: "ccfssss@bk.ru",
      password: "12345678",
      rememberMe: false
    };
    dispatch(authThunks.login(payload));
  };

  return (
    <div>
      {isLoading && <h1>Loader...</h1>}
      Login <br/>
      <button onClick={loginHandler}>login</button>
    </div>
  )
}

export default Login