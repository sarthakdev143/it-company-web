import React from 'react'
import Footer from '../Footer/Footer'
import '../Navlinks.css'

const OpenSource = () => {
  return (
    <>
      <section className='section'>
        <div className='header'>
          <h1>Open Source</h1>
          <p>Our commitment to open source development ensures that we deliver flexible, cost-effective, and innovative solutions. By leveraging the power of open source technologies, we provide robust and scalable applications that can be tailored to meet your specific business needs.</p>
        </div>

        <article className='article'>
          <h2>Key Technologies</h2>
          <ul>
            <li><strong>Linux:</strong> Reliable and secure operating system for servers and desktops.</li>
            <li><strong>Apache:</strong> Popular web server software known for its performance and security.</li>
            <li><strong>MySQL/PostgreSQL:</strong> Powerful open source database management systems.</li>
            <li><strong>PHP:</strong> Server-side scripting language designed for web development.</li>
            <li><strong>Python:</strong> Versatile programming language used for various applications.</li>
            <li><strong>Ruby on Rails:</strong> Web application framework for rapid development.</li>
          </ul>
        </article>

        <article className='article'>
          <h2>Benefits</h2>
          <ul>
            <li>Cost-effective solutions with no licensing fees.</li>
            <li>High level of customization and flexibility.</li>
            <li>Strong community support and frequent updates.</li>
            <li>Enhanced security and transparency.</li>
          </ul>
        </article>
      </section>
      <Footer />
    </>
  )
}

export default OpenSource