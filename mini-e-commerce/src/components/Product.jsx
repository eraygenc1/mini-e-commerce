import React from 'react'

function Product({product}) {
    const {id, price, image, title, description} = product;

  return (
    <div className='roww'>
    <div className='card'>
       
      <img className='image' src={product.image} alt={title}/>
      <div>
        <p style={{minHeight:"70px"}}>{title}</p>
        <h3>{price} $</h3>
      </div>
      <div style={{justifyContent:"start", display:"flex", alignItems:"start"}}>
        <button className='buton'>
          İNCELE
        </button>
        
      </div>
      
    </div>
    </div>
  )
}

export default Product
