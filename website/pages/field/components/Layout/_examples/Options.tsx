import Option from './Option'

interface OptionsProps {
  id: string,
  toppings: string[]
  selected: Record<string, boolean>
  select: (topping: string) => void
}

const Options = ({
  id, toppings, selected, select
}: OptionsProps) =>
  <div className="options">
    { toppings.map(
      topping =>
        <Option
          key={topping}
          topping={topping}
          id={`${id}-${topping}`}
          selected={selected[topping] || false}
          select={() => select(topping)}
        />
    )}
  </div>

export default Options