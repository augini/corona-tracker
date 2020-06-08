import React, {Component} from 'react'
import styles from './App.module.css'
import {Cards, Chart, CountryPicker} from './components/'
import { FetchData } from './api'
import CoronaImage from './images/image.png'


class App extends Component {
  state = {
    data: ''
  }
   async componentDidMount(){
    const data = await FetchData()
    this.setState({
      data: data
    })
  }

  handleChange  = async (country) => {
    //fetch the data
    const data = await FetchData(country)
    this.setState({
      data: data,
      country: country
    })
    //set the state
    console.log(country)
  }


  render() { 
    const {data} =  this.state
    console.log(data)
    return ( 
      <div className = {styles.container}>
        <Cards data = {data} />
        <CountryPicker handleChange = {this.handleChange} />
        <Chart data = {this.state.data} country = {this.state.country} />
      </div>
     );
  }
}
 
export default App;