import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { MakeHomePage } from '@/main/factories/pages/home'
import { MakeInitialState } from '@/main/factories/presentation/contexts'
import { AppContext } from '@/presentation/contexts'

const Router: React.FC = () => {
  return (
    <AppContext.Provider value={MakeInitialState()}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={MakeHomePage} />
        </Switch>
      </BrowserRouter>
    </AppContext.Provider>
  )
}

export default Router
