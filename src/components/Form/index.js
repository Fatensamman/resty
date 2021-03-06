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
      body: e.target.body.value
    });
    this.props.updateResults({ ...this.state });
  }
  handleClick = async (e) => {
    if (this.props.api.method) {
      await document.querySelector(`input[value=${this.props.api.method}]`).click()
      console.log(document.querySelector(`input[value=${this.props.api.method}]`));
    };
  }

  render() {
    console.log(';;;;;;;;;;;;', this.props.api)
    return (
      <div className="form-div">


        <form onSubmit={this.handleSubmit}>
          <div className="ll">
            <label >URL: </label>
            <input type="url" name="url" className="url" key={this.props.api.url} placeholder="Enter request URL" defaultValue={this.props.api.url} />
            <input type="submit" value="Go!" />
          </div>
          <textarea type="text"
            name="body"
            id="body"
            placeholder="Request body..."
            rows="4"
            cols="50"></textarea>
          <div className="new">
            <div className="btn-click">
              <label className="methodLabel">Get
          <input type="radio" name="method" className="method" value="Get" key={this.props.api.method} defaultChecked={this.props.api.method === "Get"} />
              </label>
            </div>
            <div className="btn-click">
              <label className="methodLabel">Post
          <input type="radio" name="method" className="method" value="Post" key={this.props.api.method} defaultChecked={this.props.api.method === "Post"} />
              </label>
            </div>

            <div className="btn-click">
              <label className="methodLabel">Put
          <input type="radio" name="method" className="method" value="Put" key={this.props.api.method} defaultChecked={this.props.api.method === "Put"} />
              </label>
            </div>

            <div className="btn-click">
              <label className="methodLabel">Delete
          <input type="radio" name="method" className="method" value="Delete" key={this.props.api.method} defaultChecked={this.props.api.method === "Delete"} />
              </label>
            </div>
          </div>
        </form>
      </div>
    )

  }

}
export default Form;