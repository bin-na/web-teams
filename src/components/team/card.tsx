import React from 'react';
import { User } from './interface';
import Css from './team.module.scss';
import classes from './card.module.css';
import {Alert, Card as Ca, Button, Container, Row, Col, Image } from "react-bootstrap";


interface Props {
  user: User;
}

export const Card = (props: Props): React.ReactElement => (
  <>
  <div className={classes.bg}>
  <h1 className="hi-team text-center">Meet The Team</h1>
  <Container fluid className="container">
    <Row md={2}>
      <Col>
        <Ca style={{ width: "100%" }}>
          <div className={classes.infor}>
            <Image
              roundedCircle
              src="/img/avatar.jpg"
              alt="hello"
              style={{ width: "200px" }}
              className={classes.avatar}
            />
            <div className={classes.des}>
              <h6 className={classes.role}>{props.user.name}</h6>
              <h4 className={classes.name}>{props.user.name}</h4>
              <div className={classes.des}>{props.user.description}</div>
            </div>
          </div>
          <Ca.Body>
          <i className="fa-brands fa-facebook-square"></i>
          </Ca.Body>
        </Ca>
      </Col>
    </Row>
  </Container>
</div></>
);
