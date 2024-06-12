import React from 'react'
import './NoPage.css'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'

const NoPage = () => {
    return (
        <>
            <main className='no-page-main'>
                <div id='no-page-content'>
                    <h1>Well this is awkward…</h1>
                    <h3>The page you’re looking for doesn’t exist.</h3>
                    <Link to='/'>
                        <button>
                            <i class="ri-arrow-left-s-line"></i>
                            <span>
                                back to home page
                            </span>
                        </button>
                    </Link>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default NoPage