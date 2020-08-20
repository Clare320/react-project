import React from 'react'
import { Layout, Menu } from 'antd'
import { Switch, Route, useHistory } from 'react-router-dom'
import styles from './App.less'
import menusConfig from 'configs/MenusConfig'
import routesConfig from 'configs/RoutesConfig'
import { ClickParam } from 'antd/lib/menu'
const { Header, Content, Sider } = Layout
const { SubMenu } = Menu

function App() {
  const history = useHistory()

  const handleMenuClick = ({ item, key, keyPath, domEvent }: ClickParam) => {
    console.log('menu is ', key, keyPath)
    history.push(key)
  }

  const handleSubMenuTitleClick = () => {

  }

  return (
    <Layout>
      <Header className={styles.header}>
        <div className={styles.title}>Header</div>
      </Header>
      <Layout>
        <Sider theme='light'>
          <Menu mode='inline' onClick={handleMenuClick}>
            {
              menusConfig.map((item) => {
                const { key, title, icon, menus } = item
                return (
                  <SubMenu key={key} title={title} icon={icon} onTitleClick={handleSubMenuTitleClick} >
                    {
                      menus?.map((subItem) => {
                        const { key: subKey, title: subTitle, icon: subIcon, route } = subItem
                        return (
                          <Menu.Item key={route}>
                            {subIcon}
                            {subTitle}
                          </Menu.Item>
                        )
                      })
                    }
                  </SubMenu>
                )
              })
            }
          </Menu>
        </Sider>
        <Content className={styles.content}>
          <div className={styles.container}>
            <Switch>
              {
                routesConfig.map((item, index) => {
                  const { path, component } = item
                  return <Route key={'route' + index} path={path} render={() => component} exact={true} />
                })
              }
            </Switch>
          </div>
        </Content>
      </Layout>
    </Layout>
  )
}

export default App
