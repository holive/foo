import React, { useContext, useEffect } from 'react'

import { AppContext } from '@/presentation/contexts'
import Home from '@/presentation/pages/home'

export const makeHomePage: React.FC = () => {
  const { setPostList, fetchFoodList } = useContext(AppContext)

  useEffect(() => {
    fetchFoodList
      .loadAll()
      .then((posts) => setPostList(posts))
      .catch((error) => console.log(error))
  }, [])

  return <Home />
}
