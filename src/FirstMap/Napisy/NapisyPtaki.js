import React from 'react'

const NapisyPtaki = ({ refsArray }) => {
  const napisy = [
    {
      id: 'koliber',
      transform: 'matrix(1 0 0 1 2971.8652 1211.1104)',
      name: 'Koliber',
    },
    {
      id: 'gawron',
      transform: 'matrix(1 0 0 1 3281.0156 960.3735)',
      name: 'Gawron',
    },
    {
      id: 'rybitwa',
      transform: 'matrix(1 0 0 1 3030.3164 1468.0771)',
      name: 'Rybitwa',
    },
    {
      id: 'kos',
      transform: 'matrix(1 0 0 1 3301.0684 1312.6045)',
      name: 'Kos',
    },
    {
      id: 'golab',
      transform: 'matrix(1 0 0 1 3497.1504 986.8569)',
      name: 'Gołąb',
    },
    {
      id: 'mewa',
      transform: 'matrix(1 0 0 1 3787.2646 922.9561)',
      name: 'Mewa',
    },
    {
      id: 'pleszka',
      transform: 'matrix(1 0 0 1 3759.1201 1110.5713)',
      name: 'Pleszka',
    },
    {
      id: 'drozd',
      transform: 'matrix(1 0 0 1 3516.1436 1454.5713)',
      name: 'Drozd',
    },
    {
      id: 'krogulec',
      transform: 'matrix(1 0 0 1 3599.1221 1341.0332)',
      name: 'Krogulec',
    },
    {
      id: 'kruk',
      transform: 'matrix(1 0 0 1 3916.9199 1256.2529)',
      name: 'Kruk',
    },
  ]

  const addToRefs = el => {
    if (el) refsArray.current.push(el)
  }

  return (
    <g id="napisy-ptaki">
      {napisy.map((napis, i) => {
        const { transform, name } = napis
        const text = (
          <text key={i} ref={addToRefs} transform={napis.transform}>
            {napis.name}
          </text>
        )

        return text
      })}
      {/* <text id="koliber" transform="matrix(1 0 0 1 2971.8652 1211.1104)">
        Koliber
      </text>
      <text id="gawron" transform="matrix(1 0 0 1 3281.0156 960.3735)">
        Gawron
      </text>
      <text id="rybitwa" transform="matrix(1 0 0 1 3030.3164 1468.0771)">
        Rybitwa
      </text>
      <text id="kos" transform="matrix(1 0 0 1 3301.0684 1312.6045)">
        Kos
      </text>
      <text id="golab" transform="matrix(1 0 0 1 3497.1504 986.8569)">
        <tspan x="0" y="0">
          Go
        </tspan>
        <tspan x="20.35" y="0">
          łąb
        </tspan>
      </text>
      <text id="mewa" transform="matrix(1 0 0 1 3787.2646 922.9561)">
        Mewa
      </text>
      <text id="pleszka" transform="matrix(1 0 0 1 3759.1201 1110.5713)">
        Pleszka
      </text>
      <text id="drozd" transform="matrix(1 0 0 1 3516.1436 1454.5713)">
        Drozd
      </text>
      <text id="krogulec" transform="matrix(1 0 0 1 3599.1221 1341.0332)">
        Krogulec
      </text>
      <text id="kruk" transform="matrix(1 0 0 1 3916.9199 1256.2529)">
        Kruk
      </text> */}
    </g>
  )
}

export default NapisyPtaki
