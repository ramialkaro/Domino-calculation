import React, { Component} from 'react';

export default class Enters extends Component {
    render(){

        return(
            <div className="shadow-sm">
                <input className="m-2 p-1 d-inline border-primary rounded"  type="text" placeholder=" Enter Player Name" />
                <input className="m-2 p-1 d-inline border-primary rounded" type="text" placeholder=" Enter Player Name" />
                <button type="button" className="btn ml-3 btn-outline-primary"> Sumbit</button>
            </div>
        );
    }
}