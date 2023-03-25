
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })


const PetOwnwer = () => {

    return(
      <form action="/veterinary/contact" method="post">

        <div className=''>
          <div className="text-2xl text-black font-medium">Pet Owner Details</div>
          <label htmlFor="firstName" className='comfortaa'>First Name <span className="asteric text-red-600">&#42;</span></label>
          <input type="text" id="firstName" name="firstName" className='border border-gray-300 blocl my-2  py-2 px-4 w-full rounded focus:online-none focus:border-teal' minLength={2} placeholder="First Name" required aria-required="true"/>
      
          <label htmlFor="lastName" className='comfortaa text-l'>Last Name <span className="asteric text-red-600">&#42;</span></label>
          <input type="text" id="lastName" name="lastName" className='border border-gray-300 blocl my-2  py-2 px-4 w-full rounded focus:online-none focus:border-teal' placeholder="Last Name"  required  minLength={2}/>
      
          <label htmlFor="email" className='comfortaa'>Email <span className="asteric text-red-600">&#42;</span></label>
          <input type="email" id="email" name="email" className='border border-gray-300 blocl my-2  py-2 px-4 w-full rounded focus:online-none focus:border-teal' placeholder='esa@electricsheepagency.com' required/>
      
          <label htmlFor="phone" className='comfortaa'>Phone Number <span className="asteric text-red-600">&#42;</span></label>
          <input type="tel" id="phone" name="phone" className='border border-gray-300 blocl my-2  py-2 px-4 w-full rounded focus:online-none focus:border-teal' pattern="[0]{1}[0-9]{2}[0-9]{3}[0-9]{4}" placeholder='0820001111' minLength={10} maxLength={10} required/>
      
          <label htmlFor="address" className='comfortaa'>Address <span className="asteric text-red-600">&#42;</span></label>
          <input type="text" id='address' name='address' className='border border-gray-300 blocl my-2 py-2 px-4 w-full rounded focus:online-none focus:border-teal' placeholder='Street Address' required/>
          <input type="text" id='address' name='address' className='border border-gray-300 blocl my-2 py-2 px-4 w-full rounded focus:online-none focus:border-teal' placeholder='Street Address Line 2' required/>
          
          <div className='flex flex-wrap gap-2  '>
              <input type="text" id='address' name='address' className='border border-gray-300 blocl my-2 flex-grow py-2 px-4 min-w-[40%] rounded focus:online-none focus:border-teal' placeholder='City' required/>
      
              <input type="text" id='address' name='address' className='border border-gray-300 blocl my-2 flex-grow py-2 px-4 min-w-[40%] rounded focus:online-none focus:border-teal' placeholder='State / Province' required/>
          </div>
          <div className='flex flex-wrap gap-2 '>
            
              <input type="tel" id='address' name='streetAddress' className='border border-gray-300 blocl my-2 flex-grow py-2 px-4 min-w-[40%] rounded focus:online-none focus:border-teal' pattern="[0-9]{4}" minLength={4} maxLength={4}  placeholder='Postal / Zip Code' required/>
      
              <input type="text" id='address' name='streetAddress' className='border border-gray-300 blocl my-2 flex-grow py-2 px-4 min-w-[40%] rounded focus:online-none focus:border-teal' placeholder='Country' required/>
          </div>
        </div>
      </form>
  );
}

  export default PetOwnwer;
  