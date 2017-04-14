import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';

class GameCard extends Component {

  constructor(props) {
    super(props)
    this.game = this.props.game;
  }

  render() {
    let stars = []
    for(let i=0; i<this.props.game.rate; i++) {
      stars.push(i);
    }

    return (
      <Container className="game-card">
        <Row className="game-img">
          <img src={this.game.imageUrl} alt={this.game.name}/>
        </Row>
        <Row className="game-name">
          <Col>
            <h1> {this.game.name} </h1>
          </Col>
        </Row>
        <Row className="game-rate">
          <Col>
            {
              stars.map((value) => <i key={value} className="rate-star fa fa-star fa-2x"/>)
            }
          </Col>
        </Row>
        <Row className="game-description">
          <Col> <p> {this.game.description}  </p> </Col>
        </Row>
      </Container>
    )
  }
}

export default GameCard
