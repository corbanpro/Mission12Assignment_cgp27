import React from 'react';
import './App.css';
import data from './CollegeBasketballTeams.json';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
const teamJson = data


function Heading() {
  return (
    <div>
      <h1>Welcome to the Official March Madness Team List!</h1>
    </div>
  );
}

class Team extends React.Component <{school: string; name: string; city: string; state: string}> {
  render() {

    const oneTeam = this.props;

    return(
      <div>
        <div className="row">
          <div className="col-4">
            <div className="card m-1">

              <div className="cardheader">
                <h3>{oneTeam.school}</h3>
              </div>

              <div className="cardbody">
                <p>Mascot: {oneTeam.name}</p>
                <p>Location: {oneTeam.city}, {oneTeam.state}</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

function TeamList() {
  
  return (
    <div>
      {teamJson.teams.map(oneTeam => <Team {...oneTeam}/>)}
    </div>
  );
}

function App() {
  return (
    <div>
      <Heading/>
      <TeamList/>
    </div>
  );
}

export default App;

