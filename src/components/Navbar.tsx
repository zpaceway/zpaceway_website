import { useState } from "react";
import styles from "../styles/Navbar.module.scss";
import Button from "./Button";

function Navbar({ isNavbarHidden }: { isNavbarHidden: boolean }) {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [isIframeHidden, setIsIframeHidden] = useState(true);

  return (
    <div
      className={`${styles.nav} ${
        isNavbarHidden ? styles.hidden : styles.nothidden
      }`}
    >
      <header>
        <div className={`${styles.navbar}`}>
          <div className={styles.logo}>
            <img src="/logo.png" alt="" />
            <h1>Zpaceway</h1>
          </div>
          <span
            onClick={() => {
              setIsMusicPlaying((_state) => !_state);
              setIsIframeHidden((_state) => !_state);
            }}
          >
            Keep coding...
            <span
              className={`${styles.music} ${isMusicPlaying && styles.active}`}
            >
              {isMusicPlaying ? "🔊" : "🔇"}
            </span>
          </span>
        </div>
      </header>
      {isMusicPlaying && (
        <div
          className={`${styles.musicPlayer} ${isIframeHidden && styles.hidden}`}
        >
          <iframe
            id="presentation"
            title="presentation"
            allow="autoplay"
            src={`https://www.youtube.com/embed/5qap5aO4i9A?autoplay=1&mute=0`}
          ></iframe>
          <Button
            onClick={() => {
              setIsIframeHidden((_state) => !_state);
            }}
          >
            {isIframeHidden ? (
              <i className="fa-solid fa-eye"></i>
            ) : (
              <i className="fa-solid fa-eye-slash"></i>
            )}
          </Button>
        </div>
      )}
    </div>
  );
}

export default Navbar;
