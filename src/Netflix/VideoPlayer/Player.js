import React, { useState, useContext, createContext } from 'react'
import { Container, Button, Overlay, Inner, Close } from './styles/styledPlayer'
import ReactDOM from 'react-dom'

export const PlayerContext = createContext()

export default function Player({ children, ...restProps }) {
  const [showPlayer, setShowPlayer] = useState(false)

  return (
    <PlayerContext.Provider value={{ showPlayer, setShowPlayer }}>
      <Container {...restProps}>{children}</Container>
    </PlayerContext.Provider>
  )
}

Player.Video = function PlayerVideo({ src, ...restProps }) {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext)

  return showPlayer
    ? ReactDOM.createPortal(
        <Overlay {...restProps} onClick={() => setShowPlayer(false)} data-testid='player'>
          <Inner>
            <video id='NetflixPlayer' controls autoPlay>
              <source src={src} type='video/mp4' />
            </video>
            <Close />
          </Inner>
        </Overlay>,
        document.body,
      )
    : null
}

Player.Button = function PlayerButton({ ...restProps }) {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext)

  return (
    <Button onClick={() => setShowPlayer(!showPlayer)} {...restProps}>
      Play
    </Button>
  )
}
