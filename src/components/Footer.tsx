import styles from "../styles/Footer.module.scss";

function Footer() {
  return (
    <div className={styles.foot}>
      <footer>
        <span>
          Zpaceway Companies <i className="fa-solid fa-copyright"></i>
        </span>
      </footer>
    </div>
  );
}

export default Footer;
