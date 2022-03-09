import React from 'react';
import { User } from './interface';
import Css from './team.module.scss';
import classes from './card.module.css';
import { Alert, Card as Ca, Button, Container, Row, Col, Image } from 'react-bootstrap';

interface Props {
  user: User;
}

export const Card = (props: Props): React.ReactElement => (
  <div className="boundary-card">
    <Ca style={{ width: '100%' }}>
      <div className={classes.infor}>
        <Image roundedCircle src="/img/avatar.jpg" alt="hello" style={{ width: '200px' }} className={classes.avatar} />
        <div className={classes.des}>
          <h6 className={classes.role}>{props.user.name}</h6>
          <h4 className={classes.name}>{props.user.name}</h4>
          <div className={classes.des}>{props.user.description}</div>
        </div>
      </div>
      <Ca.Body className={classes.card_body}>
        <a href="https://www.w3schools.com">
          <i className="fa-brands fa-facebook-square fa-xl icons"></i>
        </a>
        <a href="https://www.w3schools.com">
          <i className="fa-brands fa-twitter-square fa-xl icons"></i>
        </a>
        <a href="https://www.w3schools.com">
          <i className="fa-solid fa-phone-flip fa-xl icons"></i>
        </a>
      </Ca.Body>
    </Ca>
  </div>
);
