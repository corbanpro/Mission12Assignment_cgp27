import React from 'react';
import './App.css';
import data from './CollegeBasketballTeams.json';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
const teamJson = data


function Heading() {
  return (
    <div className='text-light'>
      <h1>Welcome to the Official March Madness Team List!</h1>
    </div>
  );
}

class TeamCard extends React.Component <{school: string; name: string; city: string; state: string}> {
  render() {

    const oneTeam = this.props;

    return(
      <div className="card m-1">
        <div className="cardheader">
          <h3>{oneTeam.school}</h3>
        </div>
        <div className="cardbody">
          <p>Mascot: {oneTeam.name}</p>
          <p>Location: {oneTeam.city}, {oneTeam.state}</p>
        </div>
      </div>
    );
  }
}

function TeamList() {
  
  return (
    <div>
      <div>
        <div className="row justify-content-center">
          <div className="col-4">
            {teamJson.teams.map(oneTeam => <TeamCard {...oneTeam}/>)}
          </div>         
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className='App bg-dark'>
      <Heading/>
      <TeamList/>
    </div>
  );
}

export default App;

