import React from "react";
import styles from "./styles.module.css";

export default function FeedbackSection() {
  return (
    <section className={styles.feedbackSection} id="feedback">
      <div className="container">
        <h3>We value your feedback!</h3>
        <p>
          Have suggestions or found an issue? Help us improve by{" "}
          <a
            href="mailto:hello@devino.ca?subject=UpUp Feedback"
            className={styles.feedbackLink}
          >
            sending your feedback
          </a>
        </p>
      </div>
    </section>
  );
}
