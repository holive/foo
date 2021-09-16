import { FetchFoodList } from './food-list'

export interface PostFoodItem {
  postItem: (item: PostFoodItem.Model) => Promise<FetchFoodList.Model[]>
}

export namespace PostFoodItem {
  export type Model = {
    foodName: string
    calories: number
    weekDays: string[]
    foodType: string
  }
}
