import React, {useState, useEffect} from 'react';
import { GameContent, Modal, Button, SudokuContainer, ResultText } from './Game.styles';
import { SOLVE_BOARD } from './GAME.utils';
import { connect } from "react-redux";

const FinishGameModal = ({ handleCloseModal, puzzleBoard, puzzle, initialPuzzleState }) => {
  const [boardSolution, setBoardSolution] = useState([]);

  useEffect(() => {
    const solution = SOLVE_BOARD(initialPuzzleState);
    setBoardSolution(solution)
  }, [initialPuzzleState]);

  const createSudokuBoard = (boardValues) => {
    let boardValuesArray = [];
    boardValues.forEach((arrItems, arrIndex, arr) => {
      arrItems.forEach((item, itemIndex, arr) => {
        boardValuesArray.push(
          <p
            className={`
              ${(arrIndex === 2 || arrIndex === 5) && "styleBottomBorder"}
              ${(itemIndex === 2 || itemIndex === 5) && "styleRightBorder"}
            `}
          >{item !== 0 && item}</p>
        )
      })
    })
    return boardValuesArray
  }

  console.log("boardSolution", boardSolution, puzzle)

  return (
    <Modal>
      <ResultText>{`Your answer is : ${puzzle === JSON.stringify(boardSolution) ? "Correct" : "In-Correct"}`}</ResultText>
      <GameContent>
        <div>
          <p>Your Solution</p>
          <SudokuContainer>
            {puzzleBoard}
          </SudokuContainer>
        </div>
        <div>
          <p>Answer</p>
          <SudokuContainer>
            { createSudokuBoard(boardSolution)}
          </SudokuContainer>
        </div>
      </GameContent>
      <Button color="primary" onClick={handleCloseModal}>Close</Button>
    </Modal>
  );
}

const mapStateToProps = ({ farmLead: {initialPuzzleState}}) => ({
  
})

export default connect(mapStateToProps)(FinishGameModal);
