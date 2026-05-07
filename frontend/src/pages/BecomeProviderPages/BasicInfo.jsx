import React from 'react'
import Input from '../../components/common/Input'
const BasicInfo = () => {
  return (
    <div>
      <h1 className='text-xl font-semibold text-text mt-2 mb-5'>Basic Information</h1>
      <div>
        <div className='flex flex-col md:flex-row md:gap-5'>
          <Input label='Provider Name' id='providerName' placeholder='Enter your name' type='text' required/>
          <Input label='Phone Number' id='phoneName' placeholder='Enter phone number' type='tel' required/>
        </div>


        <div className='flex flex-col md:flex-row md:gap-5'>
          <Input label='Experience (Years)' id='experience' placeholder='e.g.3' type='number' required/>
          <Input label='Price (Per Hour)' id='price' placeholder='e.g. 500' type='number' required/>
        </div>



       <div className='flex flex-col md:flex-row md:gap-5 items-center'>
         <div className='flex flex-col w-full mb-3 md:mb-0'>
          <label htmlFor="city"  className="block mb-2 font-medium text-lg md:text-sm md:text-text">City <span className="text-red-500">*</span></label>
          <select name="city" id="city" className='border px-3 py-2 text-lg rounded-md w-full focus:ring focus:ring-blue-500 focus:outline-none'>
            <option value="sultanganj">Sultanganj</option>
            <option value="bhagalpur">Bhagalpur</option>
            <option value="mungar">Mungar</option>
          </select>
        </div>



         <div className='flex flex-col w-full'>
          <label htmlFor="serviceCategory"  className="block mb-2 font-medium text-lg md:text-sm md:text-text">Service Category <span className="text-red-500">*</span></label>
          <select name="serviceCategory" id="serviceCategory" className='border px-3 py-2 text-lg rounded-md  focus:ring focus:ring-blue-500 focus:outline-none'>
            <option value="mistry">Mistry</option>
            <option value="painter">Painter</option>
            <option value="mungar">mungar</option>
          </select>
        </div>
       </div>
       <div className='mt-3'>
         <Input label='Your Location' id='location' placeholder='Select your location on map' type='text' required/>
       </div>

      </div>
    </div>
  )
}

export default BasicInfo