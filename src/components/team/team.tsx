import React from 'react';
import { User } from './interface';
import Css from './team.module.scss';
import { Card } from './card';
import { Container, Row, Col } from 'react-bootstrap';

export interface Props {
  users: User[];
}

export const Team = (props: Props): React.ReactElement => (
  <div className={Css.container}>
    <Container fluid className="container">
      <Row md={2}>
        {props.users.map((item) => (
          <Col>
            <Card key={item.id} user={item} />
          </Col>
        ))}
      </Row>
    </Container>
  </div>
);
