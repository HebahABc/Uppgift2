import React from 'react'
import SocialMediaIcons from '../Components/SocialMediaIcons'

const LastBar = () => {
  return (
    <div className="last-bar">
            <div className="Social-media">
            <SocialMediaIcons link="http://facebook.com" icon= "fa-brands fa-facebook"/>
                <SocialMediaIcons link="http://instagram.com" icon= "fa-brands fa-instagram"/>
                <SocialMediaIcons link="http://twitter.com" icon= "fa-brands fa-twitter"/>
                <SocialMediaIcons link="http://google.com" icon= "fa-brands fa-google"/>
                <SocialMediaIcons link="http://linkedin.com" icon= "fa-brands fa-linkedin"/>
            </div>
            <center><p id='year'>©2022 Fixxo. All Rights Reserved</p></center>
        </div>
  )
}

export default LastBar