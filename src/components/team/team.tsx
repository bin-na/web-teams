import React from 'react';
import { User } from './interface';
import Css from './team.module.scss';
import { Card } from './card';

export interface Props {
  users: User[];
}

export const Team = (props: Props): React.ReactElement => (
  <div className={Css.container}>
    {props.users.map((item) => (
      <Card key={item.id} user={item} />
    ))}
  </div>
);
