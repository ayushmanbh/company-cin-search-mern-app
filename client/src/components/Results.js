import React from 'react'

const Results = ({ results, loading }) => {

  const saveCompany = async (name, cin, index) => {
    const savedCompany = await fetch('/companies/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, cin }),
    })
    if (savedCompany) {
      document.getElementById(index).disabled = true
    }
  }
  if (loading) {
    return <h3 className='text-primary'>Loading...</h3>
  }
  else {
    return (
      <>
        <ul className="list-group mb-3">
          {results.length !== 0 ? results.map((item, index) => {
            return <li key={index} className='list-group-item'>
              <div className="m-1 d-flex justify-content-between" >
                <div>
                  <h5 className='text-primary'>{item.name}</h5>
                  <h6 className='text-secondary'>{item.cin}</h6>
                </div>
                <button id={index} type='button' className='btn' style={{ backgroundColor: 'blueviolet', color: 'white' }} onClick={() => saveCompany(item.name, item.cin, index)}>Add Company</button>
              </div>
            </li>
          }) : <h4 className="font-italic text-danger">So empty here</h4>}
        </ul>
      </>
    )
  }
}

export default Results


