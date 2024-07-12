// Write your code here
import {Component} from 'react'

import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {
    search: '',
  }
  change = event => {
    this.setState({search: event.target.value})
  }
  render() {
    const {destinationsList} = this.props
    const {search} = this.state
    const newlist = destinationsList.filter(each =>
      each.name.toLowerCase().includes(search.toLocaleLowerCase()),
    )
    return (
      <div className="main">
        <h1 className="heading">Destination Search</h1>
        <div className="search">
          <input
            type="search"
            onChange={this.change}
            placeholder="Search"
            className="input"
            value={search}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
            className="img"
          />
        </div>
        <ul className="wrap">
          {newlist.map(each => (
            <DestinationItem details={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }
}
export default DestinationSearch
