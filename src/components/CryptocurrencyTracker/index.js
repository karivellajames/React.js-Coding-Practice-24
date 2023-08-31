import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptopcurrenciesList from '../CryptocurrenciesList'

import './index.css'

class CryptocurrencyTracker extends Component {
  state = {list: [], isLoading: true}

  componentDidMount() {
    this.getCryptocurrencyList()
  }

  getCryptocurrencyList = async () => {
    const getData = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const dataResponse = await getData.json()
    console.log(dataResponse)
    const updatedData = dataResponse.map(eachItem => ({
      currencyLogo: eachItem.currency_logo,
      currencyName: eachItem.currency_name,
      euroValue: eachItem.euro_value,
      id: eachItem.id,
      usdValue: eachItem.usd_value,
    }))
    this.setState({list: updatedData, isLoading: false})
  }

  render() {
    const {list, isLoading} = this.state

    return (
      <div className="main-container">
        {isLoading ? (
          <div data-testid="loader" className="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <CryptopcurrenciesList data={list} />
        )}
      </div>
    )
  }
}

export default CryptocurrencyTracker
