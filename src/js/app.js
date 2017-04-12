import React from 'react'
import ReactDOM from 'react-dom'

import GameCard from './components/game-card'

let game = {
  name: "Watch Dogs 2",
  description: "The watch sequel but made good",
  imageUrl: "https://dri1.img.digitalrivercontent.net/Storefront/Company/msintl/images/English/en-INTL-Xbox-One-E32016-Watchdog2-29G-01476/en-INTL-L-Xbox-One-E32016-Watchdog2-29G-01476-RM3-mnco.jpg",
  rate: 4
}

ReactDOM.render(
  <GameCard game={game}/>,
  document.getElementById('app')
)
