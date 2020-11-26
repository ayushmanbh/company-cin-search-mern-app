import React, { useState } from 'react'
import Results from './Results'

const Home = () => {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)

  const handleClick = async (e) => {
    e.preventDefault();
    setLoading(true)
    const response = await fetch('/companies/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    })

    const data = await response.json()
    setResults(data.list)
    setLoading(false)
  }

  return (
    <div className="container mt-4">
      <div className="input-group my-3">
        <input type="text" className="form-control" placeholder="Search your favorite company" aria-label="Recipient's username" aria-describedby="button-addon2" value={query} onChange={(e) => setQuery(e.target.value)} />
        <div className="input-group-append">
          <button className="btn" style={{ backgroundColor: 'blueViolet' }} type="button" id="button-addon2" onClick={handleClick}><i className='fas fa-search' style={{ color: 'white' }}></i></button>
        </div>
      </div>
      <Results results={results} loading={loading} />
    </div>
  )
}

export default Home
