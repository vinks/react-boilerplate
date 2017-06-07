'use strict'

const QUOTES = [
  'If you want to keep a secret, you must also hide it from yourself.']

const getQuote = (req, res) => {
  res.json({
    quote: QUOTES[Math.floor(Math.random() * QUOTES.length)]
  })
}

module.exports = {
  getQuote
}
