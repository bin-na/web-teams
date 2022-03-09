import React, { useState } from 'react';
import { User } from './interface';
import Css from './team.module.scss';
import classes from './card.module.css';
import { Card as Ca, Button, Image } from 'react-bootstrap';

interface Props {
  user: User;
}

export const Card = (props: Props): React.ReactElement => {
  const [hover, setHover] = useState(false);

  return (
    <div className="boundary-card">
      <Ca style={{ width: '100%' }}>
        <div className={classes.infor}>
          <Image
            roundedCircle
            src="/img/avatar.jpg"
            alt="hello"
            style={{ width: '200px' }}
            className={classes.avatar}
          />
          <div className={classes.des}>
            <h6 className={classes.role}>{props.user.role}</h6>
            <h4 className={classes.name}>{props.user.name}</h4>
            <div className={classes.des}>{props.user.description}</div>
          </div>
        </div>
        <Ca.Body className={classes.card_body}>
          <a href="https://facebook.com">
            <i className="fa-brands fa-facebook-square fa-2xl icons"></i>
          </a>
          <a href="https://www.twitter.com">
            <i className="fa-brands fa-twitter-square fa-2xl icons"></i>
          </a>
          <div>
            <div className="phone"> {hover === true ? props.user.phone : ''}</div>
            <a onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)} href="#">
              <i className="fa-solid fa-phone-flip fa-2xl icons"></i>
            </a>
          </div>
        </Ca.Body>
      </Ca>
    </div>
  );
};
