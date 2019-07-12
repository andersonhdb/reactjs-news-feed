import React, { Component } from 'react';
import './App.css';

import Header from './component/Header'
import SearchBar from './component/SearchBar'
import NewsMenu from './component/NewsMenu'

const axios = require('axios')

class App extends Component{
  constructor(props){
    super(props)
    this.tabs = React.createRef()
  }

  state = {
    news_api_key: `8a84ae756f96425e8c1cb97095bc9ab6`,
    news: []
  }

  search = (searchTerm)=>{
    axios.get(`https://newsapi.org/v2/top-headlines?category=${searchTerm}&apiKey=${this.state.news_api_key}`).then((response)=>{  
          console.log(this)
          this.setState({news: response.data.articles})
          this.tabs.current.switchToSearchScreen()
          console.log(this.state.news)
          }).catch((error)=>{
              console.log(error)
          })
  }

  // completedSearch(value){
  //   console.log("info that I want:")
  //   console.log(this.state)
  //   this.setState({triggedSearch: value})
  // }

  render(){
    return(
      <div className = "app">
        <div className = "header">
          <Header/>
          <SearchBar search={this.search}/>
        </div>
        <NewsMenu news={this.state} ref={this.tabs}/>
      </div>
    )
  }
}

export default App;
