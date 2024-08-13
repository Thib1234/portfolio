import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'

const Footer = () => {
  return (
    <footer className='w-full pb-10 mb-[100px]' id='contact'>
        <div className='flex flex-col items-center'>
            <h1 className='heading lg:max-w-[45vw]'>
                Pret à prendre <span className='text-purple'> votre </span> présence digitale au nouveau niveau ?
            </h1>
            <p className='text-white-200 md:mt-10 my-5 text-center'>
                Jetez un coup d’œil sur mon portfolio et laissez-moi vous aider à me trouver
            </p>
            <a href="mailto:t.vdbd@hotmail.com"><MagicButton title='Contactez-moi' icon={<FaLocationArrow />} position='right'/></a>
        </div>
        <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
            <p className='md:text-base text-sm md:font-normal font-light'>
                Copyright © 2024 Thibault Vandenbemden
            </p>
            <div className='flex items-center md:gap-3 gap-6'>
                {socialMedia.map((profile) => (
                    <div key={profile.id} className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop:filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border-black-300'>
                        <img src={profile.img} alt={profile.id} className="w-6" width={20} height={20} />
                    </div>
                ))}
            </div>
        </div>
    </footer>
  )
}

export default Footer