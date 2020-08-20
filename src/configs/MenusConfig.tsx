import { HddTwoTone, CodeTwoTone, FundTwoTone, CrownTwoTone, PieChartTwoTone } from '@ant-design/icons'
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
        route: '/language/swift'
      },
      {
        key: 'typescript',
        title: 'JS/TS',
        icon: <CodeTwoTone />,
        route: '/language/typescript'
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
        route: '/layout'
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
        route: '/animation'
      }
    ]
  },
  {
    key: 'visualdata',
    title: '可视化数据',
    icon: <PieChartTwoTone />,
    menus: [
      {
        key: 'antdbasic',
        title: 'antd基础',
        icon: <CodeTwoTone />,
        route: '/antd/basic'
      }
    ]
  }
]

export default menus
