// Write your code here
import {Component} from 'react'
import './index.css'

class DestinationItem extends Component {
  render() {
    const {details} = this.props
    const {id, name, imgUrl} = details
    return (
      <li className="divv">
        <img src={imgUrl} alt={name} />
        <p>{name}</p>
      </li>
    )
  }
}
export default DestinationItem
