"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import styles from "./About.module.css";

export default function About() {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(`.${styles.paragraph}`, {
        scrollTrigger: {
          trigger: `.${styles.content}`,
          start: "top 75%",
        },
        y: 30,
        opacity: 0,
        duration: 0.9,
        stagger: 0.2,
        ease: "power3.out",
      });
    },
    { scope: container },
  );

  return (
    <section ref={container} id="about" className={styles.section}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <span className={styles.label}>/ About</span>
        </header>

        <div className={styles.content}>
          <p className={`${styles.paragraph} ${styles.lead}`}>
            I&apos;m a Senior Frontend Engineer focused on building immersive,
            interactive web experiences that balance craftsmanship, performance,
            and creativity.
          </p>
          <p className={styles.paragraph}>
            My career began in{" "}
            <a
              href="https://www.instagram.com/odinschwartz/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.inlineLink}
            >
              music
            </a>
            , touring internationally and performing in venues I once only
            dreamed about. That background shaped how I think about rhythm,
            timing, and audience experience — principles that naturally
            translate into how I approach interaction, motion, and flow on the
            web.
          </p>
          <p className={styles.paragraph}>
            Today, I bring that mindset into frontend engineering, working at
            the intersection of creative technology and large-scale production
            systems.
          </p>
        </div>
      </div>
    </section>
  );
}
