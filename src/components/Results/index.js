import './Results.scss';
import ReactJson from 'react-json-view';

function Results(props) {
    console.log('0000000000000000000000',props);
    return (
        <div>
            { props.show ? <div id="content" className="content">
                <h2> Results API:</h2>
                <br />
                <ul>
                    <li>headers:<ReactJson id="pretty" src={props.data.headers} /></li>
                    <li>results:</li>
                    <li><ReactJson id="pretty" src={props.data.body[props.data.body.length-1]} /></li>
                </ul>
            </div> : null}
        </div>
    );
}
export default Results