"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { works } from "@/data/works";
import styles from "./SelectedWorks.module.css";

export default function SelectedWorks() {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(`.${styles.heading}`, {
        scrollTrigger: {
          trigger: `.${styles.heading}`,
          start: "top 85%",
        },
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.utils.toArray<HTMLElement>(`.${styles.card}`).forEach((card) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
          },
          y: 60,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        });
      });
    },
    { scope: container },
  );

  return (
    <section ref={container} id="works" className={styles.section}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <span className={styles.label}>/ Selected work</span>
          <h2 className={styles.heading}>
            Production-grade work for global brands
          </h2>
        </header>

        <ul className={styles.list}>
          {works.map((work, index) => (
            <li key={work.id} className={styles.card}>
              <div className={styles.cardTop}>
                <span className={styles.index}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className={styles.year}>{work.year}</span>
              </div>

              <div className={styles.cardMain}>
                <h3 className={styles.title}>{work.title}</h3>
                <span className={styles.client}>{work.client}</span>
                <p className={styles.role}>{work.role}</p>
                <p className={styles.description}>{work.description}</p>

                <div className={styles.tags}>
                  {work.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div className={styles.cardFooter}>
                  {work.nda ? (
                    <span className={styles.nda}>
                      Details under NDA — happy to discuss
                    </span>
                  ) : (
                    work.link && (
                      <a
                        href={work.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.link}
                      >
                        View project →
                      </a>
                    )
                  )}
                  {work.award && (
                    <span className={styles.award}>✦ {work.award}</span>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
