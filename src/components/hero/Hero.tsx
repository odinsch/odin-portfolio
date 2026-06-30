"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import styles from "./Hero.module.css";
import { useScrollTo } from "@/hooks/useScrollTo";

export default function Hero() {
  const container = useRef<HTMLElement>(null);

  const scrollTo = useScrollTo();

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      tl.from(`.${styles.lineInner}`, {
        yPercent: 110,
        duration: 1,
        stagger: 0.12,
      })
        .from(
          `.${styles.subtitle}`,
          { y: 20, opacity: 0, duration: 0.8 },
          "-=0.5",
        )
        .from(
          `.${styles.description}`,
          { y: 20, opacity: 0, duration: 0.8 },
          "-=0.6",
        )
        .from(
          `.${styles.cta}`,
          { y: 20, opacity: 0, duration: 0.6, stagger: 0.1 },
          "-=0.5",
        );
    },
    { scope: container },
  );

  return (
    <section ref={container} className={styles.hero}>
      <div className={styles.inner}>
        <h1 className={styles.title}>
          <span className={styles.line}>
            <span className={styles.lineInner}>Odin</span>
          </span>
          <span className={styles.line}>
            <span className={styles.lineInner}>Schwartz</span>
          </span>
        </h1>

        <p className={styles.subtitle}>
          Senior Frontend Engineer building immersive, high-performance web
          experiences for global brands.
        </p>

        <p className={styles.description}>
          Previously: Amazon · Monks/Jam3 · Awwwards &amp; FWA awarded work.
        </p>

        <div className={styles.actions}>
          <a
            href="#works"
            className={`${styles.cta} ${styles.ctaPrimary}`}
            onClick={(e) => {
              e.preventDefault();
              scrollTo("#works");
            }}
          >
            View selected work
          </a>
          <a
            href="#contact"
            className={`${styles.cta} ${styles.ctaSecondary}`}
            onClick={(e) => {
              e.preventDefault();
              scrollTo("#contact");
            }}
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
