import styles from "../styles/contactstyles.module.css";

export default function contact() {
  return (
    <div className={styles.container}>
      <div className={styles.about}>
        <div>
          <div className={styles.about__text}>
          <div>
            <h1>CONTACT US</h1>
            <p>
              To reach our customer-obsessed team, fill out the form or use the
              contact info below
            </p>
          </div>
          <div className={styles.emailbox}>
            <div><img src="/envelope.svg" alt="email" />
            <a href="mailto: yemicodes@gmail.com">
              <h2>yemcodes@gmail.com</h2>
            </a></div>
            
          </div>
        </div>
        </div>
        
        <div className={styles.about_form}>
          <input placeholder="Name" />
          <input placeholder="Email Address" />
          <input placeholder="Phone Number" />
          <textarea placeholder="Message" />
          <button className={styles.btn}>SUBMIT</button>
        </div>
      </div>
    </div>
  );
}
