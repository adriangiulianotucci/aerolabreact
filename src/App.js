import React , { useState , useEffect } from 'react';
import './App.css';
import ProductGrid from './components/ProductGrid';
import NavBar from './components/NavBar'
import Header from './components/Header'

const url = "https://coding-challenge-api.aerolab.co/user/me"
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWZhMzk5OTc1NzJiODAwNmRlNzUzMTUiLCJpYXQiOjE1OTM0NTcwNDl9.A94xfvXPzaSLyGxl1NIQ7hxl3WiER2y3EDxXabxOOFg"

const request = { method: 'GET',
               headers: {
                "Content-Type":"application/json",
                "Accept":"application/json",
                "Authorization":"Bearer " + token
              },
               mode: 'cors',
               cache: 'default' };


function App() {

  const [user, setUser] = useState([])

  useEffect(() => {
    async function req() {
      const response = await fetch(url,request)
      const json = await response.json()
      setUser(json)
    }
    req()
  },[]);

  return (
    <div className='body'>
        <Header user={user}></Header>
        <img width="100%" src={'/assets/header-x1.png'} alt="Card image cap" />
        <NavBar></NavBar>
        <ProductGrid user={user}></ProductGrid>
    </div>
  );
}

export default App;
