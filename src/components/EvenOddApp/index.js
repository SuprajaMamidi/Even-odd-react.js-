// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {
    isEven: true,
    count: 0,
  }
  onClickButton = () => {
    this.setState(prevState => {
      const {count} = prevState
      const num = count + Math.ceil(Math.random() * 100)
      let numType
      if (num % 2 === 0) {
          numType = true
      }
      else {
        numType = false
      }
      return {isEven: numType, count: num}
    })
  }
  render() {
    const {isEven, count} = this.state
    const evenText = isEven ? 'Even' : 'odd'
    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="heading">Count {count}</h1>
          <p className="para">Count is {evenText}</p>
          <button type="button" className="button" onClick={this.onClickButton}>
            Increment
          </button>
          <p className="para1">*increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
