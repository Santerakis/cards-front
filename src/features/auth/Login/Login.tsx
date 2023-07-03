import React from "react"
import { useAppDispatch, useAppSelector } from "common/hooks/hooks"
import { authThunks } from "features/auth/authSlice"
import { redirect, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

const Login = () => {
  const isLoading = useAppSelector((state) => state.app.isLoading)
  const q = useAppSelector((state) => state.auth.q)
  const dispatch = useAppDispatch()
  const  navigate = useNavigate()

  const loginHandler = async () => {
    const payload = {
      // email: "ccf@bk.ru",
      email: "Qccf@bk.ru",
      password: "12345678",
      rememberMe: false
    };
    try{
      const res = await dispatch(authThunks.login(payload))
        .unwrap()
      debugger
      toast.success('Login is good')
  navigate('/packs')
    }
      catch(e){
      debugger
        toast.warning('unwrap - incorrect login')
      }
  };

  return (
    <div>
      {/*{isLoading && <h1>Loader...</h1>}*/}
      Login <br/>
      <button onClick={loginHandler}>login</button>
      <div>state: {q}</div>
    </div>
  )
}

export default Login