import React, { Fragment } from 'react';
import PlayerCreate from './PlayerCreate';
import PlayerEdit from './PlayerEdit';
import PlayerSearch from './PlayerSearch';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      printPlayer: false
    };
  }

  // function
  
  render() {
    return (
      <Fragment>
        {/* Import component : create player, edit player, search player */}
        <div class="container" >
        <PlayerCreate/>
        <PlayerEdit/>
        <PlayerSearch/>

        </div>
      </Fragment>
    );
  }
}

export default App;