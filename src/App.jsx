import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setHearts(prev => {
        const newHeart = {
          id: Date.now(),
          left: Math.random() * 100,
          animationDuration: Math.random() * 3 + 2
        };
        return [...prev, newHeart];
      });
    }, 300);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setHearts(prev => prev.filter(heart => Date.now() - heart.id < 5000));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app">
      <div className="heart-container">
        <div className="main-heart">❤️</div>
        <div className="heart-text">Love You</div>
      </div>

      {hearts.map(heart => (
        <div
          key={heart.id}
          className="floating-heart"
          style={{
            left: `${heart.left}%`,
            animationDuration: `${heart.animationDuration}s`
          }}
        >
          ❤️
        </div>
      ))}
    </div>
  );
}

export default App;