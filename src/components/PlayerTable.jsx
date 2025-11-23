// src/components/PlayerTable.jsx

import React from 'react';
import PlayerRow from './PlayerRow.jsx';

export default function PlayerTable({ players }) {
  return (
    <table>
      <tbody>
        {players.map((player, index) => (
          <PlayerRow key={index} player={player} index={index} />
        ))}
      </tbody>
    </table>
  );
}
