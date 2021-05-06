// import './history.scss';
import { If, Then } from 'react-if';
import './history.scss'
export default function History(props) {
  function UrlValue(e) {
    let [method, url] = e.target.innerText.split(' ');
    props.refill({ method, url });
  }
  return (
    <>
    <div className="homehistorydiv">
      <h2>Old Routes</h2>
     <If condition={props.history.length}>
      <Then>
        {props.history.map((data, index) => {
          return (
            
            <div className="link"  onClick={UrlValue} key={index}>
              {data.method} {data.url}
            </div>
            
          );
        })}
      </Then>
    </If>
    </div>
    </>
  );
}


/* <ul>
  {props.history.map((item, index) =>
    <li key={index}>
      <span className={`method ${item.method}`}>{`${item.method}`}</span>
      <button className='url-history'>{`${item.url}`}</button>
    </li>,
  )}
</ul> */