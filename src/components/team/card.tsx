import React from 'react';
import { User } from './interface';
import Css from './team.module.scss';

interface Props {
  user: User;
}

export const Card = (props: Props): React.ReactElement => (
  <div className={Css.card}>
    <p className={Css.name}>{props.user.name}</p>
    <p className={Css.old}>{props.user.old}</p>
    <p className={Css.description}>{props.user.description}</p>
  </div>
);
