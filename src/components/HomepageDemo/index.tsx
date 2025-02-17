import Heading from "@theme/Heading";
import React, { ChangeEventHandler, useCallback, useState } from "react";
import styles from "./styles.module.css";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import Uploader from "@site/src/components/Uploader";

const UPUP_LIMIT_DEFAULT = 1;
const UPUP_LIMIT_MIN = 1;
const UPUP_LIMIT_MAX = 30;

export default function HomepageDemo() {
  const [mini, setMini] = useState(false);
  const [limit, setLimit] = useState(UPUP_LIMIT_DEFAULT);

  const handleMiniChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      if (!mini) setLimit(1);
      setMini(e.currentTarget.checked);
    },
    [mini]
  );

  const handleLimitChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => setLimit(Number(e.currentTarget.value)),
    []
  );

  return (
    <section id="demo" className={clsx("wrapper", styles.demoWrapper)}>
      <div className={clsx("container", styles.demoContainer)}>
        <div className={styles.demoConfig}>
          <div className={styles.demoConfigHeading}>
            <Heading as="h2">Live Demo</Heading>
            <p>
              Use this live component to test the functionality of our
              component.
            </p>
          </div>
          <div className={styles.demoConfigOptionsWrapper}>
            <div className={styles.demoConfigOptions}>
              <div className={styles.switchContainer}>
                <label htmlFor="mini">Mini</label>
                <label className="switch">
                  <input
                    id="mini"
                    type="checkbox"
                    checked={mini}
                    value={mini}
                    onChange={handleMiniChange}
                  />
                  <span className="slider round" />
                </label>
              </div>

              <div className={styles.rangeContainer}>
                <label htmlFor="configRange">Limit: {limit}</label>
                <div className={styles.rangeContainerValues}>
                  <div>{UPUP_LIMIT_MIN}</div>
                  <div className="range">
                    <input
                      type="range"
                      name="range"
                      id="configRange"
                      value={limit}
                      onChange={handleLimitChange}
                      min={UPUP_LIMIT_MIN}
                      max={UPUP_LIMIT_MAX}
                      step={1}
                      className="slider"
                      disabled={mini}
                    />
                  </div>
                  <div>{UPUP_LIMIT_MAX}</div>
                </div>
                {mini && (
                  <small>
                    Limit is automatically set to {UPUP_LIMIT_MIN} when mini is
                    true.
                  </small>
                )}
              </div>
            </div>

            <small>
              ** Check the docs to see the{" "}
              <Link to="/docs/category/upupuploader">
                full list of component props
              </Link>
            </small>
          </div>
        </div>
        <div className={styles.upupContainer}>
          <Uploader limit={limit} mini={mini} />
        </div>
      </div>
    </section>
  );
}
