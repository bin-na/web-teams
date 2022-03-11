import React from 'react';
import { User } from './interface';
import Css from './team.module.scss';
import { Card } from './card';
import { Container, Row, Col, Image } from 'react-bootstrap';

export interface Props {
  users: User[];
}

export const Team = (props: Props): React.ReactElement => (
  <div className={Css.container}>
    <Container fluid className="container">
      <Row md={1}>
        {props.users.map((item, index) => (
          <div className="outside-content" key={index}>
            {index % 2 === 0 && (
              <Col className="ani1" md>
                <Card user={item} />
              </Col>
            )}
            <Image className="meme" src={item.meme} alt="meme"></Image>
            {index % 2 === 1 && (
              <Col className="ani2" md>
                <Card user={item} />
              </Col>
            )}
          </div>
        ))}
      </Row>
    </Container>
  </div>
);
