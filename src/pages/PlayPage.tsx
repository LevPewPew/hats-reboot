import React, { useEffect, useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { Timer, WordDisplay } from 'src/components';
import { GeneralBtn } from 'src/components/buttons';
import { decrementTimer, resetTimer } from 'src/actions/play-actions';
import { incrementPlayersScore } from 'src/actions/game-actions';
import { useDispatch, useSelector } from 'react-redux';
import { sample } from 'src/utils/array';
import { RootState } from '@hats-reboot/state-management-types';

interface PlayPageProps {
  className?: string;
}

export const PlayPage: React.FC<PlayPageProps> = ({ className }) => {
  const history = useHistory();
  const round = useSelector<RootState, number>((state) => state.playReducer.round);
  const timer = useSelector<RootState, number>((state) => state.playReducer.timer);
  const players = useSelector<RootState, Array<Player>>((state) => state.gameReducer.players);
  const words = useSelector<RootState, Array<string>>((state) => state.gameReducer.words);
  const [hat, setHat] = useState(words);
  const [currentTurn, setCurrentTurn] = useState(0);
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

  const getClueGiver = (): Player => {
    const clueGiver = players.find((player) => player.turnOrder === currentTurn);

    if (clueGiver) {
      return clueGiver;
    } else {
      throw 'Clue Giver not found!';
    }
  };

  const getGuesser = (): Player => {
    const currentPlayer = getClueGiver();
    const guesser = players.find((player) => player.team === currentPlayer?.team && player.name !== currentPlayer.name);

    if (guesser) {
      return guesser;
    } else {
      throw 'Guesser not found!';
    }
  };

  useEffect(() => {
    dispatch(resetTimer());
  }, []);

  useEffect(() => {
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

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    if (timer === 0) {
      if (currentTurn < players.length - 1) {
        setCurrentTurn(currentTurn + 1);
        dispatch(resetTimer());
        setIsTimerTicking(false);
      } else {
        setCurrentTurn(0);
      }
    }
  }, [timer]);

  return (
    <main className={className}>
      <div>Current Round: {round}</div>
      <div>gives clues: {getClueGiver().name}</div>
      <div>guesses: {getGuesser().name}</div>
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
      <GeneralBtn
        handleClick={() => {
          pickWord();
          setIsTimerTicking(true);
        }}
      >
        <div>START!</div>
      </GeneralBtn>
      <GeneralBtn
        handleClick={() => {
          removeWord(currentWord);
          pickWord();
          dispatch(incrementPlayersScore(getClueGiver().name, round));
        }}
      >
        <div>CORRECT</div>
      </GeneralBtn>
    </main>
  );
};

export default styled(PlayPage)``;
