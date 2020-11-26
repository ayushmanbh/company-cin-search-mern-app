const router = require('express').Router()
const companies = require('../../companies.js')
const Company = require('../models/company')

router.get('/list', async (req, res) => {
  try {
    const companyList = await Company.find()
    if (companyList.length === 0) {
      return res.status(200).json({
        ok: false,
        message: 'No data'
      })
    }
    res.status(200).json({
      ok: true,
      list: companyList
    })
  } catch (error) {
    res.status(500).json({
      ok: false,
      message: error.message
    })
  }
})

router.post('/search', (req, res) => {
  try {
    const { query } = req.body
    if (!query) {
      return res.status(400).json({
        ok: false,
        message: 'Please provide the required values.'
      })
    }
    const results = companies.filter(company => company.name.toLowerCase().includes(query.toLowerCase()))
    if (results.length === 0) {
      return res.status(200).json({
        ok: false,
        message: 'No company matching this query.'
      })
    }
    res.status(200).json({
      ok: true,
      list: results
    })
  } catch (error) {
    res.status(500).json({
      ok: false,
      message: error.message
    })
  }
})

router.post('/add', async (req, res) => {
  //add company
  try {
    const { name, cin } = req.body
    if (!name || !cin) {
      return res.status(400).json({
        ok: false,
        message: 'Please provide the required values.'
      })
    }
    const newCompany = new Company({
      name,
      cin
    })
    const savedCompany = await newCompany.save()
    res.status(201).json({
      ok: true,
      message: `${savedCompany.name} added to database`
    })
  } catch (error) {
    res.status(500).json({
      ok: false,
      message: error.message
    })
  }
})

module.exports = router