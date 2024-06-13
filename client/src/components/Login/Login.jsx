import React from 'react'
import styles from './login.module.scss'
import { useSupabase } from '../../providers/supabaseProvider'
import { useAuth } from '../../providers/authProvider'
import { useForm } from "react-hook-form"
import { Navigate, useNavigate } from 'react-router-dom'


export const Login = () => {
  const { supabase } = useSupabase()
  const { loginData, setLoginData } = useAuth()
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const handleLogin = async ({ email, password }) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      console.error("error logging in:", error)
    } else {
      console.log("logged in", data)
      sessionStorage.setItem("supabase.auth.tokes", JSON.stringify(data))
      setLoginData(data)
      navigate("index")
    }
  }

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut()
      setLoginData("")
      sessionStorage.removeItem("supabase.auth.token")
      if (error) throw error
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  }
  return (
    <>
     {!loginData && !loginData.user ? (
        <form onSubmit={handleSubmit(handleLogin)}>
          <div>
            <h2>Exams Preparation</h2>
            <input
              placeholder='Email'
              type="email"
              id="email"
              {...register("email", { required: true })}
            />
            {errors.email && <span>This field is required</span>}
          </div>
          <div>
            <input
              placeholder='Password'
              type="password"
              id="password"
              {...register("password", { required: true })}
            />
            {errors.email && <span>This field is required</span>}
          </div>
          <div>
            <button type="submit">Login</button>
          </div>
        </form>
      ) : (
        <>
          <p>Du er logget ind som {loginData.user.email}</p>
          <button onClick={handleLogout}>Log af</button>
        </>
      )}
    </>
    )}
