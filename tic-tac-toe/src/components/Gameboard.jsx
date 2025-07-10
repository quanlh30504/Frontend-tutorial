import { useState } from "react";
import History from "./History";
export default function Gameboard({}) {
  const [turn, setTurn] = useState("X");
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [result, setResult] = useState("Hòa");
  const [histories, setHistories] = useState([]);

  const handleClick = (index) => {
    if (squares[index] != "") return;
    const newSquares = [...squares];
    newSquares[index] = turn;

    setSquares(newSquares);
    setTurn(turn === "X" ? "O" : "X");
    setHistories([...histories, `Player ${turn} at cell ${index + 1}`]);

    var result = checkWin(newSquares);
    setResult(result == "" ? "Hòa" : result == "X" ? "User 1" : "User 2");
  };

  const checkWin = (squares) => {
    for (var i = 0; i < 9; i += 3) {
      if (squares[i] == squares[i + 1] && squares[i] == squares[i + 2]) {
        return squares[i];
      }
    }
    for (var i = 0; i < 3; i++) {
      if (squares[i] == squares[i + 3] && squares[i] == squares[i + 6]) {
        return squares[i];
      }
    }
    if (squares[4] != "") {
      if (
        (squares[4] == squares[0] && squares[4] == squares[8]) ||
        (squares[4] == squares[2] && squares[4] == squares[6])
      ) {
        return squares[4];
      }
    }
    return "";
  };

  const reset = () => {
    setResult("Hòa");
    setSquares(Array(9).fill(""));
  };

  return (
    <>
      <div className="h-3/4 aspect-square flex flex-col justify-center items-center">
        <div className="flex flex-row justify-around items-center w-full mb-5">
          <div className="w-1/3 bg-gray-300">User 1 (X)</div>
          <div className="w-1/3 bg-red-300">User 2 (O)</div>
          <div className="w-1/3 bg-blue-300">
            Turn: {turn == "X" ? "User 1" : "User 2"}
          </div>
        </div>
        <div className="w-3/5 aspect-square grid grid-cols-3 grid-rows-3 gap-2">
          {squares.map((square, index) => (
            <div
              key={index}
              className="w-full h-full flex justify-center items-center bg-gray-200 cursor-pointer"
              onClick={() => handleClick(index)}
            >
              <span className="text-4xl">{square}</span>
            </div>
          ))}
        </div>
        <div className="m-5">
          Result: {result == "Hòa" ? result : result + " win"}
        </div>
        <div>
          <button
            className="border-2 border-blue-200 bg-blue-200 px-5 rounded-lg hover:bg-red-200 hover:border-red-200"
            onClick={reset}
          >
            Reset
          </button>
        </div>
      </div>
      <History histories={histories} />
    </>
  );
}
