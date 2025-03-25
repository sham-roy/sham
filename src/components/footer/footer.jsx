import React from 'react'
import './footer.scss';

const Footer = () => {
    return (
        <div className='footer'>
            <a href='/'>
                <img className='social-icons' src="/gif/icons8-facebook-circled.gif" alt="" /></a>
            <a href='https://www.instagram.com/sy.royce____' target='_blank'>
                <img className='social-icons' src="/gif/icons8-instagram.gif" alt="" /></a>
            <a href='https://wa.me/+917025825359?text=Hi,' target='_blank'>
                <img className='social-icons' src="/gif/icons8-whatsapp.gif" alt="" /></a>
            <a href='https://www.linkedin.com/in/shyam-roy' target='_blank'>
                <img className='social-icons' src="/gif/icons8-linkedin.gif" alt="" /></a>
            <a href='https://github.com/sham-roy' target='_blank'>
                <img className='social-icons' src="/gif/icons8-github.gif" alt="" /></a>
            <a href='/'>
                <img className='social-icons' src="/gif/icons8-twitter-circled.gif" alt="" /></a>
        </div>
    )
}

export default Footer
