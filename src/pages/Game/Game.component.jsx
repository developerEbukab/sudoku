import React, {useEffect, useState} from 'react';
import { GameContainer, SudokuContainer, InputsContainer, ControlsContainer, Button } from './Game.styles';
import { ALLOWED_INPUTS, CREATE_NEW_PUZZLE } from './GAME.utils';
import FinishGameModal from './FinishGameModal.component';

const Game = () => {
  const [puzzle, setPuzzle] = useState([]);
  const [unEditableValues, setUnEditableValues] = useState([]);
  const [selectedInputBox, setSelectedInputBox] = useState("");
  const [modalState, setModalState] = useState(false);
  const [initialPuzzleState, setInitialPuzzleState] = useState([]);
  const [haveSetInitialPuzzle, setHaveSetInitialPuzzle] = useState(false);

  useEffect(() => {
    createNewPuzzle()
  }, []);

  if (!haveSetInitialPuzzle && (puzzle !== [])) {
    setHaveSetInitialPuzzle(true)
    setInitialPuzzleState(puzzle)
  }

  const createNewPuzzle = () => {
    let { createdPuzzle, unEditableValues } = CREATE_NEW_PUZZLE()
    setHaveSetInitialPuzzle(false)
    setPuzzle(createdPuzzle)
    setUnEditableValues(unEditableValues)
    setSelectedInputBox("")
  }

  const createSudokuBoard = (boardValues) => {
    let boardValuesArray = [];
    boardValues.forEach((arrItems, arrIndex, arr) => {
      arrItems.forEach((item, itemIndex, arr) => {
        boardValuesArray.push(
          <p
            onClick={!modalState && (() => setSelectedInputBox(`${arrIndex}${itemIndex}`))}
            className={`
              ${(arrIndex === 2 || arrIndex === 5) && "styleBottomBorder"}
              ${(itemIndex === 2 || itemIndex === 5) && "styleRightBorder"}
              ${unEditableValues.includes(`${arrIndex}${itemIndex}`) && "UnEditableBox"}
              ${selectedInputBox === `${arrIndex}${itemIndex}` && "SelectedInputBox"}
            `}
          >{item !== 0 && item}</p>
        )
      })
    })
    return boardValuesArray
  }

  const handleSelectedInput = (value) => {
    let tempPuzzle = [...puzzle];
    tempPuzzle[selectedInputBox[0]][selectedInputBox[1]] = value
    setPuzzle(tempPuzzle);
  }

  const handleCloseModal = () => {
    createNewPuzzle()
    setModalState(false)
  }

  const handleOpenModal = () => {
    setModalState(true)
  }

  return (
    <GameContainer>
      {modalState && <FinishGameModal handleCloseModal={handleCloseModal} initialPuzzleState={initialPuzzleState} puzzle={JSON.stringify(puzzle)}  puzzleBoard={ createSudokuBoard(puzzle)}/>}
      <div>
        <SudokuContainer data-tut="reactour__puzzle">
          {createSudokuBoard(puzzle)}
        </SudokuContainer>
        <InputsContainer data-tut="reactour__inputs">
          {ALLOWED_INPUTS.map((item, index) => <p key={index} onClick={()=> handleSelectedInput(item)}>{item}</p>)}
        </InputsContainer> 
      </div>
      <ControlsContainer>
        <Button data-tut="reactour__newGame" color="primary" onClick={() => createNewPuzzle()}>Make New Game</Button>
        <Button data-tut="reactour__submitGame" color="secondary" onClick={()=>handleOpenModal()}>Submit Game</Button>
      </ControlsContainer>
    </GameContainer>
  );
}

export default Game;

