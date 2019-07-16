import React, {Component} from 'react';



export default class App extends Component {
  
  state={
    showTable:true,

    player:[
      {
        id:'0',
        name:'Ahmed',

      },
      {
        id:'1s',
        name:'Imad',
      }
    ],

    data: [
      {
        id:'1',
        playerOnePoint:'23',
        playerTwoPoint:'12',
        notification:'',
      },
      {
        id:'2',
        playerOnePoint:'10',
        playerTwoPoint:'34',
        notification:'',
      },
      {
        id:'3',
        playerOnePoint:'25',
        playerTwoPoint:'10',
        notification:'',
      },
      {
        id:'4',
        playerOnePoint:'23',
        playerTwoPoint:'18',
        notification:'',
      },
      {
        id:'5',
        playerOnePoint:'11',
        playerTwoPoint:'40',
        notification:'',
      },
      {
        id:'6',
        playerOnePoint:'42',
        playerTwoPoint:'40',
        notification:'',
      },
      {
        id:'7',
        playerOnePoint:'1',
        playerTwoPoint:'0',
        notification:'',
      },
    ],

    totalPointOne:0,
    totalPointTwo:0,

    WinnerOfMatch:'',
    winner:false
    
 };

 renderTableData() {
  return this.state.data.map((data, index) => {
     const { id, playerOnePoint, playerTwoPoint, notification } = data //destructuring
     
     this.state.totalPointOne += Number(playerOnePoint)
     this.state.totalPointTwo += Number(playerTwoPoint)



     return (
        <tr key={id}>
           <th scope="row">{id}</th>
           <td>{playerOnePoint}</td>
           <td>{playerTwoPoint}</td>
           <td>{notification}</td>
        </tr>

     )
  })
}

 DoesWinner =(e)=>{
    
    if(this.state.totalPointOne >= 151){
      console.log("Player 1 Win")
     this.setState({WinnerOfMatch:'The winner of match is ' +this.state.player[0].name, winner:true})
     
    }
    if(this.state.totalPointTwo >= 151){
      console.log("Player 2 Win")
     this.setState({WinnerOfMatch: 'The winner of match is '+ this.state.player[1].name, winner:true})
     
    }
    if(this.state.totalPointOne < 151 && this.state.totalPointTwo < 151){
      console.log("No winner")
     this.setState({WinnerOfMatch: 'No winner unitll this opint', winner:true})
     
    }
    else{
      console.log('sorry try later')
    }
}

  ShowData =(
    <div>
    <button className="btn btn-info mb-2" onClick={this.DoesWinner}>Winner</button>
      <table className="table">
        <thead className="thead-dark">
            <tr>
                <th scope="col">Id</th>
                <th scope="col"><span className="text-muted">player:  </span> {this.state.player[0].name.toLocaleUpperCase()}</th>
                <th scope="col"><span className="text-muted">player:  </span> {this.state.player[1].name.toLocaleUpperCase()}</th>
                <th scope="col">Winner</th>
            </tr>
        </thead>
        
        <tbody>
          
                  {this.renderTableData()}
                  <tr key={this.state.data.id}>
                      <th scope="row">Total</th>
                      <td>{(this.state.totalPointOne)}</td>
                      <td>{this.state.totalPointTwo}</td>
                      <td className="font-weight-bold">{this.state.WinnerOfMatch}</td>
                  </tr>
            
        </tbody>
      </table>
   </div>   
  )





    render(){

      return (
    <div className="container">
        <h2>Domino Calculation</h2>
        <button className="btn btn-primary mb-3" onClick={e=>this.setState({showTable: !this.state.showTable, winner:false})}>Show / Hide</button>
        {
          this.state.showTable ? this.ShowData : '' 
        }
        {
          this.state.winner ? [
              <h3>{this.state.WinnerOfMatch}</h3>
          ] : ''
        }
    </div>
  );
}

}