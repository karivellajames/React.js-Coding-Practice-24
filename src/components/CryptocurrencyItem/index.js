import './index.css'

const CryptocurrencyItem = props => {
  const {itemDetails} = props
  const {currencyLogo, currencyName, euroValue, usdValue} = itemDetails

  return (
    <li className="items-container">
      <div className="logo-title">
        <img className="logo" src={currencyLogo} alt={currencyName} />
        <p className="currency-title">{currencyName}</p>
      </div>
      <div className="currency">
        <p className="currency-value">{usdValue}</p>
        <p className="currency-value">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
