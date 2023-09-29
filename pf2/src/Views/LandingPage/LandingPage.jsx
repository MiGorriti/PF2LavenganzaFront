import React from "react";
import styles from './LandingPage.module.css';

function LandingPage() {
    return (
    <div>
        <div className={styles.backgroundimage}>
        </div>
    <div className={styles.header}>
    <h1>JOURNEY TO YOUR PERFECT HOME</h1>
    </div>
    <div className={styles.introduction}>
    <h2>Let our expert team guide you through the magic of real</h2>
    <h2>estate and helping  you find the perfect home where your dreams take flight</h2>
    </div>
    
    <div className={styles.info1}>
        <p>Your Trusted Real </p>
        <p>Estate Advisors</p>
        </div>
        <p className={styles.chart1}>+ 17K Satisfied Customers</p>
        <p className={styles.chart2}>+ 25 Years of Experience</p>
        <p className={styles.chart3}>+ 100 Destinations</p>
        <p className={styles.chart4}>+ 2000 Properties</p>
        <p className={styles.chart5}>Comments</p>
    <div className={styles.info2}>
        <p>Discover the most</p>
        <p> viewed properties</p>
        </div>
    <div className={styles.info3}>
        <p>Embark on a journey of discovery through exclusive </p>
        <p>collections of homes, luxury properties to fulfill</p>
        <p>your aspirations and inspire your imagination.</p>
        </div>

    <div>
        <div className={styles.c1}> 
        </div>
        <div className={styles.c2}> 
        </div>
        <div className={styles.c3}> 
        </div>
        <div className={styles.c4}> 
        </div>
        <div className={styles.c5}> 
        </div>
    </div>
    </div>
    )
}

export default LandingPage;