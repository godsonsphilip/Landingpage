import React, { useEffect } from 'react';
import './RotatingBall.css';

const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const randomColor = (t) => {
  const bright = (t > 1.3 && t < 1.9) || (t < -1.3 && t > -1.9);
  const c = bright ? randomNumber(130, 255) : randomNumber(110, 190);
  return `rgb(${c}, ${c}, ${c})`;
};

const RotatingBall = () => {
  useEffect(() => {
    const discoBall = document.getElementById('discoBall');

    if (discoBall) {
      let radius = 90;
      let squareSize = 11.0;
      let prec = 20.55;
      let fuzzy = 0.006;
      let inc = (Math.PI - fuzzy) / prec;

      for (let t = fuzzy; t < Math.PI; t += inc) {
        let z = radius * Math.cos(t);
        let currentRadius = Math.abs(
          (radius * Math.cos(0) * Math.sin(t)) - (radius * Math.cos(Math.PI) * Math.sin(t))
        ) / 2.5;
        let circumference = Math.abs(2 * Math.PI * currentRadius);
        let squaresThatFit = Math.floor(circumference / squareSize);
        let angleInc = (Math.PI * 2 - fuzzy) / squaresThatFit;

        for (let i = angleInc / 2 + fuzzy; i < Math.PI * 2; i += angleInc) {
          let square = document.createElement('div');
          square.classList.add('square'); // Add class for styling
          let squareTile = document.createElement('div');
          squareTile.style.width = squareSize + 'px';
          squareTile.style.height = squareSize + 'px';
          squareTile.style.transformOrigin = '0 0 0';
          squareTile.style.transform = `rotate(${i}rad) rotateY(${t}rad)`;
          squareTile.style.backgroundColor = randomColor(t);
          squareTile.style.animation = 'reflect 2s linear infinite';
          squareTile.style.backfaceVisibility = 'hidden';

          let x = radius * Math.cos(i) * Math.sin(t);
          let y = radius * Math.sin(i) * Math.sin(t);
          square.style.transform = `translateX(${x}px) translateY(${y}px) translateZ(${z}px)`;
          square.appendChild(squareTile); // Append tile to square
          discoBall.appendChild(square); // Append square to discoBall
        }
      }
    }
  }, []); // Run on component mount

  return (
    <div className="animation-container"> {/* Add the animation container with black background */}
      <div className="discoBallLight"></div>
      <div id="discoBall" className="discoBall">
        <div className="discoBallMiddle"></div>
      </div>
    </div>
  );
};

export default RotatingBall;
