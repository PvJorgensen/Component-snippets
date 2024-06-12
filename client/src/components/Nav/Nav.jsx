import React, { useEffect, useState } from 'react';
import styles from './nav.module.scss';
import { Spinner } from '../Spinner/Spinner';

export const Nav = () => {
  const [loading, setLoading] = useState(true);

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
          <ul>
            <li>Overview</li>
            <li>Components</li>
            <li>Data Services</li>
          </ul>
        </nav>
      )}
    </>
  );
};
