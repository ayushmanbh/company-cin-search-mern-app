import React, { useState, useEffect } from 'react'

const CompanyList = () => {
  const [companyList, setCompanyList] = useState([])

  const fetchCompanyList = async () => {
    const data = await fetch('/companies/list')
    const response = await data.json()
    if (!response.ok) {
      throw new Error(response.message)
    }
    setCompanyList(response.list)
  }

  useEffect(() => {
    fetchCompanyList()
  }, [])

  return (
    <div className='container mt-4 text-center'>
      <div className="row">
        <div className="col font-weight-bold text-primary border">Company Name</div>
        <div className="col font-weight-bold text-primary border">CIN No.</div>
      </div>
      {
        companyList.length !== 0 ? companyList.map(company => {
          return (
            <>
              <div className="row">
                <div className="col text-light border">{company.name}</div>
                <div className="col text-light border">{company.cin}</div>
              </div>
            </>
          )
        }) : <h3 className='text-danger'>Empty list</h3>
      }
    </div >
  )
}

export default CompanyList
