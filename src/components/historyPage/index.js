
import React from 'react'
import { If, Then, Else } from 'react-if';
import ReactJson from 'react-json-view';
import { Link } from 'react-router-dom'
import './historyPage.scss'

// let history = JSON.parse(localStorage.getItem('h1')) || [];

class HistoryPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            storage: JSON.parse(localStorage.getItem('h1')) || [],
            body: [],
            isVisible: false,
        }
    }

    UrlValue = (data) => {
        // let method = data.method
        // let url = data.url
        this.setState({ body: data.body, isVisible: true })
        // this.props.reRunHandle({...this.state })
        // this.props.callback({ method, url });
    };

    render() {
        // console.log(this.props);
        return (
            <div className="all">
                <section>


                    <If condition={this.state.storage.length}>
                        <Then>
                            {this.state.storage.map((data, index) => {
                                return (
                                    <div className="historyDiv" onClick={() => { this.UrlValue(data) }} key={index}>
                                        {/* {this.handler(data)} */}
                                        {data.method} {data.url}
                                        <Link to={{
                                            pathname: '/',
                                            data: {
                                                url: data.url,
                                                method: data.method
                                            }
                                        }}>
                                            Re-Run
                                      </Link>
                                    </div>
                                );
                            })}
                        </Then>
                        <Else>
                            <div> there are no data</div>
                        </Else>
                    </If>
                </section>
                <div className='results'>
                    <If condition={this.state.isVisible}>
                        <Then>
                            <div id="content" className="content">
                                <h2> Results API:</h2>

                                <br />
                                <ul>
                                    <li>results:</li>
                                    <li><ReactJson id="pretty" src={this.state.body} /></li>
                                </ul>
                            </div>

                        </Then>
                    </If>
                </div>
            </div>
        );
    }
}
export default HistoryPage;
// function Results(props) {
//     console.log('0000000000000000000000',props);
//     return (
        // <div>
        //     { props.show ? <div id="content" className="content">
        //         <h2> Results API:</h2>
        //         <br />
        //         <ul>
        //             <li>headers:<ReactJson id="pretty" src={props.data.headers} /></li>
        //             <li>results:</li>
        //             <li><ReactJson id="pretty" src={props.data.body[props.data.body.length-1]} /></li>
        //         </ul>
        //     </div> : null}
        // </div>
//     );
// }
