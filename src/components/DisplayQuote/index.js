import React from 'react'
import * as quoteDataSet from './quotes.json'

const displayQuote = () => {
    const quotes = quoteDataSet.default
    const randomQuoteId = getRandomInt(quotes.length)
    return (
        <h3 className='quote-label'>
            {quotes[randomQuoteId]["body"]}
        </h3>
    )
}

const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max))
}

export default displayQuote
