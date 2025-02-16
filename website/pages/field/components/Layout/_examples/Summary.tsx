interface SummaryProps {
  value: string[]
  free: number
  price: string
}

const Summary = ({
  value, free, price
}: SummaryProps) =>
  <div className="summary">
    { value.map(
      (topping, n) =>
        <div className="selected" key={topping}>
          <div>
            {topping}
          </div>
          <div>
            {n < free ? 'Free' : price}
          </div>
        </div>
    )}
  </div>

export default Summary