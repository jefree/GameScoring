import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import Fa from 'react-fontawesome'

//import styles from './card.scss'
const styles = require('./card.scss')

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
      <Container className={styles.card}>
        <Row className={styles.gameImg}>
          <img src={this.game.imageUrl} alt={this.game.name}/>
        </Row>
        <Row className={styles.gameName}>
          <Col>
            <h1> {this.game.name} </h1>
          </Col>
        </Row>
        <Row className={styles.gameRate}>
          <Col>
            {
              stars.map((value) => <Fa key={value} name="star" size="2x" className={styles.rateStar} />)
            }
          </Col>
        </Row>
        <Row className={styles.gameDescription}>
          <Col> <p> {this.game.description}  </p> </Col>
        </Row>
      </Container>
    )
  }
}

export default GameCard
