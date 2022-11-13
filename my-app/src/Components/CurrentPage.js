import React from 'react'
import { NavLink } from 'react-router-dom'

const CurrentPage = ({cpage}) => {
  return (
    <section className='CurrentPage'>
        <div className='container'>
            <ul className='CurrentPageList'>
                <li>
                    <NavLink to='/' end>Home</NavLink>
                </li>
                <li>{cpage}</li>
            </ul>
        </div>
    </section>
  )
}

export default CurrentPage