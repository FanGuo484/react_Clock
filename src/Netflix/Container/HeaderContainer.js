import React from 'react'
import Header from '../Header/NetflixHeader'

function HeaderContainer({ children }) {
  return (
    <>
      <Header>
        <Header.Frame>
          <Header.Logo src="/images/icons/logo.svg" alt="Home" to="/Netflix" />
          <Header.ButtonLink to="/Netflix/signUp">Sign Up</Header.ButtonLink>
        </Header.Frame>
        {children}
      </Header>
    </>
  )
}

export default HeaderContainer
