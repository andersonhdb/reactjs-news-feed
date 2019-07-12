import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class SearchBar extends React.Component{
    state= {
        searchTerm: ""
    }

    onChange = (e)=>{
        this.setState({searchTerm:e.target.value})
    }

    onSubmit = (e)=>{
        e.preventDefault()
        this.props.search(this.state.searchTerm);
    }

    render(){
        return(
            <form className="search-bar" onSubmit = {this.onSubmit} style={{display:"grid", gridTemplateColumns: "max-content max-content"}}>
            <TextField
            id="search-text"
            label="Search for news"
            margin="normal" 
            value = {this.state.searchTerm}
            onChange = {this.onChange}/>

            <Button variant="contained" 
            color="primary"
            type="submit"
            style={{height: "max-content", alignSelf:"end", margin: "9px"}}
            >
                Search
            </Button>
    </form>
    )}
}

export default SearchBar