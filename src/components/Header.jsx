import logo from "../logo.svg";
import styles from "./index.module.scss";
const Header = () => {
  return (
    <nav className={styles.navbar}>
      <img src={logo} alt="logo" />
      <div className={styles.navLinks}>
        <a href={`/details`}>EUR-USD details</a>
        <a href={`/details`}>EUR-GBP details</a>
      </div>
    </nav>
  );
};

export default Header;
