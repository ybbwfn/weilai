import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { HashRouter  as Router, Route, Switch } from 'react-router-dom'
// import { BrowserRouter  as Router, Route, Switch } from 'react-router-dom'
import store from '@/store'
import server from '@/until/server.js'
import '@/assets/css/main.less'
import '@/assets/css/page.less'
import MainLayout from '@/layout/MainLayout'
import { mainRouter, otherRouter } from '@/router'
import '@/mock/shopList'


window.$axios = server;

function AppRouter() {
  return (
    <Router>
        <Switch>
          { otherRouter.map(item => <Route exact path={item.path}  component={item.component} key={item.path}/>) }
          <MainLayout>
            { mainRouter.map(item => <Route exact path={item.path}  component={item.component} key={item.path}/>) }
          </MainLayout>
        </Switch>
    </Router>

  );
}
ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>
  , document.getElementById("root"))