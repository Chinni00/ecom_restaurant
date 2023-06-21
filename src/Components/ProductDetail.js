import React from 'react'
import { useParams } from 'react-router-dom'
import Navbar from './Navbar';



const ProductDetail = () => {



    const {productName} = useParams()
    const  productsArr = [
      {
        id:1,
        title: "Colors",
        price: 100,
        quantity:1,
        imageUrl:
          "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      },
  
      {
        id:2,
        title: "Black and white Colors",
        price: 50,
        quantity:1,
        imageUrl:
          "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      },
  
      {
        id:3,
        title: "Yellow and Black Colors",
        price: 70,
        quantity:1,
        imageUrl:
          "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      },
  
      {
        id:4,
        title: "Blue Color",
        price: 100,
        quantity:1,
        imageUrl:
          "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
      },
    ];

    const filteredProduct = productsArr.filter((product)=>
    product.title==productName
    )
    console.log(filteredProduct)
  return (
     <>
     <Navbar />
    <div className='mt-5 pt-5'>
      <center>
        <h1 className='my-2'>Product Details</h1>
      <div className='card'>
        <h2 className='card-title'>{filteredProduct[0].title}</h2>
        <div className='card-img-top'>
           <img src={filteredProduct[0].imageUrl} alt=''/>
        </div>
        <h5 className='mt-2 card-text'>Price:${filteredProduct[0].price}</h5>
      </div></center>
    </div></>
  )
}

export default ProductDetail