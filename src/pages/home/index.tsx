import React, { useEffect, useState, ChangeEvent } from 'react'
import { Button } from 'antd'
import axios from 'axios'
import ReactMarkdown from 'react-markdown'


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

  const handleFileInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    const reader = new FileReader()
    reader.onload = (e: ProgressEvent<FileReader>) => {
      const { result } = e.target as FileReader
      console.log('file is ', result)
    }
    reader.readAsText(files![0])
  }

  return (
    <>
      <a onClick={() => { }}>收藏</a>
      <br />
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
      <input type='file' onChange={handleFileInputChange} />
    </>
  )
}

export default HomePage

/**
 * 数据 -> Excel
 * Excel -> 数据
 */