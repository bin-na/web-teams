import React from 'react';
import { User } from './interface';
import styles from './memberCard.module.scss';

interface Props {
  cardInfo: User;
  runAnimation: any;
}
export const Card = (props: Props) => {
  const memberInfo = props.cardInfo;
  const [isRun, setIsRun] = React.useState<any>(props.runAnimation ? props.runAnimation : null);

  const handleRunAnimation = () => {
    setTimeout(() => {
      console.log(isRun);
      setIsRun(false);
    }, 700);
  };

  React.useEffect(() => {
    handleRunAnimation();
  }, []);

  return props.runAnimation ? (
    <div className={isRun ? styles.wrapper + ' ' + styles.initAnimation : styles.wrapper + ' ' + styles.runAnimation}>
      <div className={styles.cardContainer}>
        <div className={styles.imgContainer}>
          <div className={styles.imgBox}>
            <img src={memberInfo.img} />
          </div>
        </div>
        <div className={styles.infoBox}>
          <div className={styles.role}>{memberInfo.role}</div>
          <h3 className={styles.name}>{memberInfo.name}</h3>
          <div className={styles.description}>{memberInfo.description}</div>
          <div className={styles.iconGroup}>
            <div className={styles.icon}>
              <img src="/img/facebook.png" />
            </div>
            <div className={styles.icon}>
              <img src="/img/instagram.png" />
            </div>
            <div className={styles.icon}>
              <img src="/img/twitter.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className={styles.wrapper}>
      <div className={styles.cardContainer}>
        <div className={styles.imgContainer}>
          <div className={styles.imgBox}>
            <img src={memberInfo.img} />
          </div>
        </div>
        <div className={styles.infoBox}>
          <div className={styles.role}>{memberInfo.role}</div>
          <h3 className={styles.name}>{memberInfo.name}</h3>
          <div className={styles.description}>{memberInfo.description}</div>
          <div className={styles.iconGroup}>
            <div className={styles.icon}>
              <img src="/img/facebook.png" />
            </div>

            <div className={styles.icon}>
              <img src="/img/instagram.png" />
            </div>

            <div className={styles.icon}>
              <img src="/img/twitter.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
