import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import ReactDOM from 'react-dom'

import GameCard from './components/game-card'

import '../css/app.scss'

let games = [{
  id: 1,
  name: "GTA V",
  description: "The watch sequel but made good",
  imageUrl: "https://dri1.img.digitalrivercontent.net/Storefront/Company/msintl/images/English/en-INTL-Xbox-One-E32016-Watchdog2-29G-01476/en-INTL-L-Xbox-One-E32016-Watchdog2-29G-01476-RM3-mnco.jpg",
  rate: 1
},{
  id: 2,
  name: "Watch Dogs 2",
  description: "The watch sequel but made good",
  imageUrl: "https://dri1.img.digitalrivercontent.net/Storefront/Company/msintl/images/English/en-INTL-Xbox-One-E32016-Watchdog2-29G-01476/en-INTL-L-Xbox-One-E32016-Watchdog2-29G-01476-RM3-mnco.jpg",
  rate: 5
},{
  id: 3,
  name: "Watch Dogs 2",
  description: "The watch sequel but made good",
  imageUrl: "https://dri1.img.digitalrivercontent.net/Storefront/Company/msintl/images/English/en-INTL-Xbox-One-E32016-Watchdog2-29G-01476/en-INTL-L-Xbox-One-E32016-Watchdog2-29G-01476-RM3-mnco.jpg",
  rate: 1
},{
  id: 4,
  name: "Watch Dogs 2",
  description: "The watch sequel but made good",
  imageUrl: "https://dri1.img.digitalrivercontent.net/Storefront/Company/msintl/images/English/en-INTL-Xbox-One-E32016-Watchdog2-29G-01476/en-INTL-L-Xbox-One-E32016-Watchdog2-29G-01476-RM3-mnco.jpg",
  rate: 3
}];

class App extends Component {
  render() {
    return (
      <Col lg="9">
      <Row className="game-card-list">
        {
          this.props.games.map((game) => {
            return (
              <Col key={game.id} xs="12" sm="6" md="4" lg="3">
                <GameCard game={game} />
              </Col>
            )
          })
        }
      </Row>
      </Col>
    )
  }
}

ReactDOM.render(
  <App games={games}/>,
  document.getElementById('app')
)
