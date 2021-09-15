import React, { FC } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { makeTestPage } from '@/main/factories/pages/home'

const Router: FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={makeTestPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
