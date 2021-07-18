import Image from "next/dist/client/image";
import Link from "next/dist/client/link";
import styles from "../styles/navbarstyles.module.css";

const Navbar = () => {
  return (
    <div>
      <nav className={styles.nav__parent}>
        <div className={styles.nav__body}>
          <div className={styles.nav__logo}>
            <h1>TURKEYConnect.</h1>
          </div>
          <div className={styles.nav__links}>
            <ul className={styles.nav__list}>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <div className={styles.dropdown}>
                  <a className={styles.dropbtn}>Available Wears</a>
                  <div className={styles.dropdown_content}>
                    <Link href="/">
                      <a>Bags</a>
                    </Link>
                    <Link href="/">
                      <a>Wears</a>
                    </Link>
                    <Link href="/">
                      <a>Shoes</a>
                    </Link>
                  </div>
                </div>
              </li>
              <li>
                <Link href="/contact">
                  <a>Support</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a>Register</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
