import React from 'react';
import styles from './index.module.scss';

const AppFooter = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.logo}>Wistant</div>
        <p className={styles.contact}>Wistantに関するお問い合わせはこちら：<a className={styles.contactLink} href="mailto:info@wistant.com">info@wistant.com</a></p>
        <p className={styles.copy}>Copyright © Relations Inc. All Rights reserved.</p>
        <ul className={styles.navi}>
          <li className={styles.naviItem}>
            <a className={styles.naviLink} href="./terms.html" target="_blank" rel="noopener">利用規約</a>
          </li>
          <li className={styles.naviItem}>
            <a className={styles.naviLink} href="https://www.relationsgroup.co.jp/privacy-policy/" target="_blank" rel="noopener">個人情報保護方針</a>
          </li>
          <li className={styles.naviItem}>
            <a className={styles.naviLink} href="./sctl.html" target="_blank" rel="noopener">特定商取引法</a>
          </li>
          <li className={styles.naviItem}>
            <a className={styles.naviLink} href="https://www.relationsgroup.co.jp" target="_blank" rel="noopener">運営会社</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default AppFooter;
