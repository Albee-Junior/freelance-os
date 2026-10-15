import Header from "./Header.jsx";
import Sidebar from "./Sidebar.jsx";
import styles from "./Layout.module.css";
import { useState } from "react";

function Layout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={styles.page}>
      <Header className={styles.header} handleClick={handleClick} />
      <Sidebar
        className={`${styles.sidebar} ${isSidebarOpen && styles.open} `}
      />
      <main className={styles.main}>{children}</main>
    </div>
  );
}

export default Layout;
