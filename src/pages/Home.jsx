import React from 'react'
import Button from '../components/common/Button'
const Home = () => {
  return (
    <>
      <div className='bg-custom-color-1 min-h-screen pt-12'>

        <div className="container flex flex-col justify-center items-center">

          <div className="text-7xl font-medium font-sans text-[#5E5BFB] text-left">
            <h1>Unlock Your Potential Together</h1>
          </div>
          <div className="text-4xl text-[#5F5B5B] flex flex-col text-left mr-72 pt-8">
            <p>Access and share the best study notes, past </p>
            <p>papers, and resources from your peers and </p>
            <p>professors.</p>
          </div>
        </div>
        {/* <img src='https://res.cloudinary.com/dg4jqvgqr/image/upload/v1718809247/collegeMate/sh2opiktuylsguzecvot.svg' alt='img loading' className=' w-6/12 ml-12' ></img> */}

        <div className='grid grid-cols-2  pt-12 '>
          <div className='flex flex-col justify-center items-center'>
            
            <div className='gap-10 flex flex-col'>
              <Button active={false} linkto={'/1styearnotes'} >1st year Notes</Button>
              <Button active={false} linkto={'/courses'}>Department Notes</Button>
            </div>
           
          </div>
          <div className='flex justify-center items-center'>
            <img src='https://res.cloudinary.com/dg4jqvgqr/image/upload/v1718809247/collegeMate/j4krjw9p1crgf6jklgps.svg' alt='img loading'  className=' w-6/12 mr-12'></img>
          </div>
        </div>

      </div>
    </>
  )
}

export default Home