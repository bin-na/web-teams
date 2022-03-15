import React from 'react';
import { User } from './interface';
import styles from './cardGroup.module.scss';
import { Card } from './card';

export interface Props {
  users: User[];
}

export const Team = (props: Props) => {
  return (
    <div className={styles.cardGroup}>
      {props.users.map((item, index) => {
        return index === 1 ? (
          <div className={styles.cardElement}>
            <div className={styles.iconBackground}>
              <div className={styles.iconBackgroundBox}>
                <img src={item.icon} />
              </div>
            </div>
            <Card key={index} cardInfo={item} runAnimation={true} />
          </div>
        ) : (
          <div className={styles.cardElement}>
            <div className={styles.iconBackground}>
              <div className={styles.iconBackgroundBox}>
                <img src={item.icon} />
              </div>
            </div>
            <Card key={index} cardInfo={item} runAnimation={false} />
          </div>
        );
      })}
    </div>
  );
};
