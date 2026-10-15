import Header from "./Header";
import Sidebar from "./Sidebar";
import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <div style={styles.page}>
      <Header />
      <Sidebar />
      <main>{children}</main>
    </div>
  );
}

export default Layout;
