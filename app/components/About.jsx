var React = require('react');

var About = (props) => {
  return(
    <div>
      <h1 className="text-center">About</h1>
      <p>This is a Weather Application built on React. I have built this
       for The Complete Web App Developer Course.
     </p>
     <p>
Here are some of the tools I used:
     </p>
     <ul>
       <li>
         <a href="https://facebook.github.io/react" target="_blank">React</a> - This was the
           Javascript framework used.
       </li>
       <li>
         <a href="http://openweathermap.org" target="_blank">Open Weather Map</a> - I used
           Open Weather map to search for weather data by city name.
       </li>
     </ul>
    </div>
  )
}

module.exports = About;
