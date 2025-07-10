import Gameboard from "./components/Gameboard"
import History from "./components/History"


function App() {
  return (
    <>
      <div className="w-screen h-screen flex justify-center">
        <div className="w-1/2 h-screen bg-gray-400 flex flex-col justify-center items-center">
          {/* <div className="h-1/4 flex justify-center items-center">
            <img src="./assets/react.svg" />
          </div> */}
          <Gameboard />
        </div>
      </div>
    </>
  )
}

export default App
