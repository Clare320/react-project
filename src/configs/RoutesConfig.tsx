import React from 'react'

import HomePage from 'pages/home'
import SwiftPage from 'pages/language/swift'
import TypeScriptPage from 'pages/language/typescript'

interface LJRoute {
  name: string,
  path: string,
  component: React.ReactNode
  routes?: LJRoute[]
}

const routes: LJRoute[] = [
  {
    name: 'Swift',
    path: '/language/swift',
    component: <SwiftPage />,
  },
  {
    name: 'TypeScript',
    path: '/language/typescript',
    component: <TypeScriptPage />,
  },
  {
    name: 'Home',
    path: '/',
    component: <HomePage />
  }
]

export default routes
