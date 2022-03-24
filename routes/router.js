const express = require('express')
const router = express.Router()
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args))

// Static Files
router.use(express.static('public'))

const rickandmortyRoutes = require('./api/rickandmortyRoutes')

router.use('/rickandmorty', rickandmortyRoutes)

// Characters
// localhost:3000/characters
router.get('/characters', (req, res) => {
    const URL = 'https://api.sampleapis.com/rickandmorty/characters'

    fetch(URL)
        .then(res => res.json())
        .then(data => {
                res.render('pages/characters', {
                    title: 'Rick And Morty Characters',
                    name: 'Rick And Morty Characters',
                    data
                })
        })
})

// Single Characters
// localhost:3000/characters/:id
router.get('/characters/:id', (req, res) => {
    const id = req.params.id
    const URL = `https://api.sampleapis.com/rickandmorty/characters/${id}`
    fetch(URL)
        .then(res => res.json())
        .then(data => {
            res.render('pages/single-characters', {
                title: 'Single Characters',
                name: 'Single Characters',
                data
            })
        })
})

// Episodes
// localhost:3000/episodes
router.get('/episodes', (req, res) => {
    const URL = 'https://api.sampleapis.com/rickandmorty/episodes'

    fetch(URL)
        .then(res => res.json())
        .then(data => {
            res.render('pages/episodes', {
                title: 'Rick And Morty Episodes',
                name: 'Rick And Morty Episodes',
                data
            })
        })
})

// Locations
// localhost:3000/locations
router.get('/locations', (req, res) => {
    const URL = 'https://api.sampleapis.com/rickandmorty/locations'
    fetch(URL)
        .then(res => res.json())
        .then(data => {
            res.render('pages/locations', {
                title: 'Rick And Morty Locations',
                name: 'Rick And Morty Locations',
                data
            })
        })
})

// Home Route
router.get('/', (req, res) => {
    const URL = 'https://api.sampleapis.com/rickandmorty/characters'
    fetch(URL)
        .then(res => res.json())
        .then(data => {
            res.render('pages/home', {
                title: 'My Rick And Morty Site',
                name: 'Rick And Morty',
                data
            })
        })
})

// Error Route
router.get('*', (req, res) => {
    if (req.url == '/favicon.ico/') {
        res.end()
    } else {
        res.render('pages/404', {
            title: '404 Error - This world does not exist Morty',
            name: '404 Error - This page does not exist Morty'
        })
    }
})

module.exports = router