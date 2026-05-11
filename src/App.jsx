import { useState } from 'react'
import cars from './cars.json'
import CarCard from './Components/CarCard'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '24px',
      padding: '2rem',
      justifyContent: 'center',
      background: '#f4f4f2',
      minHeight: '100vh'
    }}>
      {cars.map((car) => (
        <CarCard key={car.id} car={car} />
      ))}
    </div>
  )
}

export default App
