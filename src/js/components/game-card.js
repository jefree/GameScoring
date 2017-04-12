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
      <Container className="text-center">
        <h1> {this.game.name} </h1>
        <Row>
          <Col xs="6"> <img className="img-fluid" src={this.game.imageUrl} alt={this.game.name}/> </Col>
          <Col xs="6"> <p> {this.game.description}  </p> </Col>
        </Row>
        <Row>
          {
            stars.map((value) => {
              return <Col xs={{size: 2, push: 1}} key={value}>
                {value}
              </Col>
            })
          }
        </Row>
      </Container>
    )
  }
}

export default GameCard
