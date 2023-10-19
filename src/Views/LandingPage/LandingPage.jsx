import React from "react";
import styles from "./LandingPage.module.css";
import { IconHeart } from "@tabler/icons-react";
import Cards from "../../Components/Cards/Cards"

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

                    <section className={styles.chartSection} >
                        <div className={styles.box1}>
                        <p className={styles.chartItem1}>+ 17K Satisfied Customers</p>
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
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-8">
        {[1, 2, 3, 4].map((index) => (
          <div key={index} className="relative rounded-lg overflow-hidden border">
            <IconHeart className="absolute top-2 left-2 z-10 rounded-full bg-white bg-opacity-70 text-red-500 p-1" />
            <img src={`/imagenes/c${index}.jpg`} alt={`card${index}`} className="w-full h-48 object-cover" />
          </div>
        ))}
      </div>

      <div className="mt-8">
        <Cards className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-8" />
      </div>
    </div>
  );
}

export default LandingPage;
