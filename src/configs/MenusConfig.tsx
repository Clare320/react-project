import { HddTwoTone, CodeTwoTone, FundTwoTone, CrownTwoTone } from '@ant-design/icons'
import React, { ReactNode } from 'react'

interface LJMenu {
  key: string,
  title: string,
  icon: ReactNode,
  menus?: LJMenu[],
  route?: string
}

/**
   * {
      key: '',
      title: '',
      icon: '',
      menus: [
        {
          key: '',
          title: '',
          icon: '',
          route: ''
        }
      ]
    }
   */
const menus: LJMenu[] = [
  {
    key: 'language',
    title: '语言',
    icon: <HddTwoTone />,
    menus: [
      {
        key: 'swift',
        title: 'Swift',
        icon: <CodeTwoTone />,
        route: ''
      },
      {
        key: 'typescript',
        title: 'JS/TS',
        icon: <CodeTwoTone />,
        route: ''
      }
    ]
  },
  {
    key: 'structure',
    title: '架构',
    icon: <FundTwoTone />,
    menus: [
      {
        key: 'layout',
        title: '布局',
        icon: <CodeTwoTone />,
        route: ''
      }
    ]
  },
  {
    key: 'experience',
    title: '体验',
    icon: <CrownTwoTone />,
    menus: [
      {
        key: 'animation',
        title: '动画',
        icon: <CodeTwoTone />,
        route: ''
      }
    ]
  }
]

export default menus
