import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import img from '../../assets/myImage.jpg';

const Home = () => {
  const typedElement = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: ['Web Developer', 'Web Designer', 'Software Engineer', 'UI/UX Designer', 'Freelancer'],
      typeSpeed: 70,
      backSpeed: 70,
      backDelay: 1000,
      loop: true,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className='flex justify-around items-center p-5'>
      <div>
        <div className='font-semibold text-[2rem]'>Learn & become the</div>
        <div className='font-semibold text-blue-600 text-[2rem]'>Top 1% software developer</div>
        <div className='py-3 text-[1.2rem]'>
          <span ref={typedElement} className="multiple-text"></span> {/* Attach ref here */}
        </div>
        <button className='mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-800 transition-all'>
          Ultimate Placement Solution &gt;
        </button>
      </div>
      <div>
        <img src={img} alt="Profile" width={300} className='rounded-t-full shadow-lg' />
      </div>
    </div>
  );
};

export default Home;
