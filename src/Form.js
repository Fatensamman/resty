
import './style/Form.scss'
import React from 'react'

class Form extends React.Component {
    constructor(props){
      super(props)
      this.state ={ 
        url:'',
        method:'',
      };
    }
    handlewritten = (e)=>{
    e.preventDefault();
    const url = e.target.parentElement.firstChild.nextSibling.value;
    const method = e.target.nextSibling.value;
    this.setState({url,method})
    }
    handleMethod=(e)=>{
      const url = e.target.parentElement.firstChild.nextSibling.value;
      if(url){
        this.setState({url})
      }
    }
    render(){
      return(
        <main>
        <form>
          <label>URL: </label>
        <input type="url" name="url" className="url" placeholder="Enter request URL"/>
        <input type="submit" value="Go!" onClick={this.handleMethod}/>
      <br/>
        <label className="methodLabel" onClick={this.handlewritten}>Get</label>
        <input type="radio" name="method" className="method" value="get" hidden/>
    
        <label className="methodLabel" onClick={this.handlewritten}>Post</label>
        <input type="radio" name="method" className="method" value="post" hidden/>
    
        <label  className="methodLabel" onClick={this.handlewritten}>Put</label>
        <input type="radio" name="method" className="method" value="put" hidden/>
    
        <label  className="methodLabel" onClick={this.handlewritten}>Delete</label>
        <input type="radio" name="method" className="method" value="delete" hidden/>
        </form>
        <div>
          <h3>{this.state.method}/</h3>
          <h3>{this.state.url}</h3>
          </div>
        </main>
      )
    }
    }
 export default Form;
