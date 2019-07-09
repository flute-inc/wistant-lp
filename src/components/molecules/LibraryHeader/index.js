import React from 'react';
import styles from './index.module.scss';

export default class LibraryHeader extends React.Component {
  render() {
    return (
      <section className={styles.libraryHeader}>
        <div className={styles.inner}>
          <h2 className={styles.heading}>ケーススタディ・ライブラリ</h2>
          <p className={styles.lede}>
            ピープルマネジメント、チーム課題のソリューションなど<br />
            最新ニュースやWistantの導入事例などをご紹介いたします。
          </p>
        </div>
      </section>
    );
  }
}
