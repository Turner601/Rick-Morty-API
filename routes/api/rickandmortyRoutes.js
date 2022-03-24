const express = require('express')
const router = express.Router()
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args))

// localhost:3000
router.get('/', (req, res) => {
    const URL = 'https://api.sampleapis.com/rickandmorty/characters'

    fetch(URL)
        .then(res => res.json())
        .then(data => {
            res.render('pages/home', {
                title: 'Rick And Morty',
                name: 'Rick And Morty',
                data
            })
        })
})

// Characters
// localhost:3000/characters
router.get('/characters', (req, res) => {
    const URL = 'https://api.sampleapis.com/rickandmorty/characters'

    fetch(URL)
        .then(res => res.json())
        .then(data => {
                res.render('pages/characters', {
                    title: 'Rick And Morty Characters',
                    name: 'Character List',
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
                title: 'Rick And Morty Characters',
                name: 'Rick And Morty Characters',
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

module.exports = router