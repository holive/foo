import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { makeHomePage } from '@/main/factories/pages/home'
import { makeInitialState } from '@/main/factories/presentation/contexts'
import { AppContext } from '@/presentation/contexts'

const Router: React.FC = () => {
  return (
    <AppContext.Provider value={makeInitialState()}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={makeHomePage} />
        </Switch>
      </BrowserRouter>
    </AppContext.Provider>
  )
}

export default Router
