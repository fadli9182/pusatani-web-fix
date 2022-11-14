import React from 'react'
import { AiOutlinePhone } from 'react-icons/ai'
import Header from '../partials/Header'

function Contact() {
  return (
    <div>
        <Header/>
        <div className="container text-center">
            <h1>Kontak Kami</h1>
            <div className="row">
                <div className="col-md-4">
                    <AiOutlinePhone style={{fontSize: '100px', borderRadius: '50%', padding: '10px', border: '2px solid green'}}/>
                    <p>Nomer Whatsapp</p>
                    <p>6282828282</p>
                </div>
                <div className="col-md-4">
                    <AiOutlinePhone style={{fontSize: '100px', borderRadius: '50%', padding: '10px', border: '2px solid green'}}/>
                    <p>Nomer Whatsapp</p>
                    <p>6282828282</p>
                </div>
                <div className="col-md-4">
                    <AiOutlinePhone style={{fontSize: '100px', borderRadius: '50%', padding: '10px', border: '2px solid green'}}/>
                    <p>Nomer Whatsapp</p>
                    <p>6282828282</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact
