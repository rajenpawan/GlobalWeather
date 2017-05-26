var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = () => {
  return (
    <div>
<h2>Nav Component</h2>
<IndexLink to="/" activeClassName="active" activeStyle={{fontweight: 'bold'}}>Get Weather</IndexLink>
<Link to="/about" activeClassName="active" activeStyle={{fontweight: 'bold'}}>About</Link>
<Link to="/examples" activeClassName="active" activeStyle={{fontweight: 'bold'}}>Examples</Link>
</div>
  )
}

module.exports = Nav;
