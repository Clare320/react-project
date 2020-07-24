import React from 'react'
import { useRequest } from 'ahooks'
import ListData from '../mock/classlist.json'

interface Props {

}

interface AppClass {
  ClassID: string,
  ParentID: string,
  ClassName: string,
  ImageUrl: string,
  OrderIndex: number,
  SEOCode: string,
  IsClassNameShow: false,
  IsImageShow: false,
  ChildAppClassDTO?: AppClass[]
}

interface ClassListResp {
  Data: AppClass[],
  State: boolean,
  Msg: string,
  ServerIp: string
}

interface Story {
  image_hue: string,
  title: string,
  hint: string,
  url: string,
  ga_prefix: string,
  images?: string[],
  type: number,
  id: number,
  image?: string
}

interface NewsResp {
  date: string,
  stories: Story[],
  top_stories: Story[]
}

interface Channel {
  name_en: string,
  seg_id: number,
  abbr_en: string,
  name: string,
  channel_id: number
}

interface ChannelResp {
  channels: Channel[]
}

const getClassListPromise: () => Promise<ClassListResp> = () => new Promise((resolve) => {
  const data = ListData as ClassListResp
  console.log('request---->', data)
  resolve(data)
})

const GoodsCategoryList = (props: Props) => {
  //https://kdapi.keede.com/api/Goods/GetAllAppClassList 
  // http://news-at.zhihu.com/api/3/stories/latest
  // https://api.github.com/repos/zeit/next.js
  // https://www.douban.com/j/app/radio/channels
  const { data, error, loading } = useRequest(getClassListPromise)

  if (error) {
    return <div>加载失败</div>
  }

  if (loading) {
    return <div>加载中...</div>
  }

  const categories = data as ClassListResp
  const lists = categories.Data.map((item, index) => item.ClassName)

  return (
    <div>
      <ul>
        {
          lists.map((item, index) => (
            <li key={'class' + index}>{item}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default GoodsCategoryList
