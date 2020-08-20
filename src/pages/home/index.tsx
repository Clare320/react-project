import React, { useEffect, useState } from 'react'
import axios from 'axios'
interface Props {

}

interface News {
  objectID: string,
  url: string,
  title: string
}

const HomePage = (props: Props) => {
  const [data, setData] = useState<{ hits: News[] }>({ hits: [] })
  const isManual = true
  const [reqCount, setReqCount] = useState(0)

  useEffect(() => {
    if (isManual && reqCount === 0) {
      return
    }

    console.log('excute side effect ', reqCount)
    async function fetchData() {
      console.log('excute fetch data')
      const result = await axios(
        'https://hn.algolia.com/api/v1/search?query=redux'
      )
      setData(result.data)
    }
    fetchData()
  }, [reqCount, isManual])

  const handleClick = () => {
    setReqCount(count => count + 1)
  }

  const handleClearClick = () => {
    setData({ hits: [] })
  }

  return (
    <>
      <button onClick={handleClick}>Run</button>
      <button onClick={handleClearClick}>Clear</button>
      <ul>
        {
          data.hits.map(item => (
            <li key={item.objectID}>
              <a href={item.url}>{item.title}</a>
            </li>
          ))
        }
      </ul>
    </>
  )
}

export default HomePage
