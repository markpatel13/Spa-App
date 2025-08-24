import React, { useEffect, useState } from 'react'
import { cities } from '../assets/assets'
import { useParams } from 'react-router-dom'
import { assets, facilityIcons, roomsDummyData } from '../assets/assets'
import StarRating from '../components/StarRating'

const RoomDetails = () => {
    const {id} = useParams()
    const [room,setRoom] = useState(null)
    const [mainImage,setMainImage] = useState(null)

    useEffect(()=>{
      const room=roomsDummyData.find(room=>room._id === id)
      room && setRoom(room)
      room && setMainImage(room.images[0])
    },[])
    
  return room &&(
    <div className='py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32'>
        <div className='flex flex-col md:flex-row items-start md:items-center gap-2'>
          <h1 className='text-3xl md:text-4xl font-playfair'>{room.hotel.name}<span className='font-inter text-sm'>({room.roomType})</span></h1>
          <p className='text-xs font-inter py-1.5 px-3 text-white bg-orange-500 rounded-full'>20% OFF</p>
        </div>

        {/* Room Ratings */}
        <div className='flex items-center gap-1 mt-2'>
          <StarRating/>
          <p className='ml-2'>200+ reviews</p>
        </div>

        {/* Room Address */}
        <div className='flex items-center gap-1 text-gray-500 mt-2'> 
          <img src={assets.locationIcon} alt="location-icon" />
          <span>{room.hotel.address}</span>
        </div>

        {/* Room Images */}
        <div className='flex flex-col lg:flex-row mt-6 gap-6'>
          <div className='lg:w-1/2 w-full'>
            <img src={mainImage} alt="Room Image" className='w-full rounded-xl shadow-lg object-cover' />
          </div>
          <div className='grid grid-cols-2 gap-4 lg:w-1/2 w-full'>
            {room?.images.length > 1 && room.images.map((image,index)=>(
              <img  onClick={()=>setMainImage(image)} key={index} src={image} alt="Room Image" className={`w-full rounded-xl shadow-md object-cover cursor-pointer ${mainImage === image && 'outline-3 outline-orange-500'}`} />
            ))}
          </div>
        </div>


        {/* Room Highlights */}
        <div className='flex flex-col md:flex-row md:justify-between mt-10'>
            <div className='flex flex-col'>
              <h1 className='text-3xl md:text-4xl font-playfair'>Unwind your body, refresh your mind with our Therapies</h1>
              <div className='flex flex-wrap items-center mt-3 mb-6 gap-4'>
                {room.amenities.map((item,index)=>(
                  <div key={index} className='flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100'>
                    {/* <img src={facilityIcons[item]} alt={item} className='w-5 h-5' /> */}
                    <p className='text-xs'>{item}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* Room Price */}
            <p className='text-2xl font-medium'>${room.pricePerNight}/night</p>
        </div>

        {/* check In Out */}
        <div>
                <form className='bg-white text-gray-500 rounded-lg px-6 py-4 mt-8 flex flex-col md:flex-row max-md:items-start gap-4 max-md:mx-auto justify-center'>
                
                            {/* <div>
                                <div className='flex items-center gap-2'>
                                    <img src={assets.calenderIcon} alt="" className='h-4'/>
                                    <label htmlFor="destinationInput">Destination</label>
                                </div>
                                <input list='destinations' id="destinationInput" type="text" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" placeholder="Type here" required />
                                <datalist id='destinations'>
                                    {cities.map((city,index)=>(
                                        <option value={city} key={index}/>
                                    ))}
                                </datalist>
                            </div> */}
                
                            <div>
                                <div className='flex items-center gap-2'>
                                     <img src={assets.calenderIcon} alt="" className='h-4'/>
                                    <label htmlFor="checkIn">Check in</label>
                                </div>
                                <input id="checkIn" type="date" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" />
                            </div>
                
                            <div>
                                <div className='flex items-center gap-2'>
                                     <img src={assets.calenderIcon} alt="" className='h-4'/>
                                    <label htmlFor="checkOut">Check out</label>
                                </div>
                                <input id="checkOut" type="date" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" />
                            </div>
                
                            <div className='flex md:flex-col max-md:gap-2 max-md:items-center'>
                                <label htmlFor="guests">Customers</label>
                                <input min={1} max={4} id="guests" type="number" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none  max-w-16" placeholder="0" />
                            </div>
                
                            <button className='flex items-center justify-center gap-1 rounded-md bg-blue-500 py-3 px-4 text-black my-auto cursor-pointer max-md:w-full max-md:py-1' >
                                 {/* <img src={assets.searchIcon} alt="" className='h-4'/> */}
                                <span>Book Now</span>
                            </button>
                        </form>
        </div>
    </div>
  )
}

export default RoomDetails