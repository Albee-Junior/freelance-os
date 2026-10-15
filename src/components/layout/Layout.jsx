import Header from "./Header.jsx";
import Sidebar from "./Sidebar.jsx";
import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <div className={styles.page}>
      <Header className={styles.header} />
      <Sidebar className={styles.sidebar} />
      <main className={styles.main}>{children}</main>
    </div>
  );
}

export default Layout;
