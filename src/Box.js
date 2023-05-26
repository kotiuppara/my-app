import React, { useState, useEffect } from "react";
var array = new Array(9).fill(0);
function Box({ currentPlayer, start, changeUser , changeCPlayer}) {
    const [winner, setWinner] = useState(null);
    const handleClear = () => {
        array.fill(0);
        const boxes = document.querySelectorAll(".item-box");
        boxes.forEach(box => box.textContent = "");
        setWinner(null);
        changeCPlayer();
    }
    const win = () => {
        const combinations = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
        combinations.forEach((combo) => {
            const [a, b, c] = combo;
            console.log(array[a], array[b], array[c]);
            if (array[a] === array[b] && array[b] === array[c] && array[c] !== 0) {
                alert(`${array[a]} won the match`);
                setWinner(array[a]);
                handleClear();
            }
            else {
                if (array.every((value) => value !== 0) && winner === null) {
                    alert('Match was Draw');
                    setWinner('Draw');
                    handleClear();
                }
            }
        })
    }
    const addSymbol = (id) => {
        const div = document.getElementById(id);
        if (start === true && div.textContent === '') {
            div.textContent = currentPlayer;
            array[id - 1] = currentPlayer;
            win();
            changeUser();

        }
    }
    return (
       <><button id="clear" className={`btn btn-danger ${start === true ? 'd-block' : 'd-none'}`} onClick={handleClear}>Clear Board</button>
        <div className="box">
            <div className="item-box" onClick={() => addSymbol('1')} id="1"></div>
            <div className="item-box" onClick={() => addSymbol('2')} id="2"></div>
            <div className="item-box" onClick={() => addSymbol('3')} id="3"></div>
            <div className="item-box" onClick={() => addSymbol('4')} id="4"></div>
            <div className="item-box" onClick={() => addSymbol('5')} id="5"></div>
            <div className="item-box" onClick={() => addSymbol('6')} id="6"></div>
            <div className="item-box" onClick={() => addSymbol('7')} id="7"></div>
            <div className="item-box" onClick={() => addSymbol('8')} id="8"></div>
            <div className="item-box" onClick={() => addSymbol('9')} id="9"></div>
        </div></>
    );
}
export default Box;