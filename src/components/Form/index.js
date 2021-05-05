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
    await this.setState({
      url: e.target.url.value,
      method: e.target.method.value,
      body:e.target.body.value
    });
    this.props.updateResults({ ...this.state });
  }
  // urlHandle = e => {
  //   const url = e.target.value;
  //   this.setState({ url })
  // }
  // handleMethod = (e) => {
  //   const method = e.target.value;
  //   this.setState({ method })

  //   }
  render() {
    return (
      <div className="form-div">
        <form onSubmit={this.handleSubmit}>
          <div className="ll">
          <label>URL: </label>
          <input type="url" name="url" className="url" placeholder="Enter request URL" defaultValue={this.props.api.url} />
          <input type="submit" value="Go!" />
          </div>
          <textarea  type="text"
              name="body"
              id="body"
              placeholder="Request body..."
              rows="4"
              cols="50"></textarea>
          {/* <br /> */}
           <div className="new">
          <div className="btn-click">
          <label className="methodLabel">Get
          <input type="radio" name="method" className="method" value="Get" />
          </label>
          </div>
          <div className="btn-click">
          <label className="methodLabel">Post
          <input type="radio" name="method" className="method" value="Post" />
          </label>
          </div>
          
          <div className="btn-click">
          <label className="methodLabel">Put
          <input type="radio" name="method" className="method" value="Put" />
          </label>
          </div>

          <div className="btn-click">
          <label className="methodLabel">Delete
          <input type="radio" name="method" className="method" value="Delete" />
          </label>
          </div>
          </div>
        </form>
        {/* <div>
          <h3>{this.state.method}&nbsp; &nbsp; &nbsp;{this.state.url}</h3>
        </div> */}
      </div>
    )
  }
}
export default Form;
