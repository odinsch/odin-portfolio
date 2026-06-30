"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import styles from "./Contact.module.css";

const EMAIL = "odinsch@gmail.com";
const SOCIALS = [
  { label: "LinkedIn", href: "https://linkedin.com/in/odinschwartz" },
  { label: "GitHub", href: "https://github.com/odinsch" },
];

export default function Contact() {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.set(
        [
          `.${styles.lineInner}`,
          `.${styles.intro}`,
          `.${styles.emailLink}`,
          `.${styles.social}`,
        ],
        { opacity: 0 },
      );
      gsap.set(`.${styles.lineInner}`, { yPercent: 110 });
      gsap.set(
        [`.${styles.intro}`, `.${styles.emailLink}`, `.${styles.social}`],
        { y: 20 },
      );

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        defaults: { ease: "power3.out" },
      });

      tl.to(`.${styles.lineInner}`, {
        yPercent: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.1,
      })
        .to(`.${styles.intro}`, { y: 0, opacity: 1, duration: 0.8 }, "-=0.5")
        .to(
          `.${styles.emailLink}`,
          { y: 0, opacity: 1, duration: 0.8 },
          "-=0.5",
        )
        .to(
          `.${styles.social}`,
          { y: 0, opacity: 1, duration: 0.6, stagger: 0.08 },
          "-=0.4",
        );
    },
    { scope: container },
  );

  return (
    <section ref={container} id="contact" className={styles.section}>
      <div className={styles.inner}>
        <span className={styles.label}>/ Contact</span>

        <h2 className={styles.heading}>
          <span className={styles.line}>
            <span className={styles.lineInner}>Let&apos;s work</span>
          </span>
          <span className={styles.line}>
            <span className={styles.lineInner}>together</span>
          </span>
        </h2>

        <p className={styles.intro}>
          I&apos;m currently open to senior frontend roles and selected
          collaborations. If you think we could build something great together,
          reach out.
        </p>

        <a href={`mailto:${EMAIL}`} className={styles.emailLink}>
          <span className={styles.emailText}>{EMAIL}</span>
          <span className={styles.arrow} aria-hidden="true">
            ↗
          </span>
        </a>

        <ul className={styles.socials}>
          {SOCIALS.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.social}
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>

        <footer className={styles.footer}>
          <span>© {new Date().getFullYear()} Odin Schwartz</span>
          <span>Built with Next.js &amp; GSAP</span>
        </footer>
      </div>
    </section>
  );
}
