import React, { FC } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { makeHomePage } from '@/main/factories/pages/home'
import { makeFetchFoodListFactory } from '@/main/factories/usecases'
import { AppContext } from '@/presentation/contexts'

const Router: FC = () => {
  return (
    <AppContext.Provider
      value={{
        fetchFoodList: makeFetchFoodListFactory()
      }}
    >
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={makeHomePage} />
        </Switch>
      </BrowserRouter>
    </AppContext.Provider>
  )
}

export default Router
