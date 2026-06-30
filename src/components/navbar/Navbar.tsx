"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { useScrollTo } from "@/hooks/useScrollTo";
import styles from "./Navbar.module.css";

const NAV_LINKS = [
  { label: "Work", target: "#works" },
  { label: "Experience", target: "#experience" },
  { label: "About", target: "#about" },
  { label: "Contact", target: "#contact" },
];

export default function Navbar() {
  const nav = useRef<HTMLElement>(null);
  const lastScroll = useRef(0);
  const isAutoScrolling = useRef(false);
  const [hidden, setHidden] = useState(false);
  const scrollTo = useScrollTo();

  useGSAP(
    () => {
      gsap.set(nav.current, { y: -100, opacity: 0 });
      gsap.to(nav.current, {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
      });
    },
    { scope: nav },
  );

  const handleNav = (target: string | number) => {
    isAutoScrolling.current = true;
    setHidden(false);
    scrollTo(target, () => {
      isAutoScrolling.current = false;
      lastScroll.current = window.scrollY;
    });
  };

  useGSAP(() => {
    const handleScroll = () => {
      if (isAutoScrolling.current) return;
      const current = window.scrollY;
      if (current > lastScroll.current && current > 200) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScroll.current = current;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <header
      ref={nav}
      className={`${styles.navbar} ${hidden ? styles.hidden : ""}`}
    >
      <a
        href="#"
        className={styles.logo}
        onClick={(e) => {
          e.preventDefault();
          handleNav(0);
        }}
      >
        ODIN
      </a>

      <nav className={styles.links}>
        {NAV_LINKS.map((link) => (
          <a
            key={link.target}
            href={link.target}
            className={styles.link}
            onClick={(e) => {
              e.preventDefault();
              handleNav(link.target);
            }}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
