import React from 'react'

const SocialMediaIcons = ({link, icon}) => {
  return (
    <a href={link} target='_blank'>
        <i className={icon}/>
    </a>
  )
}

export default SocialMediaIcons