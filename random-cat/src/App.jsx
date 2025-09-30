import './App.css'
import {useState} from 'react'

function App() {
  const [cat,setCat] = useState('')
  const [isLoading,setIsLoading] = useState(false)
  
  const catUrl = 'https://api.thecatapi.com/v1/images/search'

  async function getCat(){
    try{
      setIsLoading(true);
      const response = await fetch(catUrl);
      let data = await response.json()
      setCat(data[0].url);

    }catch(error){
      console.error('Error fetching cat:', error)
    }finally{
            setIsLoading(false)
    }
  }
  
  return (
    <>
    <button onClick={getCat}
      disabled={isLoading}
      >
        {isLoading ? 'Loading...' : 'Get cat of the day'}
        </button>  
    <p>
    {cat && <img  width='300px' height='300px' src={cat} alt="cat of the day" />}
    </p>
    </>
  )
}

export default App
