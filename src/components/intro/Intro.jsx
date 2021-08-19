import './Intro.scss';
import { init } from 'ityped';
import { useEffect, useRef } from 'react';

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      startDelay: 750,
      backDelay: 1500,
      strings: ['Front-End Developer', 'Designer', 'Programmer'],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      {/* bagian kiri */}
      <div className="left">
        <div className="imgContainer">
          <img src="assets/man.png" alt="Man" />
        </div>
      </div>

      {/* bagian kanan */}
      <div className="right">
        <div className="wrapper">
          <h2>Hi There My Name Is</h2>
          <h1>Rodrigo Carlos</h1>
          <h3>
            Freelance <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="arrow down" />
        </a>
      </div>
    </div>
  );
}
