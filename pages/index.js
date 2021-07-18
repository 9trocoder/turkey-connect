import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Turkey-Connect</title>
        <meta name="description" content="Wholesales of Wears and shoes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.container}>
        <div className={styles.gallery}>
          <div className={styles.img}>
            <img src="1.jpg" />
          </div>

          <div className={styles.img}>
            <img src="3.jpg" />
          </div>
          <div className={styles.gallery__text}>
            <h1>FALL / WINTER COLLECTION</h1>
            <p>The fall and winter collections of clothes are available..</p>
            <button className={styles.btn}>
              <p>Discover More</p>
            </button>
          </div>
        </div>
        <div className={styles.about}>
          <div className={styles.about__text}>
            <div>
              <h1>ABOUT US</h1>
              <p>
                TURKEYConnect is a wholesale clothing company founded in 2021
                that specializes in Wears, shoes, clothing and bags. We also
                partner with other stores to give our customer a good and
                quality services.
              </p>
            </div>
            <div>
              <h1>MISSION & VISION</h1>
              <p>
                The mission of TURKEYConnect is to create oopportunities to help
                revolutionize clothing and marketing systems in nigeria through
                a global peer-to-peer platform to facilitate trading and also
                transcending our customer to best quality of clothes.
              </p>
              <p>
                Our vision is to a giant in the clothing industry in nigeria by
                revolutionizing our customer to help one another in the pursuit
                of gaining a better income.
              </p>
            </div>
          </div>
          <div className={styles.about_img}>
            <img src="8.jpg" />
          </div>
        </div>

        <div className={styles.looking}>
          <div className={styles.looking__body}>
            <div className={styles.looking__header}>
              <h1>LOOKING FOR CLOTHES TO BUY?</h1>
              <p>
                Then you have come to the right place. Our wholesale processing
                is perfect and easy, with the party involved following our
                guidance every step of the way.
              </p>
            </div>
            <div className={styles.looking__features}>
              <div className={styles.feature}>
                <h1>16,000</h1>
                <p>Wears are sold</p>
              </div>
              <div className={styles.feature}>
                <h1>100%</h1>
                <p>Delivery rate</p>
              </div>
              <div className={styles.feature}>
                <h1>20%</h1>
                <p>Discount rate</p>
              </div>
              <div className={styles.feature}>
                <h1>15</h1>
                <p>Different types of wears</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.work}>
          <div className={styles.work__body}>
            <div className={styles.work__header}>
              <h1>HOW IT WORKS</h1>
            </div>
            <div className={styles.work__features}>
              <div className={styles.work_feature}>
                <div>
                  <h1>Choose Images</h1>
                  <h1 className={styles.h1icon}>&rarr;</h1>
                </div>

                <p>
                  Choose wears to buy in on this website & find out everything
                  about the wears and our placement process.
                </p>
              </div>
              <div className={styles.work_feature}>
                <div>
                  <h1>Payment</h1>
                  <h1 className={styles.h1icon}>&rarr;</h1>
                </div>

                <p>
                  We charge a compulsory admission processing fee & optional
                  fees for other services that we offer.
                </p>
              </div>
              <div className={styles.work_feature}>
                <div>
                  <h1>Registration</h1>
                  <h1 className={styles.h1icon}>&rarr;</h1>
                </div>

                <p>
                  After necessary payment, register for your placement and get a
                  conditional payment letter from the wears of your choice.
                </p>
              </div>
              <div className={styles.work_feature}>
                <div>
                  <h1>Shipping</h1>
                  <h1 className={styles.h1icon}>&#10003;</h1>
                </div>

                <p>
                  100% payment of goods and shipping payment is necessary to be
                  able to get your goods delivered to your door step.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.pricing}>
          <div className={styles.pricing__header}>
            <h1>PRICING</h1>
          </div>
          <div className={styles.pricing__body}>
            <div className={styles.pricing__text}>
              <div>
                <h1>Admission Fee</h1>
                <h1 className={styles.pricing1}>$100</h1>
                <p className={styles.pricingp}>One-Time Payment</p>
              </div>
              <div>
                <p>Free Online Support</p>
                <p>Free whatsapp Group access</p>
                <p>Conditional acceptance to the group</p>
                <p>Guidance about on shipping process</p>
                <p>Free image evaluation</p>
                <p>On-ground support in Nigeria</p>
              </div>
              <div>
                <button className={styles.btn}>Start now</button>
              </div>
            </div>
            <div className={styles.pricing__text}>
              <div>
                <h1>Gold Spot</h1>
                <h1 className={styles.pricing2}>$200</h1>
                <p className={styles.pricingp}>One-Time Payment</p>
              </div>
              <div>
                <p>One-to-One communication</p>
                <p>Free whatsapp Group access</p>
                <p>Access to specail products</p>
                <p>Unlimited Brands</p>
                <p>Free image evaluation</p>
                <p>On-ground support in Nigeria</p>
              </div>
              <div>
                <button className={styles.btn}>Start now</button>
              </div>
            </div>
            <div className={styles.pricing__text}>
              <div>
                <h1>Vip</h1>
                <h1 className={styles.pricing2}>$250</h1>
                <p className={styles.pricingp}>One-Time Payment</p>
              </div>
              <div>
                <p>One-to-One communication</p>
                <p>Direct Buying</p>
                <p>Access to specail brands</p>
                <p>Unlimited Brands</p>
                <p>Access to Original products</p>
                <p>On-ground support in Nigeria</p>
              </div>
              <div>
                <button className={styles.btn}>Start now</button>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.who}>
          <div className={styles.who__body}>
            <div className={styles.who__header}>
              <h1>WHO ARE THE TURKEYConnect</h1>
              <div>
                <p>
                  The use of TURKEYConnect is a means of getting wear,
                  advertising and spreading word of the opportunities we offer.
                </p>
                <p>
                  TURKEYConnect is responsible for getting your deserved wears
                  and give full information on our services, processes and
                  opportunities offered.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.touch}>
          <div className={styles.touch__body}>
            <div className={styles.touch__header}>
              <h1>GET IN TOUCH WITH US</h1>
            </div>
            <div className={styles.touch__features}>
              <div className={styles.touch_feature}>
                <div>
                  <img src="/phone.svg" alt="phone" />
                  <h2>+90 536 603 09 97</h2>
                </div>
                <p>You can call us or contact us on whatsapp</p>
              </div>

              <div className={styles.touch_feature}>
                <div>
                  <img src="/envelope.svg" alt="phone" />
                  <a href="mailto: yemicodes@gmail.com">
                    <h2>yemicodes@gmail.com</h2>{" "}
                  </a>
                </div>
                <p>Send us a message</p>
              </div>
              <div className={styles.touch_feature}>
                <div>
                  <img src="/location.svg" alt="phone" />
                  <h2>Gusmuskent City Corlu sehy. Mah.</h2>
                </div>
                <p>Visit Our office in Corlu, Turkey</p>
              </div>
              <div className={styles.touch_feature}>
                <div>
                  <img src="/location.svg" alt="phone" />
                  <h2>N0 45 Kushimo street Ebge Ikotun</h2>
                </div>
                <p>Visit Our office in Lagos Nigeria</p>
              </div>
            </div>
          </div>
        </div>


        
      </main>
    </div>
  );
}
