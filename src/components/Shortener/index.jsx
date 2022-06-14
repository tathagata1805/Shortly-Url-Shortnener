/* eslint-disable camelcase */
import React, { FormEvent, useState } from 'react'
import { Container } from '../../styles/components/shortener.js'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import ReactLoading from 'react-loading'

const Shortener = () => {
  const [url, setUrl] = useState('')
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()

  const shorten = (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      axios
        .post(`https://api.shrtco.de/v2/shorten?url=${url}`)
        .then(response => {
          console.log(response.data.result.short_link)
          const payload = {
            original: response.data.result.original_link,
            short: response.data.result.short_link
          }
          dispatch({ type: 'ADD_LINK', payload: payload })
          setLoading(false)
          setUrl('')
        })
    } catch (err) {
      console.log(err)
      setLoading(false)
    }
  }
  return (
    <Container>
      <form onSubmit={shorten}>
        <input
          type="text"
          placeholder="Shorten a link here..."
          value={url}
          title="user input to shorten links"
          name="shorten a link here"
          onChange={e => setUrl(e.target.value)}
        />
        <button type="submit" disabled={loading}>
          {loading ? (
            <ReactLoading
              type="spinningBubbles"
              color="white"
              height={20}
              width={20}
            />
          ) : (
            'Shorten It!'
          )}
        </button>
      </form>
    </Container>
  )
}

export default Shortener
