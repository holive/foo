export interface FetchFoodList {
  loadAll: (queryParams?: string) => Promise<FetchFoodList.Model[]>
}

export namespace FetchFoodList {
  export type Model = {
    id: number
    foodName: string
    calories: number
    weekDays: string[]
    foodType: string
  }
}
