import React from 'react';
import './help.scss'

const Help = () => {
  return (
    <div className="help">
      <h2>how you can use the ReSTY application ?</h2>
      <h4>ReSTY application have 3 main pages :

      1.Home
      2.History
      3.Help
      </h4>
      <p id='Home'>
        <h2> Home</h2>

        In home page you can see the form , enter the URL to an API , (GET,Post,Put,Delete requests so that  can retrieve it’s data
        <br />
         you can see simple list of all previous queries you have run so that you can easily see which queries run before
         <br />
         you can click on an old query and have your selections appear in the form for you, so you don’t have to re-type them
         <br />
         you should see a “loading” indicator while RESTy is fetching data so that your know it’s working on your request
         </p>


      <p id='History'>
        <h2> History</h2>

        you can see a list of every unique and successful API call that you have made
        <br />
        you can show a list of every previous API call
         <br />
         Clicking on an entry shows the full details of that query in a separate section on the page
        <br />
        you can see a button labeled “Re-Run” that would execute your calls again and shows the home page with the form pre-filled         </p>

    </div>
  )
}

export default Help;