import React from 'react';
import { GameInstructionsContainer, ImageContainer, InstructionContainer } from './GameInstructions.styles';
import { INSTRUCTIONS } from './instructions.utils';

const GameInstructions = () => {
  return (
    <GameInstructionsContainer>
      <ImageContainer>
        <img src='./instructions.png'/>
      </ImageContainer>
      
      <div>
        {
          INSTRUCTIONS.map(({title, text}, index) =>
            <InstructionContainer>
              <h3>{title}</h3>
              <p>{text}</p>
            </InstructionContainer>
        )}
      </div>
    </GameInstructionsContainer>
  );
}

export default GameInstructions;
