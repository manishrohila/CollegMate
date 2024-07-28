import React from 'react';
import Button from '../components/common/Button';
import Typewriter from 'typewriter-effect';

const Home = () => {
  return (
    <>
      <div className='bg-white min-h-screen pt-12'>
        <div className="container flex flex-col justify-center items-center">

          <div className="flex justify-center text-7xl font-medium font-sans bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent">
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString('Unlock Your Potential Together')
                  .pauseFor(2500)
                  .deleteAll()
                  .typeString('Share Knowledge, Grow Together')
                  .pauseFor(2500)
                  .deleteAll()
                  .typeString('Find and Upload Notes Easily')
                  .pauseFor(2500)
                  .start();
              }}
              options={{
                loop: true,
              }}
            />
          </div>
          <div className="text-4xl text-[#2d2f31] flex flex-col text-left mr-72 pt-8">
            <p>Access and share the best study notes, past </p>
            <p>papers, and resources from your peers and </p>
            <p>professors.</p>
          </div>
        </div>
        <div className='grid grid-cols-2 pt-12'>
          <div className='flex flex-col justify-center items-center'>
            <div className='gap-10 flex gflex-col'>
              <Button active={false} linkto={'/upload'} className={'bg-blue-600 hover:bg-blue-700'}>
                Upload Notes
              </Button>
              <Button active={false} linkto={'/courses'} className={'bg-blue-600 hover:bg-blue-700'}>
                Find Notes
              </Button>
            </div>
          </div>
          <div className='flex justify-center items-center'>
            <img src='https://res.cloudinary.com/dg4jqvgqr/image/upload/v1718809247/collegeMate/j4krjw9p1crgf6jklgps.svg' alt='img loading' className='w-6/12 mr-12'></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
