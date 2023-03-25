
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { HTMLAttributes } from 'react'
import { useState } from "react";

const inter = Inter({ subsets: ['latin'] })


  
const Pet = () => {

  return  (

    <div>
      <div className="text-2xl text-black font-medium">Pet Owner Details</div>

      <label htmlFor="petName" className='comfortaa'>Pet's Name <span className="asteric text-red-600">&#42;</span></label>
      <input type="text" id="petName" name="petName" className='border border-gray-300 blocl my-2  py-2 px-4 w-full rounded focus:online-none focus:border-teal' minLength={2} placeholder="e.g Danger" required aria-required="true"/>

      <br />
      <label htmlFor="birthdate">Pet Age <span className='asteric text-red-600'>&#42;</span></label>
      
      <input type="number"  id='birthdate' name='birthdate' className='border border-gray-300 blocl my-2 py-2 px-4 w-full rounded focus:online-none focus:border-teal' placeholder='e.g 10' required/>
      

      <label htmlFor="breed" className='comfortaa'>Breed & color(if not known breed, do they have long hair, medium or short hair) <span className='asteric text-red-600'>&#42;</span> </label>
      <input type="text" id='breed' name='breed' className='border border-gray-300 blocl my-2 py-2 px-4 w-full rounded focus:online-none focus:border-teal' placeholder='' required/>

      <div className='comfortaa'>Sex <span className='asteric text-red-600'>&#42;</span></div>

      <input type="radio" id='male' name='sex' className='border border-gray-300 blocl my-2 py-2 px-4 w-1/6 rounded focus:online-none focus:border-teal' required />
      <label htmlFor="male">Male</label><br />

      <input type="radio" id='neuteredMale' name='sex' className='border border-gray-300 blocl my-2 py-2 px-4 w-1/6 rounded focus:online-none focus:border-teal' required />
      <label htmlFor="neuteredMale" className='comfortaa'>Neutered Male</label><br />

      <input type="radio" id='female' name='sex' className='border border-gray-300 blocl my-2 py-2 px-4 w-1/6 rounded focus:online-none focus:border-teal' required />
      <label htmlFor="female" className='comfortaa'>Female</label><br />

      <input type="radio" id='spayedFemale' name='sex' className='border border-gray-300 blocl my-2 py-2 px-4 w-1/6 rounded focus:online-none focus:border-teal'/>
      <label htmlFor="spayedFemale" className='comfortaa'>Spayed Female</label>

      <div className="mt-3">Is Your Pet Microchipped? <span className="asteric text-red-600">&#42;</span></div>              
      <input type="radio" id='male' name='Microchipped' className='border border-gray-300 blocl my-2 py-2 px-4 w-1/6 rounded focus:online-none focus:border-teal' required />
      <label htmlFor="" className='comfortaa'>Yes</label><br />

      <input type="radio" id='no' name='Microchipped' value={"Not s"} className='border border-gray-300 blocl my-2 py-2 px-4 w-1/6 rounded focus:online-none focus:border-teal' required />
      <label htmlFor="no" className='comfortaa'>No</label><br />

      <input type="radio" id='notSure' value="Not sure" name='Microchipped' className='border border-gray-300 blocl py-2 px-4 w-1/6 rounded focus:online-none focus:border-teal' required/>
      <label htmlFor="notSure" className='comfortaa'>Not sure</label>

      <br /><br />
      <label htmlFor="message" className='comfortaa'>Message? <span className="asteric text-red-600">&#42;</span> </label>
      <textarea id="message" name="message" className='border border-gray-300 blocl my-2 py-2 px-4 w-full rounded focus:online-none focus:border-teal' placeholder='write your message here' rows={10} required></textarea>

    </div>
  )

};

export default Pet;
  