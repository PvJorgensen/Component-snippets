import React, { useEffect, useState } from 'react';
import styles from './nav.module.scss';
import { Spinner } from '../Spinner/Spinner';
import { useSupabase } from '../../providers/supabaseProvider'
import { useAuth } from '../../providers/authProvider'
import { Navigate, useNavigate } from 'react-router-dom'

export const Nav = () => {
  const [loading, setLoading] = useState(true);
  const [isComponentOpen, setIsComponentOpen] = useState(false);
  const [isDataserviceOpen, setIsDataserviceOpen] = useState(false);

  const { supabase } = useSupabase()
  const { loginData, setLoginData } = useAuth()

  const handleComponentClick = () => {
    setIsComponentOpen(!isComponentOpen)
    if (!isComponentOpen) {
      setIsDataserviceOpen(false);
    }
  }

  const handleDataserviceClick = () => {
    setIsDataserviceOpen(!isDataserviceOpen)
    if (!isDataserviceOpen) {
      setIsComponentOpen(false)
    }
  }

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      setLoginData("");
      sessionStorage.removeItem("supabase.auth.token");
      console.log('Logged out successfully');
      if (error) throw error;
      window.location.href = 'Login';
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  }
  

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div className={styles.loaderContainer}>
          <Spinner />
          
        </div>
      ) : (
        <nav>
          <h3>Exams Preparations</h3>
          <ul className={styles.navTags}>
            <li>Overview</li>
            <li onClick={handleComponentClick}>Components
            {isComponentOpen &&
            <ul className={styles.hoverMenu}>
                <li>ComponentName</li>
                <li>ComponentName</li>
                <li>ComponentName</li>
              </ul>
               }
            </li>
            <li onClick={handleDataserviceClick}>Data Services
            {isDataserviceOpen &&
            <ul className={styles.hoverMenu}>
                <li>ComponentName</li>
                <li>ComponentName</li>
                <li>ComponentName</li>
              </ul>
               }
            </li>
          </ul>
          <button onClick={ () =>handleLogout()}>Log Out</button>
        </nav>
      )}
    </>
  );
};
