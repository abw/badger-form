type SelectedToppings = Record<string, boolean>

// convert the toppings array to an object
export const selectedToppings = (value: string[] = []) =>
  value.reduce(
    (selected, option) => {
      selected[option] = true
      return selected
    },
    { } as SelectedToppings
  )

// select (or unselect) a topping
export const toppingSelector = (
  selected: SelectedToppings,
  onChange: (selected: string[]) => void
) =>
  (topping: string) => {
    // toggle the selection
    selected[topping] = ! selected[topping]
    // update the field value
    onChange(
      // extract the names (keys) of all selected toppings
      Object.entries(selected)
        .filter( entry => entry[1] )  // filter by value
        .map( entry => entry[0] )     // return the key
    )
  }