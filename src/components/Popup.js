import React, { useEffect } from 'react';
import { checkWin } from '../helpers/helpers';

const Popup = ({
  correctLetters,
  wrongLetters,
  selectedWord,
  setPlayable,
  playAgain,
}) => {
  let finalMassage = '';
  let finalMessageRevealWord = '';
  let playable = true;

  if (checkWin(correctLetters, wrongLetters, selectedWord) == 'win') {
    finalMassage = 'Congratulations! You won! 😃';
    playable = false;
  } else if (checkWin(correctLetters, wrongLetters, selectedWord) == 'lose') {
    finalMassage = 'Unfortunately you lost. 😕';
    finalMessageRevealWord = `...the word was ${selectedWord}`;
    playable = false;
  }
  useEffect(() => {
    setPlayable(playable);
  });
  return (
    <div
      className='popup-container'
      style={finalMessageRevealWord != '' ? { display: 'flex' } : {}}
    >
      <div className='popup'>
        <h2>{finalMassage}</h2>
        <h3>{finalMessageRevealWord}</h3>
        <button onClick={playAgain}>Play Again</button>
      </div>
    </div>
  );
};

export default Popup;
