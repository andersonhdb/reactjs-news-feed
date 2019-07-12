import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import NewsArticle from './NewsArticle'

const axios = require('axios')

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 5 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};


class NewsMenu extends React.Component{
    state = {
        activeIndex: 0,
        CountryNews: [],
    }

    handleChange = (event, newValue) => {
        this.setState({activeIndex: newValue})
    }

    fetchData(countryCode){
        axios.get(`https://newsapi.org/v2/top-headlines?country=${countryCode}&apiKey=${this.props.news.news_api_key}`).then((response)=>{
            this.setState({CountryNews: response.data.articles})
          }).catch((error)=>{
              console.log(error)
          })
    }

    switchToSearchScreen(){
        this.setState({activeIndex: 0})
    }

    displayContent(){
        console.log(this.props)
        if(this.props.news.news.length<1){
            return(<h1>No Articles match you search criteria</h1>)
        }
        else{
            return(
                this.props.news.news.map((newsPiece)=>(
                    <NewsArticle news={newsPiece}/>
                ))
            )
        }
    }

    useStyles = makeStyles(theme => ({
        root: {
          flexGrow: 1,
          backgroundColor: theme.palette.background.paper,
        },
      }));

    render(){
        const {activeIndex} = this.state        
        return (

            <div className="root">
              <AppBar position="static">
                <Tabs value={activeIndex} onChange={this.handleChange}>
                  <Tab label="Search Results"/>
                  <Tab label="Brazil" 
                  onClick={()=>{  
                    this.fetchData("br");
                  }}/>
                  <Tab label="Canada"
                  onClick={()=>{
                    this.fetchData("ca");
                  }}
                  />
                  <Tab label="USA"
                  onClick={()=>{
                    this.fetchData("us");
                  }}
                  />
                  <Tab label="Russia" 
                  onClick={()=>{
                    this.fetchData("ru");
                  }}
                  />
                </Tabs>
              </AppBar>
              {activeIndex === 0 && <TabContainer>
                  {this.displayContent()}
                  </TabContainer>}
        
              {activeIndex === 1 && <TabContainer>
                {
                    this.state.CountryNews.map((article)=>(
                        <NewsArticle news={article}/>
                    ))
                }
              </TabContainer>}
              {activeIndex === 2 && <TabContainer>{
                    this.state.CountryNews.map((article)=>(
                        <NewsArticle news={article}/>
                    ))
                }</TabContainer>}
              {activeIndex === 3 && <TabContainer>{
                    this.state.CountryNews.map((article)=>(
                        <NewsArticle news={article}/>
                    ))
                }</TabContainer>}
              {activeIndex === 4 && <TabContainer>{
                    this.state.CountryNews.map((article)=>(
                        <NewsArticle news={article}/>
                    ))
                }</TabContainer>}
            </div>
          );
    }
}

export default NewsMenu