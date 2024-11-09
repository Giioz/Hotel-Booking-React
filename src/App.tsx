import { useEffect, useState } from 'react'
import './App.css'
import { Header } from './layouts/Header'
import { getAllRoom } from './services/apiService';

function App() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
   const getRooms = async () => {
    try {
      const res = await getAllRoom();
      setRooms(res);
    } catch(err){
      return err;
    }
   }
   
   getRooms()
  }, [])

 
  return (
    <>
      <Header />
   
    </>
  )
}

export default App
