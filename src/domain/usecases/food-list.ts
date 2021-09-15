export interface FetchFoodList {
  loadAll: () => Promise<FetchFoodList.Model[]>
}

export namespace FetchFoodList {
  export type Model = {
    foodName: string
    calories: number
    weekDays: string[]
    foodType: string
  }
}
