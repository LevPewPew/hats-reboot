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
  const players = useSelector<RootState, Array<Player>>((state) => state.gameReducer.players);
  const words = useSelector<RootState, Array<string>>((state) => state.gameReducer.words);
  const round = useSelector<RootState, number>((state) => state.playReducer.round);
  const timer = useSelector<RootState, number>((state) => state.playReducer.timer);
  const timePerTurn = useSelector<RootState, number>((state) => state.settingsReducer.timePerTurn);

  const [hat, setHat] = useState(words);
  const [currentTurn, setCurrentTurn] = useState(0);
  const [isTimerTicking, setIsTimerTicking] = useState(false);
  const [currentWord, setCurrentWord] = useState('');
  const [currentClueGiver, setCurrentClueGiver] = useState({ name: 'error', team: 0, scores: [0], turnOrder: 0 });
  const [currentGuesser, setCurrentGuesser] = useState({ name: 'error', team: 0, scores: [0], turnOrder: 0 });

  const dispatch = useDispatch();
  const firstRender = useRef(true);
  const intervalId = useRef(0);
  const history = useHistory();

  const pickWord = (): void => {
    setCurrentWord(sample(hat));
  };

  const removeWord = (correctWord: string): void => {
    const newHat = hat.filter((e) => e !== correctWord);
    setHat(newHat);
  };

  const getClueGiver = (): Player => {
    const clueGiver = players.find((player) => player.turnOrder === currentTurn);
    console.log(currentTurn);

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

  const setCurrentTurnWithLastPlayerCheck = async (): Promise<void> => {
    if (currentTurn === players.length - 1) {
      console.log('wut1');
      setCurrentTurn(0);
    } else {
      console.log('wut2');
      setCurrentTurn(currentTurn + 1);
    }
  };

  const handleNextPlayerClick = async (): Promise<void> => {
    console.log('handleNextPlayerClick');
    setCurrentTurnWithLastPlayerCheck();
    dispatch(resetTimer());
    pickWord();
  };

  const handleGoClick = (): void => {
    console.log('handleGoClick');
    setIsTimerTicking(true);
    dispatch(decrementTimer());
  };

  const handlePauseResumeClick = (): void => {
    console.log('handlePauseResumeClick');
    if (isTimerTicking) {
      setIsTimerTicking(false);
    } else {
      setIsTimerTicking(true);
    }
  };

  const handleCorrectClick = (): void => {
    console.log('handleCorrectClick');
    removeWord(currentWord);
    pickWord();
    dispatch(incrementPlayersScore(getClueGiver().name, round));
  };

  useEffect(() => {
    setCurrentClueGiver(getClueGiver());
    setCurrentGuesser(getGuesser());
    dispatch(resetTimer());
    pickWord();
  }, []);

  useEffect(() => {
    setCurrentClueGiver(getClueGiver());
    setCurrentGuesser(getGuesser());
  }, [currentTurn]);

  useEffect(() => {
    if (isTimerTicking) {
      intervalId.current = setInterval(() => dispatch(decrementTimer()), 1000);
    } else {
      clearInterval(intervalId.current);
    }
  }, [dispatch, isTimerTicking]);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    if (timer === 0) {
      setIsTimerTicking(false);
    }
  }, [timer]);

  useEffect(() => {
    // TODO change to not make it sudden jarring change of screen, have a prompt or something first
    if (hat.length === 0) {
      history.push('/scores');
    }
  }, [hat.length, history]);

  return (
    <main className={className}>
      <div>Current Round: {round + 1}</div>
      <div>gives clues: {currentClueGiver.name}</div>
      <div>guesses: {currentGuesser.name}</div>
      <WordDisplay>
        <span>{currentWord}</span>
      </WordDisplay>
      <Timer />
      <GeneralBtn handleClick={handleNextPlayerClick} disabled={timer !== 0}>
        <div>NEXT PLAYER / CONFIRM / READY UP</div>
      </GeneralBtn>
      <GeneralBtn handleClick={handleGoClick} disabled={timer !== timePerTurn || isTimerTicking}>
        <div>GO!</div>
      </GeneralBtn>
      <GeneralBtn
        handleClick={handlePauseResumeClick}
        disabled={!(timer !== timePerTurn || isTimerTicking) || timer === 0}
      >
        <div>{isTimerTicking ? 'II' : 'i>'}</div>
      </GeneralBtn>
      <GeneralBtn
        handleClick={handleCorrectClick}
        disabled={!(timer !== timePerTurn || isTimerTicking) || !isTimerTicking}
      >
        <div>CORRECT</div>
      </GeneralBtn>
    </main>
  );
};

export default styled(PlayPage)``;
