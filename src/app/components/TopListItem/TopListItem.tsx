"use client";

interface ITopListItem {}
import styles from "./topListItem.module.scss";
export const TopListItem = ({ item }: ITopListItem) => {
  return (
    <div className={styles.topListItem}>
      <div className={styles.topListItem__position}>#{item.place}</div>
      <div className={styles.topListItem__name}>{item.name}</div>
    </div>
  );
};
