import faker from 'faker'

import * as RemoteLoadFoodList from '@/data/usecases'

export const mockFetchFoodDataModel = (): RemoteLoadFoodList.Model => ({
  foodName: faker.random.words(),
  calories: faker.datatype.number(),
  weekDays: [faker.random.words()],
  foodType: faker.random.words()
})

export const mockFetchFoodDataModelList = (): RemoteLoadFoodList.Model[] => [
  mockFetchFoodDataModel(),
  mockFetchFoodDataModel(),
  mockFetchFoodDataModel()
]
