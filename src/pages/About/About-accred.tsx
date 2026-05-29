import React from "react";
import { motion } from "framer-motion";
import { SealCheck, Info } from "@phosphor-icons/react";
import { Footer } from "../../components/Footer";
import styles from "@styles/About/About-accred.module.scss";
import { accredData } from "../../components/accred.config";

export const AboutAccred: React.FC = () => {
  return (
    <div className={styles.pageWrapper}>
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.headerArea}>
            <div className={styles.titleRow}>
              <SealCheck size={32} weight="thin" />
              <h1>Accreditations</h1>
            </div>
            <p>
              Formal recognition of technical standards, operational compliance,
              and educational quality assurance.
            </p>
          </div>

          {accredData.length > 0 ? (
            <div className={styles.gridContainer}>
              {accredData.map((item) => (
                <div key={item.id} className={styles.accredCard}>
                  <h3>{item.title}</h3>
                  <span>{item.organization}</span>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={styles.emptyState}
            >
              <Info size={32} />
              <h3>Currently under review</h3>
              <p>
                Active accreditations and compliance milestones are being
                finalized and will be updated here shortly.
              </p>
            </motion.div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
};
