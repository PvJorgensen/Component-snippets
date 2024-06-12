import React from 'react'
import styles from './login.module.scss'
import { NavLink } from 'react-router-dom'

export const Login = () => {
  return (
    <div className={styles.loginForm}>
      <h1>Exams Preperation</h1>
      <input placeholder='Email' type="email" />
      <input placeholder='Password' type="password" />
      <NavLink to="/index">Login</NavLink>
    </div>
  )
}
