import React , {useState , useEffect} from 'react';

export const UserContext = React.createContext();

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

export function UserProvider(props) {
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
          <UserContext.Provider value={user}>
            {props.children}
          </UserContext.Provider>
      )

}