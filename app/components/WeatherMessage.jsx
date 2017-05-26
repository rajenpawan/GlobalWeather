var React = require('react');

// var WeatherMessage = React.createClass({
//   render: function(){
//     var{temp, location} = this.props;
//     return(
//       <h3>It's {temp} deg Celsius in {location}.</h3>
//
//
//     )
//   }
// });

var WeatherMessage = (props) => {
  var {temp, location} = props;
  return(
    <h3>It's a {temp} deg Celsius in {location}..</h3>
  )
};

module.exports = WeatherMessage;
