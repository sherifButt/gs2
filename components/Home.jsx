import React from 'react'



function classNames(...classes) {
   return classes.filter(Boolean).join(' ')
}

const Home = () => {
   return (
      <section id='Home' className='bg-white'>
         <h1>Home</h1>
      </section>
   )
}

export default Home
