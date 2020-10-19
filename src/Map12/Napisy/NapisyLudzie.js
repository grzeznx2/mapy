import React from 'react'

const NapisyLudzie = ({ refsArray }) => {
  return (
    <g id="napisy-ludzie" ref={refsArray}>
      <text id="dziewczynka" transform="matrix(1 0 0 1 3886.1025 2229.3301)">
        Dziewczynka
      </text>
      <text id="prezes" transform="matrix(1 0 0 1 3507.8867 2244.2529)">
        Prezes
      </text>
      <text id="hipster" transform="matrix(1 0 0 1 3778.1035 1939.2422)">
        Hipster
      </text>
      <text id="biegacz" transform="matrix(1 0 0 1 2928.1221 2263.2422)">
        Biegacz
      </text>
      <text id="slepiec" transform="matrix(1 0 0 1 3217.0898 2195.5938)">
        Ślepiec
      </text>
      <text id="dziadki" transform="matrix(1 0 0 1 2854.4707 2001.6377)">
        Dziadki
      </text>
      <text id="chlopiec" transform="matrix(1 0 0 1 3422.374 1714.9336)">
        <tspan x="0" y="0">
          Ch
        </tspan>
        <tspan x="18.96" y="0">
          łopiec
        </tspan>
      </text>
      <text id="dziecko" transform="matrix(1 0 0 1 3442.293 1919.0664)">
        Dziecko
      </text>
      <text id="naukowiec" transform="matrix(1 0 0 1 3067.8154 1749.8574)">
        Naukowiec
      </text>
    </g>
  )
}

export default NapisyLudzie
