
import React, { useEffect, useState } from 'react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Card from './Card';
import axios from "axios";


function Freebook() {
  const [book,setBook]= useState([])
  useEffect(()=>{
    const getbook =async ()=>{
      try{  
        const res =await axios.get("https://bookstore-backend-oqui.onrender.com/book")
      const data =res.data.filter((data) => data.category === "free");
      console.log(data);

      setBook(data);
    }catch(error){
      console.log(error);
      } 
   }
   getbook();
},[])


var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
    <div  className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
   <div>
    <h1 className='font-semibold text-xl pb-2'>free offered course</h1>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dum
    Lorem </p> 
    </div>
    
    <div>
    <Slider {...settings}>
       {book.map((item)=>(
        <Card item={item} key={item.id} />
       ))}
      </Slider>
    </div>
    </div>
    </>
  )
}

export default Freebook