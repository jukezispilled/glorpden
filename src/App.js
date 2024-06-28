import React from 'react';
import giphyBackground from './hq720.jpg'; // Import your WEBP background
import bgImage from './bg-min.png'; // Import your PNG background
import Xlogo from './xlogo.jpg';
import TG from './tg.png';

function App() {
  const mainBackground = {
    backgroundImage: `url(${bgImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundAttachment: "fixed"
  };

  const secondaryBackground = {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${giphyBackground})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    zIndex: -1
  };

  return (
    <div className="relative h-screen w-screen flex justify-center items-center" style={mainBackground}>
      {/* Secondary background */}
      <div style={secondaryBackground}></div>
      
      {/* Main content */}
      <div className="relative h-full w-full flex justify-center items-center">
          <div className='flex justify-center mt-[42.5%] translate-x-3 md:mt-[30%] md:translate-x-10'>
            <div className='grid content-center z-40'>
              <a
                href="https://pump.fun/board"
                className='font-custom text-4xl md:text-5xl lg:text-6xl text-white bg-gradient-to-r from-[#5feb3e] via-[#80ff60] to-[#5feb3e] border-4 animate-text p-6 rounded-xl md:hover:scale-105 transition ease-in-out duration-200'
              >
                BUY
              </a>
              <div className='pt-8 text-center font-custom text-2xl flex justify-center -mt-3'>
                <a href="https://twitter.com/joeglorpden" className='p-2 md:hover:scale-110 transition ease-in-out duration-200'><img src={Xlogo} alt='Xlogo' className='w-12 h-12 rounded-md'></img></a>
                <a href="https://t.me/glorpden" className='p-2 md:hover:scale-110 transition ease-in-out duration-200'><img src={TG} alt='Tg logo' className='w-12 h-12'></img></a>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default App;