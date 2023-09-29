import React from "react";
import styles from './LandingPage.module.css';

function LandingPage() {
    return (
        <div className={styles.container}>
        
            <section className={styles.backgroundimage}>
                <img src="/imagenes/Fondolanding.png" alt="Fondo" className={styles.topImage} />
                <div className={styles.overlay}>
                    <h1>JOURNEY TO YOUR PERFECT HOME</h1>
                    <h2>Let our expert team guide you through the magic of real estate and help you find the perfect home where your dreams take flight</h2>
                </div>
            </section>

            <div className={styles.content}>
                <div className={styles.leftColumn} style={{ marginTop: '100px' }}>
                    <section className={styles.info1}>
                        <h2>Your Trusted Real Estate Advisors</h2>
                    </section>

                    <section className={styles.chartSection}>
                        <p className={styles.chartItem}>+ 17K Satisfied Customers</p>
                        <p className={styles.chartItem}>+ 25 Years of Experience</p>
                        <p className={styles.chartItem}>+ 25 Property Collections</p>
                        <p className={styles.chartItem}>+ 100 Destinations</p>
                    </section>
                    <section className={styles.info2}>
                        <h2>Discover the most</h2>
                        <h2>viewed properties</h2>
                    </section>
                </div>

                <div className={styles.rightColumn} style={{ marginTop: '100px' }}>
                    <section className={styles.testimonials}>
                        <h2>Testimonials</h2>
                        <p>This product is great, I highly recommend it.</p>
                        <p>This product is very easy to use and has saved me a lot of time.</p>
                    </section>

                    <section className={styles.info3}>
                        <p>Embark on a journey of discovery through exclusive </p>
                        <p>collections of homes, luxury properties to fulfill</p>
                        <p>your aspirations and inspire your imagination.</p>
                    </section>
                </div>
            </div>

            <div className={styles.cards}>
                <div className={styles.c1}>
                    <div className={styles.image}>
                        <img src="/imagenes/c1.jpg" alt="card1" />
                    </div>
                </div>
                <div className={styles.c2}>
                    <div className={styles.image}>
                    <img src="/imagenes/c2.jpg" alt="card2" />
                    </div>
                </div>
                <div className={styles.c3}>
                    <div className={styles.image}>
                    <img src="/imagenes/c3.jpg" alt="card3" />
                    </div>
                </div>
                <div className={styles.c4}>
                    <div className={styles.image}>
                    <img src="/imagenes/c4.jpg" alt="card4" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;
