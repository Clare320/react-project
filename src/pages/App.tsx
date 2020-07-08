import React from 'react'
import './App.css'
import Hello from './Hello'
import MovedCube from './MovedCube'
import AntdExample from './AntdExample'
import GoodsCategoryList from './GoodsCategoryList'

function App() {
  return (
    <div className='App'>
      <Hello name='xiaoming' />
      <MovedCube />
      <AntdExample />
      <GoodsCategoryList />
    </div>
  )
}

export default App
