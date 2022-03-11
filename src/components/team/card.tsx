import { User } from './interface';
import React from 'react';
import classes from './card.module.css';
import { Card as Ca, Image } from 'react-bootstrap';

interface Props {
  user: User;
}

export const Card = (props: Props): React.ReactElement => {
  return (
    <div className="boundary-card">
      <Ca style={{ width: '100%' }}>
        <div className={classes.infor}>
          <div>
            <Image roundedCircle src="/img/avatar.jpg" alt="hello" className={classes.avatar} />
          </div>
          <div className={classes.des}>
            <h6 className={classes.role}>{props.user.role}</h6>
            <h4 className={classes.name}>{props.user.name}</h4>
            <div className={classes.des}>{props.user.description}</div>
          </div>
        </div>
        <Ca.Body className={classes.card_body}>
          <a href="https://facebook.com">
            <i className="fa-brands fa-facebook-square fa-xl icons"></i>
          </a>
          <a href="https://www.twitter.com">
            <i className="fa-brands fa-twitter-square fa-xl icons"></i>
          </a>
          <div className={classes.phone}>
            <a href="#">
              <i className="fa-solid fa-phone-flip fa-xl icons"></i>
            </a>
            <p>{props.user.phone}</p>
          </div>
        </Ca.Body>
      </Ca>
    </div>
  );
};
