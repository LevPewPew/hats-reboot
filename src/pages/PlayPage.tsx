import React, { useEffect, useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { Timer, WordDisplay } from 'src/components';
import { GeneralBtn } from 'src/components/buttons';
import { decrementTimer, resetTimer } from 'src/actions/play-actions';
import { useDispatch, useSelector } from 'react-redux';
import { sample } from 'src/utils/array';
import { RootState } from '@hats-reboot/state-management-types';

interface PlayPageProps {
  className?: string;
}

export const PlayPage: React.FC<PlayPageProps> = ({ className }) => {
  const history = useHistory();
  const round = useSelector<RootState, number>((state) => state.playReducer.round);
  const words = useSelector<RootState, Array<string>>((state) => state.gameReducer.words);
  const [hat, setHat] = useState(words);
  const [isTimerTicking, setIsTimerTicking] = useState(false);
  const [currentWord, setCurrentWord] = useState('');
  const dispatch = useDispatch();
  const firstRender = useRef(true);
  const intervalId = useRef(0);

  const pickWord = (): void => {
    setCurrentWord(sample(hat));
  };

  const removeWord = (correctWord: string): void => {
    const newHat = hat.filter((e) => e !== correctWord);
    setHat(newHat);
  };

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    if (isTimerTicking) {
      intervalId.current = setInterval(() => dispatch(decrementTimer()), 1000);
    } else {
      clearInterval(intervalId.current);
    }
  }, [dispatch, isTimerTicking]);

  useEffect(() => {
    if (hat.length === 0) {
      history.push('/scores');
    }
  }, [hat.length, history]);

  return (
    <main className={className}>
      <div>Current Round: {round}</div>
      <WordDisplay>
        <span>{currentWord}</span>
      </WordDisplay>
      <Timer />
      <GeneralBtn handleClick={() => dispatch(decrementTimer())}>
        <div>DECREMENT</div>
      </GeneralBtn>
      <GeneralBtn handleClick={() => dispatch(resetTimer())}>
        <div>RESET</div>
      </GeneralBtn>
      <GeneralBtn handleClick={() => (isTimerTicking ? setIsTimerTicking(false) : setIsTimerTicking(true))}>
        <div>{isTimerTicking ? 'PAUSE' : 'RESUME'}</div>
      </GeneralBtn>
      <GeneralBtn handleClick={() => pickWord()}>
        <div>START!</div>
      </GeneralBtn>
      <GeneralBtn
        handleClick={() => {
          removeWord(currentWord);
          pickWord();
        }}
      >
        <div>CORRECT</div>
      </GeneralBtn>
    </main>
  );
};

export default styled(PlayPage)``;
