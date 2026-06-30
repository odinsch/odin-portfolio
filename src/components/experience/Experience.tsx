"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { experience } from "@/data/experience";
import styles from "./Experience.module.css";

export default function Experience() {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.utils.toArray<HTMLElement>(`.${styles.job}`).forEach((job) => {
        gsap.from(job, {
          scrollTrigger: {
            trigger: job,
            start: "top 85%",
          },
          y: 40,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
        });
      });
    },
    { scope: container },
  );

  return (
    <section ref={container} id="experience" className={styles.section}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <span className={styles.label}>/ Experience</span>
          <h2 className={styles.heading}>Where I&apos;ve worked</h2>
        </header>

        <ul className={styles.list}>
          {experience.map((job) => (
            <li key={job.id} className={styles.job}>
              <span className={styles.period}>{job.period}</span>
              <div className={styles.jobContent}>
                <h3 className={styles.company}>{job.company}</h3>
                <p className={styles.role}>{job.role}</p>
                <p className={styles.description}>{job.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
