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
          <ul className={styles.navTags}>
            <li>Overview</li>
            <li>Components
            <ul className={styles.hoverMenu}>
                <li>test</li>
                <li>test</li>
                <li>test</li>
              </ul>
            </li>
            <li>Data Services
            <ul className={styles.hoverMenu}>
                <li>test</li>
                <li>test</li>
                <li>test</li>
              </ul>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};
