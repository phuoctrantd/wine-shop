import React from 'react'

function QuantityControler({ max, value, item, onChange }) {
    const handleInputChange = event => {
        let inputValue = Number(event.target.value)
    
        if (inputValue > max) {
          inputValue = max
        } else if (inputValue < 1) {
          inputValue = 1
        }
    
        onChange && onChange(inputValue, item)
      }

      const increaseNumber = () => {
        let inputValue = value + 1
    
        if (inputValue > max) {
          inputValue = max
        }
    
        onChange && onChange(inputValue, item)
      }

      const descreseNumber = () => {
        let inputValue = value - 1
    
        if (inputValue < 1) {
          inputValue = 1
        }
    
        onChange && onChange(inputValue, item)
      }

  return (
    <div><button className="qty-option__decrease" onClick={descreseNumber} >-</button>
    <input
      type="number"
      min={1}
      max={max}
      value={value}
      onChange={handleInputChange}
    />
    <button className="qty-option__decrease" onClick={increaseNumber}>+</button></div>
  )
}

export default QuantityControler