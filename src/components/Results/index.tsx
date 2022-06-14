import React, { useRef, useState } from 'react'
import { RootStateOrAny, useSelector } from 'react-redux'
import { Container, Card } from '../../styles/components/results'
import Shortener from '../Shortener'

interface Link {
  original: string
  short: string
}

const Results = () => {
  const list: Link[] = useSelector((state: RootStateOrAny) => state.list)
  const shortLink = useRef([])
  const [indexSelected, setIndexSelected] = useState<number>()

  const copyToClipboard = (idx: number) => {
    shortLink.current[idx].select()
    document.execCommand('copy')
    setIndexSelected(idx)
  }

  return (
    <Container>
      <Shortener />
      {list.map((link, idx) => (
        <Card key={idx}>
          <div className="links">
            <p className="largeLink">{link.original}</p>
            <hr />
            <input
              readOnly
              className="shortLink"
              title={link.short}
              ref={el => (shortLink.current[idx] = el)}
              value={link.short}
            ></input>
          </div>
          <button
            className={indexSelected === idx ? 'copy active' : 'copy'}
            onClick={() => copyToClipboard(idx)}
          >
            {indexSelected === idx ? 'Copied!' : 'Copy'}
          </button>
        </Card>
      ))}
    </Container>
  )
}

export default Results
