import { Component } from "react";

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txt: "Ali",
      count: 0,
      departs: [
        { id: 1, nom: "Informatique" },
        { id: 2, nom: "Génie Civil" },
        { id: 3, nom: "Génie Mécanique" },
      ],
    };
  }

 changeState =()=>
  {
this.setState(
    {
        count: this.state.count +1 ,
        txt: "Med", 
        departs: [...this.state.departs, {id: 4, nom: "Génie Electrique"}]
    }
) 

  }
  render() {
    return (
      <>
        <h1> Bonjour! {this.state.txt}</h1>
        <h1> Count : {this.state.count}</h1>
        <ul>
            {this.state.departs.map(
                (e)=> {
                   return <li key={e.id}> {e.nom}</li>
                }
            )}
        </ul>
        <button onClick={this.changeState}> increment </button>
      </>
    );
  }
}

export default Welcome;
