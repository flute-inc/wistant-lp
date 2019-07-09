import React from 'react';
import styles from './index.module.scss';

export default class LibraryFinder extends React.Component {
  render() {
    return (
      <div className={styles.libraryFinder}>
        <form className={styles.inner}>
          <div className={styles.item}>
            <select className={styles.select}>
              <option>トピックで絞り込み</option>
            </select>
          </div>
          <div className={styles.item}>
            <select className={styles.select}>
              <option>キーワードで絞り込み</option>
            </select>
          </div>
          <div className={styles.item}>
            <input className={styles.input} type="text" placeholder="検索" />
          </div>
        </form>
      </div>
    );
  }
};
