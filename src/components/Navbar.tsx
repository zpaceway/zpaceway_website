import styles from "../styles/Navbar.module.scss";

function Navbar({ isNavbarHidden }: { isNavbarHidden: boolean }) {
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
        </div>
      </header>
    </div>
  );
}

export default Navbar;
