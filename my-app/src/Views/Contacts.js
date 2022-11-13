import React from 'react'
import ContactForm from '../Section/ContactForm'
import CurrentPage from '../Components/CurrentPage'
import MapSection from '../Section/MapSection'

const Contacts = () => {
  window.top.document.title = 'Contacts | Fixxo.'
  return (
    <>
      <CurrentPage cpage=' Contacts'/>
      <MapSection/>
      <ContactForm/>
    </>
  )
}

export default Contacts