import './Form.scss'
import React from 'react'

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      url: '',
      method: 'get',
    };
  }
  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let raw = await fetch(this.state.url);
      let data = await raw.json();
      let headers ={};
      raw.headers.forEach((item,key)=>headers[key]=item);
      this.props.handleClick(headers,data.count,data.results)
      
    } catch (error) {
      console.error(error)
    }

  }
  urlHandle = e => {
    const url = e.target.value;
    this.setState({ url })
  }
  handleMethod = (e) => {
    const method = e.target.value;
    this.setState({ method })

    }
  render() {
    return (
      <main>
        <form>
          <label>URL: </label>
          <input  onChange = {this.urlHandle} type="url" name="url" className="url" placeholder="Enter request URL" />
          <input type="submit" value="Go!" onClick={this.handleSubmit} />
          <br />
          <label className="methodLabel">Get</label>
          <input onChange = {this.handleMethod} type="radio" name="method" className="method" value="get" />

          <label className="methodLabel">Post</label>
          <input onChange = {this.handleMethod} type="radio" name="method" className="method" value="post" />

          <label className="methodLabel">Put</label>
          <input onChange = {this.handleMethod} type="radio" name="method" className="method" value="put"  />

          <label className="methodLabel">Delete</label>
          <input onChange = {this.handleMethod} type="radio" name="method" className="method" value="delete"  />
        </form>
        <div>
          <h3>{this.state.method}&nbsp; &nbsp; &nbsp;{this.state.url}</h3>
        </div>
      </main>
    )
  }
}
export default Form;
