interface OptionProps {
  id: string
  topping: string
  selected: boolean
  select: () => void
}

const Option = ({
  id, topping, selected, select
}: OptionProps) =>
  <div>
    <label htmlFor={id} className="checkbox">
      <input
        type="checkbox"
        checked={selected}
        onChange={select}
        id={id}
      />
      {topping}
    </label>
  </div>

export default Option