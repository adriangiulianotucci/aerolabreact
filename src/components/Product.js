import React, { useState, useEffect , useContext } from 'react';
import './Product.css'
import { UserContext } from '../context/userContext'
import api from '../utils/api'

function Product(props) { 
  const {user} = useContext(UserContext)
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
              {hovered && available && <ProductPrice product={props.product}></ProductPrice>}
              <div className='upperCard'>
                <img width="100%" src={props.product.img.url} alt="Card image cap" className='productImg'/>
                {!hovered && available && <img src={'/assets/icons/buy-blue.svg'} className='buyIcon'/>}    
                {!available && <PriceTag product={props.product}></PriceTag>}     
              </div>
              <div className='lowerCard'>
                <h2>{props.product.category}</h2>
                <h1>{props.product.name}</h1>
              </div>
            </div>
            ) 
}

function ProductPrice(props) {
  const {user , setUser} = useContext(UserContext)

  const redeemProduct = async function(props) {
    let prevUser = Object.assign({}, user);
    let response = await api.redeemProduct(props.product._id)
      if (response.status == 200) {
        prevUser.points -= props.product.cost
        setUser(prevUser)
      }
  }

    return (
          <div className='priceHover' onClick={()=> redeemProduct(props)}>
            <img src={'/assets/icons/buy-white.svg'} className='buyIcon'/>
            <div className='price'>
              <h1>{props.product.cost}</h1>
              <img src='/assets/icons/coin.svg'></img>
              <div className='redeemButton'>
                <h2>Redeem now</h2>
              </div>
            </div>
          </div>
        ) 
}

function PriceTag(props) {
  return (
    <div className='buyIcon priceTag'>You need {props.product.cost}<img src='/assets/icons/coin.svg'></img></div>
    ) 
}


export default Product