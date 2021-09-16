export interface DeleteFoodItem {
  removeItem: (foodId: string) => Promise<void>
}
