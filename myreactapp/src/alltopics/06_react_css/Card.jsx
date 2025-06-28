import React from 'react'

const Card = () => {
  return (
    <div className='h-screen w-full bg-amber-100 flex justify-center items-center flex-col'>
        <section className="bg-cyan-300 p-5 rounded-x1">
            <img src="https://www.pngmart.com/files/22/User-Avatar-Profile-Background-Isolated-PNG.png" alt=""
            height={100}
            width={100}
            className='rounded-full mx-auto'></img>
            <h1 className="text-3xl font-extrabold mb-3 text-center">Jane Doe</h1>
            <p className="text-lg font-semibold">Web Developer</p>
            <button className="bg-amber-50 w-full mt-5 rounded-full font-semibold hover:bg-purple-400">Hire Me</button>
        </section>
    </div>
  )
}

export default Card