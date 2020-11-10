import React , {useState , useEffect} from 'react';
import api from '../utils/api'

export const UserContext = React.createContext();

export function UserProvider(props) {
    const [user, setUser] = useState([])
    
    const [order, setOrder] = useState(
      {
        order : 'recent' ,
        page: 0 ,
        results: 0,
        totalPages: 0
      }
    )

    useEffect(() => {
        async function req() {
          let user = await api.getUser()
          setUser(user)
        }
        req()
      },[]);

      return (
          <UserContext.Provider value={{user, setUser , order, setOrder}}>
            {props.children}
          </UserContext.Provider>
      )

}

