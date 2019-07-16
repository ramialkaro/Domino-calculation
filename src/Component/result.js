import React, {Component} from 'react';

export default class Result extends Component {
    constructor(props){
        super(props);

        this.state={
            numberOne:'',
            numberTwo:'',
        }
        this.UpdateInputs = this.UpdateInputs.bind(this);
    }

    UpdateInputs=(e)=>{
        
    }
    render(){

        return(
            <div className="shadow-lg  p-3 m-5 bg-white rounded ">
                                <input  className="m-2 p-1 d-inline border-primary rounded"  
                                        type="number" 
                                        placeholder={this.props.PlayerOneName + ' points'} 
                                        onChange={e=> this.setState({numberOne:e.target.value})}/>

                                <input  className="m-2 p-1 d-inline border-primary rounded"  
                                        type="number" 
                                        placeholder={this.props.PlayerTwoName + ' points'} 
                                        onChange={e=> {
                                            this.setState({numberTwo:e.target.value})
                                            console.log(this.state.numberTwo)
                                        }}/>
                                <button type="button" className="btn ml-3 btn-outline-primary" onClick={this.UpdateInputs}> Enter</button>
              
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col"> Round </th>
              <th scope="col">{this.props.PlayerOneName} </th>
              <th scope="col">{this.props.PlayerTwoName}</th>
              <th scope="col">Notification</th>
            </tr>
          </thead>

          <tbody>
              <tr>
                <th scope="row">1</th>
                <td>{this.props.PlayerValueOne}</td>
                <td>{this.props.PlayerValueTwo}</td>
                <td></td> 
             </tr> 
             <tr>
                <th scope="row">2</th>
                <td>{this.props.PlayerValueOne}</td>
                <td>{this.props.PlayerValueTwo}</td>
                <td></td> 
             </tr> 

             <tr>
                <th scope="row">Total</th>
                <td>{Number(this.props.PlayerValueTwo) + Number(this.props.PlayerValueOne)}</td>
                <td>{Number(this.props.PlayerValueTwo) + Number(this.props.PlayerValueOne)}</td>
                <td style={{'fontWeight':'bold', 'color':'green'}}>Imad Win</td> 
             </tr> 
          </tbody>         
        </table>

            </div>
        )
    }
}