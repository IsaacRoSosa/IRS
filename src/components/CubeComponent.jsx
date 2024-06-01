"use client"; // Asegúrate de añadir esta línea al comienzo del archivo

import React, { useEffect } from 'react';
import styles from '@/styles/CubeComponent.module.css';

const CubeComponent = () => {
  useEffect(() => {
    const cubes = document.querySelectorAll(`.${styles.cube} span`);
    let index = 0;

    const animateCubes = () => {
      cubes.forEach((cube, i) => {
        cube.style.background = '#dcdcdc';
        cube.style.filter = 'none';
        cube.style.transform = 'scale(1)';
      });

      const cube = cubes[index];
      cube.style.background = '#ef4149';
      cube.style.filter = 'drop-shadow(0 0 30px #ef4149)';
      cube.style.transform = 'scale(1.2)';

      setTimeout(() => {
        cube.style.transform = 'scale(1)';
      }, 500);

      index = (index + 1) % cubes.length;
    };

    const interval = setInterval(animateCubes, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      {[...Array(3)].map((_, cubeIndex) => (
        <div key={cubeIndex} className={styles.cube}>
          {[...Array(3)].map((_, divIndex) => (
            <div key={divIndex} style={{ '--x': divIndex - 1, '--y': 0 }}>
              {[...Array(3)].map((_, spanIndex) => (
                <span key={spanIndex} style={{ '--i': 3 - spanIndex }}></span>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default CubeComponent;
