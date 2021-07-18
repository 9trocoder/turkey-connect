import Image from "next/dist/client/image";
import Link from "next/dist/client/link";
import styles from "../styles/footerstyles.module.css";
import facebook from "../public/facebook.svg";
import twitter from "../public/twitter.svg";
import instagram from "../public/instagram.svg";
import linkedin from "../public/linkedin.svg";
import whatsapp from "../public/whatsapp.svg";

const Footer = () => {
  return (
    <div className={styles.footer__parent}>
      <div className={styles.footer__body}>
        <div className={styles.footer__sub_body}>
          <div className={styles.footer__mission}>
            <h1>
              OUR MISSION IS GET LATEST WEARS TO YOU...
            </h1>
          </div>
          <div className={styles.nav__links}>
            <h2>NAVIGATION</h2>
            <ul className={styles.nav__list}>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <a>Available Wears</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a>Contact us</a>
                </Link>
              </li>
              <li>
                <Link href="">
                  <a>Register</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.nav__links}>
            <h2>WHAT WE SELL</h2>
            <ul className={styles.nav__list}>
              <li>Wears</li>
              <li>Shoes</li>
              <li>Bags</li>
              <li>Sport Wears</li>
              <li>Casual Wears</li>
              <li>High-end brands</li>
            </ul>
          </div>
        </div>

        <div className={styles.footer__social_link}>
          <div className={styles.footer__privacy}>
            <p>© 2021 TURKEYConnect</p>
            <p>Terms of use</p>
            <p>Privacy Policy</p>
            <p>Website created by Yemicodes</p>
          </div>
          <div className={styles.footer__social_list}>
            <h2>Follow us on</h2>
            <div className={styles.social__icon}>
              <Link href="/">
                <a>
                  <Image src="/facebook.svg" width={32} height={20} alt="facebook" />
                </a>
              </Link>
              <Link href="/">
                <a>
                  <Image
                    src="/instagram.svg"
                    width={32}
                    height={20}
                    alt="instagram"
                  />
                </a>
              </Link>
              <Link href="/">
                <a>
                  <Image src="/whatsapp.svg" width={32} height={20} alt="whatsapp" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
