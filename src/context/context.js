import React , {useState , useEffect} from 'react';
import api from '../utils/api'

export const UserContext = React.createContext();

export function UserProvider(props) {
    const [user, setUser] = useState([])

    useEffect(() => {
        async function req() {
          let user = await api.getUser()
          setUser(user)
        }
        req()
      },[]);

      return (
          <UserContext.Provider value={{user, setUser}}>
            {props.children}
          </UserContext.Provider>
      )

}

export default UserProvider