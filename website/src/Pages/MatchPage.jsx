import React, { useState, useEffect } from 'react';
import './MatchPage.css';

const MatchPage = () => {
  const [bestOf, setBestOf] = useState(1);
  const [firstTo, setFirstTo] = useState(11);
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');
  const [points1, setPoints1] = useState(0);
  const [points2, setPoints2] = useState(0);
  const [sets1, setSets1] = useState(0);
  const [sets2, setSets2] = useState(0);
  const [results, setResults] = useState(null);
  const [gameResults, setGameResults] = useState([]);
  const [setupComplete, setSetupComplete] = useState(false);
  const [setPending, setSetPending] = useState(false);

  const handleSetupSubmit = (e) => {
    e.preventDefault();
    setSetupComplete(true);
  };

  const handlePointChange = (player, delta) => {
    if (results) return;

    if (setPending) {
      confirmSetWin();
      return;
    }

    if (player === 1) {
      setPoints1((prevPoints) => Math.max(0, prevPoints + delta));
    } else {
      setPoints2((prevPoints) => Math.max(0, prevPoints + delta));
    }

    checkSetWin(player);
  };

  const checkSetWin = (player) => {
    const points = player === 1 ? points1 + 1 : points2 + 1;
    const opponentPoints = player === 1 ? points2 : points1;

    if (points >= firstTo && points - opponentPoints >= 2) {
      setSetPending(true);
    }
  };

  const confirmSetWin = () => {
    if (points1 >= firstTo && points1 - points2 >= 2) {
      setSets1((prevSets) => prevSets + 1);
    } else if (points2 >= firstTo && points2 - points1 >= 2) {
      setSets2((prevSets) => prevSets + 1);
    }

    setGameResults((prevResults) => [
      ...prevResults,
      { player1: points1, player2: points2 }
    ]);

    setPoints1(0);
    setPoints2(0);
    setSetPending(false);
  };

  useEffect(() => {
    checkMatchWin();
  }, [sets1, sets2]);

  const checkMatchWin = () => {
    const setsNeededToWin = Math.ceil(bestOf / 2);

    if (sets1 >= setsNeededToWin) {
      setResults(`${player1} wins the match!`);
    } else if (sets2 >= setsNeededToWin) {
      setResults(`${player2} wins the match!`);
    }
  };

  const handleReset = () => {
    setSetupComplete(false);
    setPoints1(0);
    setPoints2(0);
    setSets1(0);
    setSets2(0);
    setResults(null);
    setGameResults([]);
    setPlayer1('');
    setPlayer2('');
    setSetPending(false);
  };

  return (
    <div className="match-page">
      {results ? (
        <div className="results">
          <div className="winner-banner">
            <h2>{results}</h2>
            <div className="final-score">Final Score: {sets1} - {sets2}</div>
          </div>
          <div className="spreadsheet-table">
            <table>
              <thead>
                <tr>
                  <th>Players</th>
                  {gameResults.map((_, index) => (
                    <th key={index}>G{index + 1}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{player1}</td>
                  {gameResults.map((game, index) => (
                    <td key={index}>{game.player1}</td>
                  ))}
                </tr>
                <tr>
                  <td>{player2}</td>
                  {gameResults.map((game, index) => (
                    <td key={index}>{game.player2}</td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
          <button className="reset" onClick={handleReset}>
            Reset
          </button>
        </div>
      ) : setupComplete ? (
        <>
          <div className="player">
            <h2>{player1}</h2>
            <div className="sets">{sets1}</div>
            <button onClick={() => handlePointChange(1, 1)}>+</button>
            <div className="points">{points1}</div>
            <button onClick={() => handlePointChange(1, -1)}>-</button>
          </div>
          <div className="player">
            <h2>{player2}</h2>
            <div className="sets">{sets2}</div>
            <button onClick={() => handlePointChange(2, 1)}>+</button>
            <div className="points">{points2}</div>
            <button onClick={() => handlePointChange(2, -1)}>-</button>
          </div>
        </>
      ) : (
        <div className="match-setup">
          <h1>Set Up a Match</h1>
          <form onSubmit={handleSetupSubmit}>
            <label>
              Best of:
              <select
                value={bestOf}
                onChange={(e) => setBestOf(Number(e.target.value))}
              >
                <option value={9}>Best of 9</option>
                <option value={7}>Best of 7</option>
                <option value={5}>Best of 5</option>
                <option value={3}>Best of 3</option>
                <option value={1}>Best of 1</option>
              </select>
            </label>
            <label>
              First to:
              <input
                type="number"
                value={firstTo}
                onChange={(e) => setFirstTo(Number(e.target.value))}
                min="1"
              />
            </label>
            <label>
              Player 1 Name:
              <input
                type="text"
                value={player1}
                onChange={(e) => setPlayer1(e.target.value)}
                required
              />
            </label>
            <label>
              Player 2 Name:
              <input
                type="text"
                value={player2}
                onChange={(e) => setPlayer2(e.target.value)}
                required
              />
            </label>
            <button type="submit">Set Up Match</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default MatchPage;