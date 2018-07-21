import React, { Component } from 'react'
import './App.css'
function Showingmovies(props){
  console.log("in showingmovies",props.mov)

  return(
    <table width="75%"
    cellPadding="20px"
    >
    <tbody>
        
    {props.mov.results.map((mv) =>{
    var im = "https://image.tmdb.org/t/p/w500"+mv.poster_path
        return(
        <tr className="tblarrange">
            <td>
                <img src={im} height="150px" width="150px"/>
            </td>
            <td >
                
            {mv.original_title}
            <p>{mv.overview}</p>
            
            </td>
        </tr>
        )
    
})}

 </tbody>
  </table>  
  )


}

export default class movie extends Component {
  constructor(props){
      super(props)
      this.state={
          data: [],
          showmv: [],
      }
  }
  /*componentWillMount(){
      fetch("https://api.themoviedb.org/3/search/movie?api_key=ab85c167dc8f5538f5b6e08f01923243&query="+this.props.mvname)
      .then((res) =>res.json())
      .then((data) => this.setState({
          data: data,
      }))
  }
  componentWillReceiveProps(){
    fetch("https://api.themoviedb.org/3/search/movie?api_key=ab85c167dc8f5538f5b6e08f01923243&query="+this.props.mvname)
    .then((res) =>res.json())
    .then((data) => this.setState({
        data: data.results,
    }));

    
  }*/
  componentDidUpdate(){
    console.log("length", this.props.mvname)
      fetch("https://api.themoviedb.org/3/search/movie?api_key=ab85c167dc8f5538f5b6e08f01923243&query="+this.props.mvname)
    .then((res) =>res.json())
    .then((data) => this.setState({
        data: data.results,
    }));
  }
  
    render() {
        //console.log("checking state", this.state.data)
        //console.log("trying experimentation", Object.keys(this.state.data).length)
       // console.log("checking state", this.state.showmv)
       console.log("checking state.data", this.state.data.length)
       if(!this.props.mvname)
       return<h3>Enter the movie name</h3>
    return (
      <div>
        <p>hi i will show you movies</p>
        
       {console.log("from render", this.state.data)}
       
    
      </div>
    )
  }
}
