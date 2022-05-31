import styles from "../styles/LoadingScreen.module.scss";

function LoadingScreen() {
  return (
    <div className={styles.loadingScreen}>
      <div>
        <img src="/pikachu.gif" alt="" />
      </div>
    </div>
  );
}

export default LoadingScreen;
