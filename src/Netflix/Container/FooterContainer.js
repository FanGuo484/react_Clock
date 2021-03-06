import React from 'react'
import NetflixFooter from '../footer/Netflix-footer'
import GlobalFooterContainer from '../../Shared/container/GlobalFooterContainer'
function FooterContainer() {
  return (
    <>
      <NetflixFooter>
        <NetflixFooter.Title>Question?</NetflixFooter.Title>
        <NetflixFooter.Break />
        <NetflixFooter.Row>
          <NetflixFooter.Column>
            <NetflixFooter.Link href='https://help.netflix.com/zh-cn/node/412'>FAQ</NetflixFooter.Link>
            <NetflixFooter.Link href='#'>Investor Relations </NetflixFooter.Link>
            <NetflixFooter.Link href='#'>Ways to Watch</NetflixFooter.Link>
            <NetflixFooter.Link href='#'>Corporate Information</NetflixFooter.Link>
            <NetflixFooter.Link href='#'>Netflix Originals</NetflixFooter.Link>
          </NetflixFooter.Column>

          <NetflixFooter.Column>
            <NetflixFooter.Link href='#'>Help Center</NetflixFooter.Link>
            <NetflixFooter.Link href='#'>Jobs </NetflixFooter.Link>
            <NetflixFooter.Link href='#'>Terms of Use</NetflixFooter.Link>
            <NetflixFooter.Link href='#'>Contact Us</NetflixFooter.Link>
          </NetflixFooter.Column>

          <NetflixFooter.Column>
            <NetflixFooter.Link href='#'>Account</NetflixFooter.Link>
            <NetflixFooter.Link href='#'>Redeem Gift Cards </NetflixFooter.Link>
            <NetflixFooter.Link href='#'>Privacy</NetflixFooter.Link>
            <NetflixFooter.Link href='#'>Speed Test</NetflixFooter.Link>
          </NetflixFooter.Column>

          <NetflixFooter.Column>
            <NetflixFooter.Link href='#'>Media Center</NetflixFooter.Link>
            <NetflixFooter.Link href='#'>Buy Gift Cards </NetflixFooter.Link>
            <NetflixFooter.Link href='#'>Cookie Preferences</NetflixFooter.Link>
            <NetflixFooter.Link href='#'>Legal Notices</NetflixFooter.Link>
          </NetflixFooter.Column>
        </NetflixFooter.Row>
      </NetflixFooter>
      <GlobalFooterContainer />
    </>
  )
}

export default FooterContainer
