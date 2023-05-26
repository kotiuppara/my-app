import React, { useState } from "react";

function Form({ currentPlayer, gameStart }) {
    const [Player, setPlayer] = useState({name1:'',name2:''});
    const [value, setValue] = useState(false);
    const handleChange = ({ target }) => {
        setPlayer((prev) => ({ ...prev, [target.name]: target.value }));
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (Player.name1.trim() !== '' && Player.name2.trim() !== '') {
            setValue(true);
            gameStart();
        }
        else {
            alert('Enter details');
        }
    }
    const formbox = (
        <div className="card-sm form">
            <div className="card-body" >
                <h3 class="text-primary">Enter Details</h3>
                <form onSubmit={handleSubmit}>
                    <div className="form-floating mt-4 mb-4">
                        <input type="text" className="form-control" name="name1" value={Player.name1} onChange={handleChange} id="name1" placeholder="uname" />
                        <label class="form-label" for="name">Player1</label>
                    </div>
                    <div className="form-floating mt-4 mb-4">
                        <input type="text" className="form-control" name="name2" id="name2" value={Player.name2} onChange={handleChange} placeholder="email" />
                        <label className="form-label" for="name">Player2</label>
                    </div>
                    <button type="submit" className="btn btn-outline-primary">Submit</button><br />
                </form>
            </div>
        </div>
    );
    const detailbox = (
        <div className="card-sm detail">
            <div className="card-body">
                <table>
                    <tr>
                        <th>{Player.name1}</th>
                        <th>:</th>
                        <td>X</td>
                    </tr>
                    <tr>
                        <th>{Player.name2}</th>
                        <th>:</th>
                        <td>O</td>
                    </tr>
                    <tr>
                        <th>Current Player</th>
                        <th>:</th>
                        <td>{currentPlayer}</td>
                    </tr>
                </table>
            </div>
        </div>
    )
    return (
        value === false ? formbox : detailbox
    )

}
export default Form;