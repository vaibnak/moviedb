import React, { Component } from 'react';
import Movie from './movie'
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state={
      inputtext: "",
      searchtext: "",
    }
    this.search = this.search.bind(this)
  }
  
  search(e){
  this.setState({
    inputtext: e.target.value,
    searchtext: e.target.value,
  })
  }
  render() {
    
    return (
      <div>
        <table className="titleBar">
          <tbody>
            <tr>
              <td>
                <img src={require("./moviedb.png")} width="50px" alt="app-icon"/>
              </td>
              <td width='20px'/>
              <td>
              <h1>Moviesdb Search </h1>
              </td>
              
            </tr>
          </tbody>
        </table>
        <input style={{
         display:'block',
         width: '98%',
         fontSize: 24,
         paddingLeft: '15px',
         paddingTop:'10px'
        }} placeholder="Enter your movie" onChange={this.search} value={this.state.searchtext}/>
        <Movie mvname={this.state.searchtext}/>
      </div>
    );
  }
}

export default App;
