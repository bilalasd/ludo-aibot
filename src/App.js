import React from "react";
import LudoBoard from "./components/LudoBoard";
// import updateBoard from "./store/actions/updateBoard";
// import player1UpdateDice from "./store/actions/player1UpdateDice";
import { connect } from "react-redux";

function App() {
  return (
    <div className="App">
      <LudoBoard></LudoBoard>
    </div>
  );
}
// const MapStateToProps = (state) => {
//   return {
//     board: state.board,
//   };
// };

// const MapDispathToProps = (dispatch) => {
//   return {
//     // updateBoard: () => dispatch(updateBoard),
//     // player1UpdateDice: () => dispatch(player1UpdateDice),
//   };
// };
// export default connect(MapStateToProps, MapDispathToProps)(App);
export default connect()(App);
