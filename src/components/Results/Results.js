import React from 'react';
import './Results.scss';
import ReactJson from 'react-json-view';

 function Results (props) {
    return (
        <div className="content">
            <h2> Results From API:</h2>
            <br/>
            <h4> Headers: <ReactJson src={props.headers} /></h4>
            <h4>Count: {props.count}</h4>
            <h4>Results:</h4>
            < ReactJson src={props.results} />
        </div>
    )
}
export default Results