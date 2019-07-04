import React from 'react';
import styles from './index.module.scss';

const AppHeader = () => {
  return (
    <header className={styles.header}>

      <div className={styles.inner}>
        <h1 className={styles.logo}>
          <a className={styles.logoLink} href="./index.html">Wistant</a>
        </h1>

        <nav className={styles.nav}>
          <ul className={styles.navInner}>
            <li className={styles.navItemTrial}>
              <div className={styles.navButton}>
                <a className={styles.navButtonTrialDemonstration} href="https://wistant.satori.site/demo_request">無料デモのお申込みはこちら</a>
              </div>
              <div className={styles.navButton}>
                <a className={styles.navButtonTrialDocument} href="https://wistant.satori.site/brochure_request">資料請求のお申込みはこちら</a>
              </div>
            </li>
            <li className={styles.navItem}>
              <a className={styles.navLink} href="./index.html">ホーム</a>
              <ul className={styles.navSubMenu}>
                <li className={styles.navSubItem}>
                  <a className={styles.navSubLink} href="./index.html">TOP</a>
                </li>
                <li className={styles.navSubItem}>
                  <a className={styles.navSubLink} href="#about">Wistantとは</a>
                </li>
                <li className={styles.navSubItem}>
                  <a className={styles.navSubLink} href="#price">価格</a>
                </li>
                <li className={styles.navSubItem}>
                  <a className={styles.navSubLink} href="#seleck">1on1とは</a>
                </li>
              </ul>
            </li>
            <li className={styles.navItem}>
              <a className={styles.navLink} href="./functions.html">機能</a>
              <ul className={styles.navSubMenu}>
                <li className={styles.navSubItem}>
                  <a className={styles.navSubLink} href="./functions.html#practice">1on1の運用・改善</a>
                </li>
                <li className={styles.navSubItem}>
                  <a className={styles.navSubLink} href="./functions.html#objectives">目標設定・支援</a>
                </li>
                <li className={styles.navSubItem}>
                  <a className={styles.navSubLink} href="./functions.html#security">セキュリティ</a>
                </li>
              </ul>
            </li>
            <li className={styles.navItemLogin}>
              <a className={styles.navLinkLogin} href="login.html">ログイン</a>
            </li>
          </ul>
        </nav>

        <div className={styles.textButton}>
          <a className={styles.textButtonLogin} href="login.html">ログイン</a>
        </div>

        <div className={styles.button}>
          <a className={styles.buttonTrial} href="#demoAndDoc">お問い合わせはこちら</a>
        </div>

        <div className={styles.hbButton}>
          <div className={styles.hbButtonBar}></div>
          <div className={styles.hbButtonBar}></div>
          <div className={styles.hbButtonBar}></div>
        </div>
      </div>

    </header>
  );
};

export default AppHeader;
