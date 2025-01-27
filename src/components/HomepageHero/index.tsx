import Heading from "@theme/Heading";
import Link from "@docusaurus/Link";
import { Link as ScrollLink } from "react-scroll";
import clsx from "clsx";
import styles from "./styles.module.css";
import React, { useCallback, useMemo } from "react";
import { toast } from "sonner";

export default function HeroSection() {
  const installationText = useMemo(() => "npm install @bassem97/upup", []);
  const handleCopy = useCallback(() => {
    // Only execute in browser environment
    if (typeof window !== "undefined" && navigator.clipboard) {
      navigator.clipboard
        .writeText(installationText)
        .then(() => {
          toast.info("Copied!");
        })
        .catch(() => {
          toast.info("Please copy text manually!");
        });
    }
  }, [installationText]);

  return (
    <header className={clsx("hero", "wrapper", styles.heroWrapper)}>
      <div className={clsx("container", styles.heroContainer)}>
        <div className={styles.heroVersionContainer}>
          <span className={styles.heroVersionContent}>v1.0 Now Available</span>
        </div>

        <Heading as="h1" className={clsx("hero__title", styles.heroTitle)}>
          Modern File Uploads
          <span className={styles.heroTitleSpan}>for React</span>
        </Heading>

        <p className={clsx("hero__subtitle", styles.heroSubTitle)}>
          Open-source React component library with cloud storage integrations,
          drag & drop, and enterprise-grade features.
        </p>

        <div className={styles.heroCTAContainer}>
          <Link
            to="/docs/intro"
            className={clsx("button button--lg", styles.heroGetStartedButton)}
          >
            <span>Get Started</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={styles.heroGetStartedButtonIcon}
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </Link>
          <ScrollLink
            smooth
            to="demo"
            className={styles.heroDemoLink}
            offset={-60}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={styles.heroDemoIcon}
            >
              <polygon points="6 3 20 12 6 21 6 3" />
            </svg>
            <span>Live Demo</span>
          </ScrollLink>
        </div>

        <div className={styles.heroCodeWrapper}>
          <div className={styles.heroCodeContainer}>
            <code className={styles.heroCode}>
              <button onClick={handleCopy} className={styles.heroCodeButton}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={styles.heroCodeIcon}
                >
                  <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                  <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                </svg>
              </button>
              <span>{installationText}</span>
            </code>
          </div>
        </div>
      </div>
    </header>
  );
}
