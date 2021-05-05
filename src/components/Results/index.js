import './Results.scss';
import ReactJson from 'react-json-view';

 function Results (props) {
     if(props.show){

         return (
             <div className="content">
                 <h2> Results From API:</h2>
                 <br/>
                 {/* <h4> Headers: <ReactJson src={props.headers} /></h4>
                 <h4>Count: {props.count}</h4>
                 <h4>Results:</h4>
                 < ReactJson src={props.results} /> */}
                  <ul>
               <li>headers:<ReactJson id="json-pretty" src={props.data.headers}/></li>
               <li>results:</li>
               <li><ReactJson id="json-pretty" src={props.data.body}/></li>
             </ul>
             </div>
         );
     }else return props.data.error;
}
export default Results