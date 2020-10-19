import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap/'
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin'
gsap.registerPlugin(DrawSVGPlugin)

const MaskiPtaki = ({ refsArray }) => {
  // const refs = useRef([])

  const masks = [
    {
      id: 'mp1',
      strokeWidth: '15',
      d:
        'M2382.34,919.86c196.29-36.36,596.99,12.35,671.75,63.99c74.75,51.64,627.1,192.14,788.92,189.89',
    },
    {
      id: 'mp2',
      strokeWidth: '5',
      d: 'M2912.02,940.18c58.48,43.32,67.82,137.93,67.82,137.93',
    },
    {
      id: 'mp3',
      strokeWidth: '6',
      d: 'M3022.91,968.73c50.59,18.77,228.94-21.66,228.94-21.66',
    },
    {
      id: 'mp4',
      strokeWidth: '6',
      d: 'M3112.67,1010.69c60.83,137.81-19.17,324.81-19.17,324.81',
    },
    {
      id: 'mp5',
      strokeWidth: '5',
      d: 'M3184.02,1036.18c58.48,43.32,67.82,137.93,67.82,137.93',
    },
    {
      id: 'mp6',
      strokeWidth: '4',
      d: 'M3260.07,1056.59C3312.06,1084.14,3478,975,3478,975',
    },
    {
      id: 'mp7',
      strokeWidth: '4',
      d: 'M3339.15,1079.44C3438,1104,3447,1352,3447,1352',
    },
    {
      id: 'mp8',
      strokeWidth: '4',
      d: 'M3380.2,1090c97.3,24.5,366.33-158.79,366.33-158.79',
    },
    {
      id: 'mp8-1',
      strokeWidth: '2',
      d: 'M3528.94,1055.07c34.56-16.57,202.29-14.56,202.29-14.56',
    },
    {
      id: 'mp9',
      strokeWidth: '4',
      d: 'M3506.02,1120.18c58.48,43.32,67.82,137.93,67.82,137.93',
    },
  ]

  const addToRefs = el => {
    if (el) refsArray.current.push(el)
  }

  return (
    <mask id="maski-ptaki">
      {masks.map((mask, i) => {
        const { strokeWidth, d } = mask
        const path = (
          <path key={i} ref={addToRefs} strokeWidth={strokeWidth} d={d} />
        )

        return path
      })}
      {/* <path
        id="mp1"
        strokeWidth="15"
        d="M2382.34,919.86c196.29-36.36,596.99,12.35,671.75,63.99c74.75,51.64,627.1,192.14,788.92,189.89"
      />
      <path
        id="mp2"
        strokeWidth="5"
        d="M2912.02,940.18c58.48,43.32,67.82,137.93,67.82,137.93"
      />
      <path
        id="mp3"
        strokeWidth="6"
        d="M3022.91,968.73c50.59,18.77,228.94-21.66,228.94-21.66"
      />
      <path
        id="mp4"
        strokeWidth="6"
        d="M3112.67,1010.69c60.83,137.81-19.17,324.81-19.17,324.81"
      />
      <path
        id="mp5"
        strokeWidth="5"
        d="M3184.02,1036.18c58.48,43.32,67.82,137.93,67.82,137.93"
      />
      <path
        id="mp6"
        strokeWidth="4"
        d="M3260.07,1056.59C3312.06,1084.14,3478,975,3478,975"
      />
      <path
        id="mp7"
        strokeWidth="4"
        d="M3339.15,1079.44C3438,1104,3447,1352,3447,1352"
      />
      <path
        id="mp8"
        strokeWidth="4"
        d="M3380.2,1090c97.3,24.5,366.33-158.79,366.33-158.79"
      />
      <path
        id="mp8-1"
        strokeWidth="2"
        d="M3528.94,1055.07c34.56-16.57,202.29-14.56,202.29-14.56"
      />
      <path
        id="mp9"
        strokeWidth="4"
        d="M3506.02,1120.18c58.48,43.32,67.82,137.93,67.82,137.93"
      /> */}
    </mask>
  )
}

export default MaskiPtaki
