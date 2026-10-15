import styles from "./Header.module.css";

function Header({ className, handleClick }) {
  return (
    <header className={className}>
      <button type="button" className={styles.menuBtn} onClick={handleClick}>
        ☰
      </button>
      <h1>Freelance OS</h1>
    </header>
  );
}

export default Header;
