import React from "react";
import styles from "./LandingPage.module.css";
import { IconHeart } from "@tabler/icons-react";

function LandingPage() {
  return (

        <div className={styles.container}>
            <section className={styles.backgroundimage}>
                <img src="/imagenes/Fondolanding.png" alt="Fondo" className={styles.topImage} />
                <div className={styles.overlay}>
                    <h1 className={styles.title}>JOURNEY TO YOUR PERFECT HOME</h1>
                    <h2 className={styles.subtitle}>Let our expert team guide you through the magic of real estate and help you find the perfect home where your dreams take flight</h2>
                </div>
            </section>

            <div className={styles.content}>
                <div className={styles.leftColumn} >
                    <section className={styles.infotitle}>
                        <h2>Your Trusted Real Estate Advisors</h2>
                    </section>

                    <section className={`${styles.chartSection} place-content-center`}>
                        <div className={styles.box1}>
                        <p className={styles.chartItem1}> + 17K Satisfied Customers</p>
                        </div>
                        <div className={styles.box2}>
                        <p className={styles.chartItem2}>+ 25 Years of Experience</p>
                        </div>
                        <div className={styles.box3}>
                        <p className={styles.chartItem3}>+ 25 Property Collections</p>
                        </div>
                        <div className={styles.box4}>
                        <p className={styles.chartItem4}>+ 100 Destinations to Stay</p>
                        </div>
                    </section>
                    <section className={styles.infotitle}>
                        <h2>Discover the most</h2>
                        <h2>viewed properties</h2>
                    </section>
                </div>

                <div className={styles.rightColumn}>
                    <section className={styles.infotitle}>
                        <h2>Comments</h2>
                    </section>
                    <div className={styles.boxcomments}>
                    <section className={styles.comments}>
                        <p>This app is all I need.</p>
                        <p>This app has the best houses I have ever seen.</p>
                        <p>This app has the best prices.</p>
                        <p>I love this app! It made finding my dream rental home so easy and stress-free.</p>
                        <p>The search filters are fantastic. I could narrow down exactly what I was looking for!</p>
                        <p>Amazing customer service! They were quick to respond to my queries and very helpful.</p>
                        <p>I found my new home within days of using this app. Thank you for the great service!</p>
                    </section>
                    </div>

                    <section className={styles.infotitle}>
                        <p>Embark on a journey of discovery through exclusive </p>
                        <p>collections of homes, luxury properties to fulfill</p>
                        <p>your aspirations and inspire your imagination.</p>
                    </section>
                </div>
            </div>

            <div className={styles.cards}>
                <div className={styles.c1}>
                    <div className={styles.image}>
                        <IconHeart className={styles.icon}/>
                        <img src="/imagenes/c1.jpg" alt="card1" />
                    </div>
                </div>
                <div className={styles.c2}>
                    <div className={styles.image}>
                    <IconHeart className={styles.icon}/>
                    <img src="/imagenes/c2.jpg" alt="card2" />
                    </div>
                </div>
                <div className={styles.c3}>
                    <div className={styles.image}>
                    <IconHeart className={styles.icon}/>
                    <img src="/imagenes/c3.jpg" alt="card3" />
                    </div>
                </div>
                <div className={styles.c4}>
                    <div className={styles.image}>
                    <IconHeart className={styles.icon}/>
                    <img src="/imagenes/c4.jpg" alt="card4" />
                    </div>
                </div>
            </div>
        </div>
  );
}

export default LandingPage;
