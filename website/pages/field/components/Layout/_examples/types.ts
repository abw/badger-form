import { FieldSpec } from '@/lib/index'
{/* START */}
// PRETEND: import { FieldSpec } from '@abw/badger-form'

export type ToppingExtraItems = {
  free: number
  price: string,
  toppings: string[]
}

export type ToppingField = FieldSpec & ToppingExtraItems

export type PizzaFields = {
  toppings: ToppingField
}
