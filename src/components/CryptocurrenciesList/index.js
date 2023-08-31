import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

const CryptocurrenciesList = props => {
  const {data} = props

  return (
    <div className="list-container">
      <h1 className="list-heading">Cryptocurrency Tracker</h1>
      <img
        src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
        alt="cryptocurrency"
        className="currency-image"
      />
      <div className="list-items-container">
        <div className="headers">
          <p className="coin-type">Coin Type</p>
          <div className="list-values">
            <p className="coin-type">USD</p>
            <p className="coin-type">EURO</p>
          </div>
        </div>
        <ul className="list-items">
          {data.map(eachItem => (
            <CryptocurrencyItem itemDetails={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default CryptocurrenciesList
