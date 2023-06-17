import React, { useEffect } from "react"
import {
  Box,
  Button,
  Card,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  TextField,
  Typography
} from "@mui/material"
import { useFormik } from "formik"
import { useAppDispatch, useAppSelector } from "app/hooks"
import { appActions } from "app/appSlice"
import s from "./Register.module.css"

type FormikErrorType = {
  email?: string
  password?: string
  rememberMe?: boolean
}

const Register = () => {

  const isLoading = useAppSelector((state) => state.app.isLoading)
  const dispatch = useAppDispatch()
  // useEffect(() => {
  //   setTimeout(() => {
  //     dispatch(appActions.setIsLoading({ isLoading: false }))
  //   }, 3000)
  // }, [])

  const formik = useFormik({
    initialValues: {
      email: ""
      password: "",
      rememberMe: false
    },
    validate: (values) => {
      const errors: FormikErrorType = {}
      if (!values.email) {
        errors.email = "Required"
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = "Invalid email address"
      }

      if (!values.password) {
        errors.password = "Required"
      } else if (values.password.length < 3) {
        errors.password = "Invalid email address"
      }
      return errors
    },
    onSubmit: values => {

      // dispatch(loginTC(values))
      // alert(JSON.stringify(values));
      formik.resetForm()  //зачишает стэйт полей formik.values и перезагружает компоненту
    }
  })

  // if (isLoginIn) {
  //   return <Navigate to={"/"} />

  return (
    // <div className={s.container}>
      <Box sx={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
        {isLoading && <h1>Loader...</h1>}
        <Card variant="outlined" sx={{ p: 11, pt: 2, mt: "60px" }}>
          <FormControl>
            <form>
              <Typography textAlign={"center"} mb={"20px"}>Sign in</Typography>
              <FormGroup>
                <TextField label="Email" margin="normal"
                           {...formik.getFieldProps("email")} />
                <TextField type="password" label="Password" margin="normal" />
                <FormControlLabel label={"Remember me"} control={<Checkbox />} />
                <Button type={"submit"} variant={"contained"} color={"primary"}>Login</Button>
              </FormGroup>
            </form>
          </FormControl>
        </Card>
      </Box>
    // </div>
  )
}

export default Register