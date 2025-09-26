"use client"
import { useState } from 'react';

function Pulsante () {
  const [statoDiState, funzioneCheAggiornaLoState] = useState(true);

  function gestisciclick() {
    if (statoDiState) {
      funzioneCheAggiornaLoState(false)
    } else {
      funzioneCheAggiornaLoState(true)
    }
  }

  return (
    <button className={statoDiState ? 'bg-red-500 p-4' : 'bg-green-500 p-4'} onClick={gestisciclick}>
      Bottone
    </button>
  )

}

export default function Button() {
  return (
    <main className="flex flex-col items-center justify-between px-10">
      <Pulsante />
    </main>
  )
}