import { useColorMode } from "@docusaurus/theme-common";
import styles from "./styles.module.css";
import React, { useMemo } from "react";
import { FeaturesIcons } from "@site/src/icons";

const features = [
  {
    icon: "cloud-storage",
    title: "Cloud Storage Integration",
    description:
      "Seamless integration with S3, Google Drive, OneDrive and more",
  },
  {
    icon: "drag-drop",
    title: "Drag & Drop",
    description:
      "Intuitive file management with smooth drag and drop functionality",
  },
  {
    icon: "instant-preview",
    title: "Instant Previews",
    description: "Preview images, documents, and common file types instantly",
  },
];

export default function HomepageFeatures() {
  const { colorMode } = useColorMode();
  const svgPrimaryColor = useMemo(
    () => (colorMode === "dark" ? "#37c4f5" : "#1849d6"),
    [colorMode]
  );
  const svgSecondaryColor = useMemo(
    () => (colorMode === "dark" ? "#77dbf8" : "#557de3"),
    [colorMode]
  );

  return (
    <section className="wrapper">
      <section className="container">
        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={styles.featureCard}
              style={{ animationDelay: `${600 + index * 200}ms` }}
            >
              <div
                className={`${styles.featureIcon} ${styles.animate} ${
                  styles[`delay${index + 1}`]
                }`}
              >
                <svg>
                  <use href={`#${feature.icon}`} />
                </svg>
              </div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
            </div>
          ))}
        </div>

        <FeaturesIcons
          primary={svgPrimaryColor}
          secondary={svgSecondaryColor}
        />
      </section>
    </section>
  );
}
