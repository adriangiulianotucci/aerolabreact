import React, { useState, useEffect , useContext } from 'react';
import './Product.css'
import { UserContext } from '../context/context'

function ProductPrice(props) {
    return (
          <div className='priceHover'>
            <img src={'/assets/icons/buy-white.svg'} className='buyIcon'/>
            <div className='price'>
              <h1>{props.cost}</h1>
              <img src='/assets/icons/coin.svg'></img>
              <div className='redeemButton'>
                <h2>Redeem now</h2>
              </div>
            </div>
          </div>
        ) 
}

function PriceWarning(props) {
  return (
    <div className='buyIcon priceWarning'>You need {props.cost}<img src='/assets/icons/coin.svg'></img></div>
    ) 
}

function Product(props) { 
  const user = useContext(UserContext)
  const [available, setAvailable] = useState(false)
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    if (!user) {
      setAvailable(false)
    }
    if (user.points >= props.product.cost) {
      setAvailable(true)
    }
  },[user]);
  
    return (

          <div className='product' onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
            {hovered && available && <ProductPrice cost={props.product.cost}></ProductPrice>}
            <div className='upperCard'>
              <img width="100%" src={props.product.img.url} alt="Card image cap" className='productImg'/>
              {!hovered && available && <img src={'/assets/icons/buy-blue.svg'} className='buyIcon'/>}    
              {!available && <PriceWarning cost={props.product.cost}></PriceWarning>}     
            </div>
            <div className='lowerCard'>
              <h2>{props.product.category}</h2>
              <h1>{props.product.name}</h1>
            </div>
          </div>

          
        ) 
}

  export default Product