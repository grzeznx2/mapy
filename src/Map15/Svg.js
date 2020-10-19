import React, { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { gsap, Circ } from 'gsap'
import Maski0 from './Maski/Maski0'
import MaskiOwady from './Maski/MaskiOwady'
import MaskiZwierzeta from './Maski/MaskiZwierzeta'
import MaskiPtaki from './Maski/MaskiPtaki'
import MaskiRosliny1 from './Maski/MaskiRosliny1'
import MaskiRosliny2 from './Maski/MaskiRosliny2'
import MaskiLudzie from './Maski/MaskiLudzie'
import MaskiVehicle1 from './Maski/MaskiVehicle1'
import MaskiVehicle2 from './Maski/MaskiVehicle2'

import Branch0 from './Branch/Branch0'
import BranchOwady from './Branch/BranchOwady'
import BranchZwierzeta from './Branch/BranchZwierzeta'
import BranchPtaki from './Branch/BranchPtaki'
import BranchRosliny1 from './Branch/BranchRosliny1'
import BranchRosliny2 from './Branch/BranchRosliny2'
import BranchLudzie from './Branch/BranchLudzie'
import BranchVehicle1 from './Branch/BranchVehicle1'
import BranchVehicle2 from './Branch/BranchVehicle2'

import GatunkiOwady from './Gatunki/GatunkiOwady'
import GatunkiZwierzeta from './Gatunki/GatunkiZwierzeta'
import GatunkiPtaki from './Gatunki/GatunkiPtaki'
import NapisyOwady from './Napisy/NapisyOwady'
import NapisyZwierzeta from './Napisy/NapisyZwierzeta'
import NapisyPtaki from './Napisy/NapisyPtaki'
import GatunkiRosliny1 from './Gatunki/GatunkiRosliny1'
import NapisyRosliny1 from './Napisy/NapisyRosliny1'
import GatunkiRosliny2 from './Gatunki/GatunkiRosliny2'
import NapisyRosliny2 from './Napisy/NapisyRosliny2'
import GatunkiVehicle1 from './Gatunki/GatunkiVehicle1'
import NapisyVehicle1 from './Napisy/NapisyVehicle1'
import GatunkiVehicle2 from './Gatunki/GatunkiVehicle2'
import NapisyVehicle2 from './Napisy/NapisyVehicle2'
import GatunkiLudzie from './Gatunki/GatunkiLudzie'
import NapisyLudzie from './Napisy/NapisyLudzie'

const Svg = () => {
  const [stage, setStage] = useState(0)
  const svgRef = useRef(null)
  const ptakiMaskArray = useRef([])
  const ptakiArray = useRef([])
  const ptakiNapisyArray = useRef([])
  const rosliny1MaskArray = useRef(null)
  const rosliny1Array = useRef(null)
  const rosliny1NapisyArray = useRef(null)
  const rosliny2MaskArray = useRef(null)
  const rosliny2Array = useRef(null)
  const rosliny2NapisyArray = useRef(null)
  const vehicle1MaskArray = useRef(null)
  const vehicle1Array = useRef(null)
  const vehicle1NapisyArray = useRef(null)
  const vehicle2MaskArray = useRef(null)
  const vehicle2Array = useRef(null)
  const vehicle2NapisyArray = useRef(null)
  const ludzieMaskArray = useRef(null)
  const ludzieArray = useRef(null)
  const ludzieNapisyArray = useRef(null)
  const zwierzetaMaskArray = useRef(null)
  const zwierzetaArray = useRef(null)
  const zwierzetaNapisyArray = useRef(null)
  const owadyMaskArray = useRef(null)
  const owadyArray = useRef(null)
  const owadyNapisyArray = useRef(null)

  useEffect(() => {
    gsap.set(
      [
        ptakiMaskArray.current,
        rosliny1MaskArray.current.children,
        rosliny2MaskArray.current.children,
        vehicle1MaskArray.current.children,
        vehicle2MaskArray.current.children,
        ludzieMaskArray.current.children,
        owadyMaskArray.current.children,
        zwierzetaMaskArray.current.children,
      ],
      {
        drawSVG: '0%',
      }
    )
  }, [])

  useEffect(() => {
    const tl = gsap.timeline()

    const drawSection = (maski, gatunki, napisy) => {
      tl.to(maski.current.children, {
        drawSVG: '100%',
        stagger: 0.03,
      }).to([gatunki.current.children, napisy.current.children], {
        opacity: 1,
        stagger: 0.05,
      })
    }

    stage === 1 &&
      tl
        .to(ptakiMaskArray.current, { drawSVG: '100%', stagger: 0.03 })
        .to(ptakiArray.current, { opacity: 1, stagger: 0.05 })
        .to(ptakiNapisyArray.current, { opacity: 1, stagger: 0.05 }, '<')
    stage === 2 &&
      drawSection(rosliny1MaskArray, rosliny1Array, rosliny1NapisyArray)
    stage === 3 &&
      drawSection(rosliny2MaskArray, rosliny2Array, rosliny2NapisyArray)
    stage === 4 &&
      drawSection(vehicle1MaskArray, vehicle1Array, vehicle1NapisyArray)
    stage === 5 &&
      drawSection(vehicle2MaskArray, vehicle2Array, vehicle2NapisyArray)
    stage === 6 && drawSection(ludzieMaskArray, ludzieArray, ludzieNapisyArray)
    stage === 7 && drawSection(owadyMaskArray, owadyArray, owadyNapisyArray)
    stage === 8 &&
      drawSection(zwierzetaMaskArray, zwierzetaArray, zwierzetaNapisyArray)
  }, [ptakiMaskArray, stage])

  const makeCloser = () => {
    const { x, y, width, height } = svgRef.current.viewBox.baseVal
    gsap.to(svgRef.current, {
      attr: {
        viewBox: `${width / 4 + x} ${height / 4 + y} ${width / 2} ${
          height / 2
        }`,
      },
      duration: 1.5,
      ease: Circ.easeOut,
    })
  }

  const makeFurther = () => {
    const { x, y, width, height } = svgRef.current.viewBox.baseVal
    gsap.to(svgRef.current, {
      attr: {
        viewBox: `${x - width / 2} ${y - height / 2} ${width * 2} ${
          height * 2
        }`,
      },
      duration: 1.5,
      ease: Circ.easeOut,
    })
  }

  const nextStage = () => setStage(stage => stage + 1)

  return (
    <>
      <div
        style={{ display: 'flex', flexDirection: 'column', position: 'fixed' }}
      >
        <button onClick={makeCloser}>CLOSER</button>
        <button onClick={makeFurther}>FURTHER</button>
        <button onClick={nextStage}>NEXT</button>
        <Link to={'/'}>BACK</Link>
      </div>
      <svg
        ref={svgRef}
        id="svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 4098 2304"
      >
        <defs>
          <Maski0 />
          <MaskiOwady refsArray={owadyMaskArray} />
          <MaskiZwierzeta refsArray={zwierzetaMaskArray} />
          <MaskiPtaki refsArray={ptakiMaskArray} />
          <MaskiRosliny1 refsArray={rosliny1MaskArray} />
          <MaskiRosliny2 refsArray={rosliny2MaskArray} />
          <MaskiLudzie refsArray={ludzieMaskArray} />
          <MaskiVehicle1 refsArray={vehicle1MaskArray} />
          <MaskiVehicle2 refsArray={vehicle2MaskArray} />
        </defs>
        <GatunkiOwady refsArray={owadyArray} />
        <NapisyOwady refsArray={owadyNapisyArray} />
        <GatunkiZwierzeta refsArray={zwierzetaArray} />
        <NapisyZwierzeta refsArray={zwierzetaNapisyArray} />
        <GatunkiPtaki refsArray={ptakiArray} />
        <NapisyPtaki refsArray={ptakiNapisyArray} />
        <GatunkiRosliny1 refsArray={rosliny1Array} />
        <NapisyRosliny1 refsArray={rosliny1NapisyArray} />
        <GatunkiRosliny2 refsArray={rosliny2Array} />
        <NapisyRosliny2 refsArray={rosliny2NapisyArray} />
        <GatunkiVehicle1 refsArray={vehicle1Array} />
        <NapisyVehicle1 refsArray={vehicle1NapisyArray} />
        <GatunkiVehicle2 refsArray={vehicle2Array} />
        <NapisyVehicle2 refsArray={vehicle2NapisyArray} />
        <GatunkiLudzie refsArray={ludzieArray} />
        <NapisyLudzie refsArray={ludzieNapisyArray} />
        <g id="earth">
          <g>
            <ellipse
              transform="matrix(0.7071 -0.7071 0.7071 0.7071 -209.0632 1763.2629)"
              fill="#17AFE3"
              cx="2023.92"
              cy="1133.99"
              rx="171.39"
              ry="171.39"
            />
            <g>
              <defs>
                <ellipse
                  id="SVGID_1_"
                  transform="matrix(0.7071 -0.7071 0.7071 0.7071 -209.0632 1763.2629)"
                  cx="2023.92"
                  cy="1133.99"
                  rx="171.39"
                  ry="171.39"
                />
              </defs>
              <clipPath id="SVGID_2_">
                <use xlinkHref="#SVGID_1_" overflow="visible" />
              </clipPath>
              <g clipPath="url(#SVGID_2_)">
                <linearGradient
                  id="SVGID_3_"
                  gradientUnits="userSpaceOnUse"
                  x1="1915.7156"
                  y1="968.4421"
                  x2="2074.1521"
                  y2="1284.3187"
                >
                  <stop offset="0" style={{ stopColor: '#BADB72' }} />
                  <stop offset="0.9964" style={{ stopColor: '#7ECF7E' }} />
                </linearGradient>
                <path
                  fill="url(#SVGID_3_)"
                  d="M2011.49,1306.36c-7.64,0.62-15.21-3.27-20.23-9.07c-5.02-5.8-7.72-13.3-8.99-20.86
					c-0.62-3.72-0.95-7.57-2.61-10.95c-1.27-2.59-3.3-4.81-4.18-7.55c-1.54-4.78,0.67-9.99,0-14.96c-0.68-5.05-4.25-9.41-4.67-14.48
					c-0.38-4.6,1.9-9.32,0.58-13.75c-1.66-5.53-7.93-7.92-13.01-10.67c-7.16-3.88-13.15-9.88-17.02-17.05
					c-1.45-2.69-2.63-5.7-2.23-8.73c0.69-5.2,5.59-8.57,9.5-12.07c3.9-3.5,7.28-9.38,4.3-13.7c-2.44-3.55-7.58-3.65-11.39-5.68
					c-6.14-3.29-8.22-11.3-13.84-15.41c-2.35-1.71-5.16-2.64-7.93-3.53c-1.63-0.53-3.26-1.06-4.9-1.59
					c-4.76-1.54-9.54-3.09-14.49-3.84c-3.17-0.48-6.44-0.65-9.4-1.89s-5.61-3.89-5.68-7.1c-0.05-2.61,1.57-4.94,2.1-7.49
					c1.08-5.2-2.54-10.3-6.84-13.42c-4.3-3.11-9.42-5.01-13.56-8.33c-6.08-4.87-9.62-12.76-9.2-20.53l0.21,0.02
					c7.11-21.14,17.97-38.21,32.15-55.42c6.96-8.45,16.24-16.91,27.15-16.04c10.66,0.85,19.58,10.56,30.23,9.64
					c1.78-0.15,3.64-0.68,4.83-2.01c1.19-1.34,1.37-3.66,0-4.81c-0.88-0.74-2.11-0.84-3.25-0.96c-2.67-0.3-5.51-1.08-7.15-3.2
					c-1.65-2.12-1.28-5.86,1.23-6.82c2.51-0.95,5.01,1.23,7.55,2.08c7.94,2.64,15.82-7.95,23.79-5.38c1.53,2.4-0.72,5.35-2.71,7.38
					c-2,2.03-3.94,5.34-2,7.42c1.76,1.89,5.09,0.58,6.55-1.55c1.46-2.13,1.91-4.82,3.36-6.95c1.45-2.13,4.77-3.47,6.55-1.6
					c1.49,1.56,0.85,4.22,1.93,6.1c1.12,1.95,3.82,2.46,5.98,1.83c2.16-0.63,3.94-2.12,5.77-3.42c6.85-4.87,16.64-7.32,23.48-2.44
					c3.42,2.44,6.03,6.58,10.2,7.03c1.24,0.13,2.55-0.08,3.7,0.39c2.48,1.02,2.75,4.4,2.37,7.05c-0.41,2.92-1.84,6.44-4.79,6.57
					c-1.81,0.08-3.35-1.24-4.65-2.5c-4.77-4.61-10.6-10.02-17.02-8.39c-5.98,1.53-9.12,8.59-14.97,10.58
					c-6.7,2.27-13.9-2.99-20.89-1.9c-4.55,0.71-8.23,3.98-11.47,7.25c-2.79,2.82-5.45,7.68-2.43,10.26
					c3.08,2.63,9.54-0.09,10.92,3.71c0.6,1.66-0.43,3.47-0.34,5.23c0.14,2.88,3.44,4.85,6.29,4.38c2.85-0.47,5.11-2.72,6.56-5.22
					c1.16-1.99,2.28-4.48,4.55-4.87c3.28-0.57,5.56,3.74,8.88,4.02c3.67,0.31,5.67-4.08,8.53-6.4c3.01-2.44,7.5-2.54,10.96-0.8
					c3.46,1.74,5.94,5.05,7.34,8.66c1.02,2.63,1.32,6.07-0.88,7.83c-1.1,0.89-2.57,1.12-3.98,1.22c-7.6,0.55-16.11-1.66-22.28,2.82
					c-4.48,3.25-6.16,9.04-9.34,13.58c-5.42,7.73-14.79,11.38-22.99,16.04c-8.21,4.66-16.38,12.2-15.94,21.63
					c0.1,2.26,0.57,4.91-1.1,6.44c-1.83,1.67-4.93,0.53-6.49-1.41c-1.56-1.93-2.25-4.43-3.71-6.44c-3.25-4.46-9.86-5.48-14.99-3.45
					c-5.13,2.03-8.95,6.48-11.73,11.25c-1.52,2.61-2.83,5.47-2.83,8.49c0,3.02,1.59,6.21,4.41,7.28c6.4,2.43,12.24-6.8,19.02-5.81
					c0.68,0.1,1.38,0.33,1.84,0.84c2.48,2.8-5.07,7.59-2.09,9.85c0.73,0.55,1.74,0.47,2.63,0.67c2.23,0.5,3.61,2.82,4.01,5.06
					c0.4,2.25,0.07,4.56,0.26,6.84c0.37,4.42,3.39,9.04,7.81,9.43c7.21,0.64,10.74-9.1,17.41-11.92c3.95-1.66,8.92-0.44,11.64,2.86
					c1.47,1.78,2.41,4.15,4.46,5.21c3.26,1.68,7.35-0.86,10.83,0.29c3.4,1.13,4.77,5.18,7.5,7.5c4.05,3.45,10.52,2.65,14.61,6.05
					c1.84,1.53,2.96,3.73,4.36,5.67c3.15,4.36,8.12,7.77,13.46,8.76c4.41,0.82,10.98-1.66,14.34,2.26c1.79,2.08,1.86,5.48,4.15,6.99
					c1.28,0.85,2.95,0.86,4.32,1.55c3.05,1.54,3.54,5.85,2.32,9.03c-1.22,3.18-3.65,5.75-5.24,8.77c-1.59,3.02-2.31,6.48-2.05,9.88
					c0.33,4.41,2.12,9.33-0.49,12.9c-4.27,5.83-15.41,1.44-19.63,7.31c-2.15,2.99-1.24,7.09-1.42,10.77
					c-0.29,6.21-3.94,11.84-8.52,16.04c-4.58,4.2-10.08,7.22-15.35,10.53c-3.26,2.05-6.85,5.03-6.37,8.85
					c0.35,2.84,2.88,4.87,4.09,7.47c1.47,3.15,0.88,6.82,1.02,10.3c0.14,3.48,1.56,7.49,4.91,8.41c1.92,0.52,4.84,0.63,4.75,2.62
					c-0.97,1.49-2.36,2.71-3.96,3.47"
                />
              </g>
              <g clipPath="url(#SVGID_2_)">
                <linearGradient
                  id="SVGID_4_"
                  gradientUnits="userSpaceOnUse"
                  x1="2104.3054"
                  y1="1006.3345"
                  x2="2247.7944"
                  y2="1159.7885"
                >
                  <stop offset="0" style={{ stopColor: '#BADB72' }} />
                  <stop offset="0.9964" style={{ stopColor: '#7ECF7E' }} />
                </linearGradient>
                <path
                  fill="url(#SVGID_4_)"
                  d="M2146.82,997.97c-1.21,5.54-5.51,10.3-10.9,12.06c-1.82,0.6-3.81,0.91-5.3,2.11
					c-1.49,1.2-2.1,3.78-0.59,4.96c1.54,1.21,4.34,0.3,5.37,1.97c0.63,1.02,0.13,2.4,0.61,3.5c1.44,3.3,7.35-0.91,9.94,1.59
					c1.71,1.66,0.1,4.74-2.11,5.62c-2.21,0.88-4.72,0.52-7.04,1.04c-3.26,0.73-5.87,3.1-8.31,5.38c-4.65,4.35-9.31,8.69-13.96,13.04
					c-1.6,1.5-3.26,3.03-5.32,3.81c-3.17,1.2-6.7,0.41-10.09,0.21c-3.39-0.2-7.35,0.55-8.95,3.55c-1.87,3.5,0.58,7.67,2.95,10.86
					c1.46,1.96,3.38,4.14,5.81,3.9c2.52-0.25,3.95-2.88,5.32-5.01c2.75-4.28,6.78-7.56,10.74-10.75c2.07-1.67,4.32-3.41,6.97-3.56
					c2.9-0.16,5.64,1.65,8.54,1.53c2.6-0.11,5.17-1.75,7.64-0.95c0.9,0.29,1.66,0.87,2.41,1.45c1.97,1.52,3.95,3.04,5.92,4.57
					c2.92,2.25,6.18,5.48,5.1,9c-0.54,1.76-2.12,3.66-1.07,5.18c1.11,1.59,3.78,0.43,4.62-1.31c0.84-1.75,0.78-3.85,1.78-5.51
					c1.41,1.48,2.83,2.97,4.24,4.45c-1.07-6.26-3.86-12.22-8-17.05c1.73-1.37,4.4-0.56,5.92,1.03c1.52,1.59,2.24,3.76,3.22,5.73
					c1.66,3.34,4.15,6.26,7.19,8.42c0.63,0.44,1.33,0.87,2.1,0.83c1.88-0.11,2.39-2.6,2.51-4.48c0.12-1.88,1.21-4.35,3.03-3.87
					c1.19,3.96,3.57,7.68,7.08,9.87c3.51,2.19,8.22,2.63,11.81,0.56c6.38-3.69,6.63-12.76,5.23-20
					c-2.24-11.54-6.83-22.94-15.07-31.31c-8.25-8.37-23.75-25.01-35.21-22.4"
                />
              </g>
              <g clipPath="url(#SVGID_2_)">
                <linearGradient
                  id="SVGID_5_"
                  gradientUnits="userSpaceOnUse"
                  x1="2091.6682"
                  y1="1025.074"
                  x2="2274.7307"
                  y2="1303.3291"
                >
                  <stop offset="0" style={{ stopColor: '#BADB72' }} />
                  <stop offset="0.9964" style={{ stopColor: '#7ECF7E' }} />
                </linearGradient>
                <path
                  fill="url(#SVGID_5_)"
                  d="M2205.47,1092.86c-6.39-6.58-18.45-0.44-26.31-5.16c-2.21-1.33-3.88-3.43-6.08-4.79
					c-2.2-1.36-5.43-1.74-7.1,0.22c-0.47,0.56-0.77,1.24-1.17,1.85c-2.94,4.52-9.73,3.48-14.89,1.91c-3.58-1.09-7.85-3.02-8.03-6.75
					c-0.07-1.35,0.47-2.7,0.27-4.04c-0.48-3.23-4.81-4.36-7.9-3.3c-3.08,1.06-5.55,3.46-8.57,4.67c-4.98,1.99-10.57,0.52-15.93,0.38
					s-11.8,2.14-12.71,7.42c-0.25,1.44-0.04,2.99-0.66,4.32c-0.68,1.47-2.19,2.33-3.58,3.17c-6.89,4.16-12.71,10.06-16.79,17
					c1.32,2.06,5.71,0.18,6.45,2.52c0.43,1.37-1.04,2.49-2.13,3.43c-4.96,4.29-3.91,12.24-1.55,18.37c2.09,5.42,4.97,10.7,9.4,14.47
					c4.43,3.76,10.62,5.8,16.21,4.18c3.37-0.98,6.24-3.16,9.37-4.76c3.13-1.6,6.93-2.6,10.1-1.09c2.21,1.05,3.78,3.18,6.01,4.18
					c4.38,1.95,11.21-0.16,13.04,4.26c1.28,3.08-1.56,6.34-1.66,9.67c-0.09,3.15,2.22,5.78,4.28,8.17c3.36,3.9,6.46,8.15,8.11,13.03
					c1.65,4.88,1.72,10.48-0.78,14.98c-2.15,3.87-6.19,7.94-4.26,11.91c0.71,1.46,2.11,2.44,3.05,3.76
					c3.08,4.31,0.48,10.62,2.66,15.45c1.2,2.67,3.75,4.58,4.82,7.3c1,2.54,0.58,5.38,0.69,8.11c0.11,2.73,1.07,5.81,3.59,6.86
					c2.01,0.84,4.32,0.08,6.26-0.92c6.55-3.41,11.33-9.53,14.63-16.14s5.27-13.77,7.57-20.79c10.19-31.09,26.96-59.85,35.54-91.42
					c2.01-7.4,3.53-15.45,0.77-22.61s-11.39-12.52-18.3-9.18"
                />
              </g>
              <g clipPath="url(#SVGID_2_)">
                <linearGradient
                  id="SVGID_6_"
                  gradientUnits="userSpaceOnUse"
                  x1="2102.2866"
                  y1="1011.0372"
                  x2="2133.2866"
                  y2="1049.0371"
                >
                  <stop offset="0" style={{ stopColor: '#BADB72' }} />
                  <stop offset="0.9964" style={{ stopColor: '#7ECF7E' }} />
                </linearGradient>
                <path
                  fill="url(#SVGID_6_)"
                  d="M2121.34,1034.59c-0.57,1.53-1.19,3.15-2.5,4.13c-1.31,0.98-3.51,0.93-4.28-0.51
					c-0.27-0.51-0.33-1.1-0.38-1.67c-0.54-6.2-1.08-12.4-1.62-18.61c-0.04-0.45-0.08-0.93,0.08-1.35c0.41-1.12,1.99-1.4,3.05-0.84
					c1.06,0.56,1.7,1.65,2.3,2.68c3.2,5.61,6.4,12.71,2.89,18.14"
                />
              </g>
              <g clipPath="url(#SVGID_2_)">
                <linearGradient
                  id="SVGID_7_"
                  gradientUnits="userSpaceOnUse"
                  x1="2094.8862"
                  y1="1018.1533"
                  x2="2125.8862"
                  y2="1056.1532"
                >
                  <stop offset="0" style={{ stopColor: '#BADB72' }} />
                  <stop offset="0.9964" style={{ stopColor: '#7ECF7E' }} />
                </linearGradient>
                <path
                  fill="url(#SVGID_7_)"
                  d="M2107.78,1029.41c-3.26-0.24-5.54,4.45-3.35,6.87c2.19,2.42,7.07,0.66,7.22-2.6
					c0.16-3.26-4.5-5.49-6.95-3.33"
                />
              </g>
            </g>
            <g opacity="0.46">
              <path
                opacity="0.53"
                d="M2189.97,1133.66c0-91.71-74.34-166.05-166.05-166.05c-91.71,0-166.05,74.34-166.05,166.05
				c0,91.71,74.34,166.05,166.05,166.05C2115.62,1299.71,2189.97,1225.37,2189.97,1133.66z"
              />

              <ellipse
                transform="matrix(0.7071 -0.7071 0.7071 0.7071 -193.6101 1766.688)"
                opacity="0.18"
                fill="#FFFFFF"
                cx="2035.78"
                cy="1117.05"
                rx="135.21"
                ry="135.21"
              />
              <path
                opacity="0.18"
                fill="#FFFFFF"
                d="M2147.27,1088.59c0-53.72-43.55-97.26-97.26-97.26c-53.71,0-97.26,43.54-97.26,97.26
				c0,53.71,43.55,97.26,97.26,97.26C2103.72,1185.85,2147.27,1142.3,2147.27,1088.59z"
              />
            </g>
          </g>
          <g id="earth__clouds">
            <path
              id="earth__cloud-6"
              fill="#FFFFFF"
              d="M1934.62,1053.68c0.41,0,0.81,0.04,1.2,0.1c2.33-5.92,8.65-10.17,16.08-10.17
			c7.08,0,13.15,3.85,15.73,9.34c1.06-0.39,2.22-0.62,3.45-0.62c4.71,0,8.52,3.21,8.52,7.16c0,0.46-0.06,0.91-0.15,1.34h-52.4
			C1927.05,1056.88,1930.44,1053.68,1934.62,1053.68z"
            />
            <path
              id="earth__cloud-5"
              fill="#FFFFFF"
              d="M1995.87,1295.77c0-6.05,4.9-10.95,10.95-10.95c0.59,0,1.17,0.06,1.74,0.15
			c3.37-9.06,12.51-15.56,23.25-15.56c10.24,0,19.02,5.9,22.74,14.29c1.53-0.6,3.21-0.94,4.99-0.94c5.25,0,9.72,2.92,11.5,7.03
			c1.26-1.01,2.84-1.62,4.57-1.62c4.05,0,7.34,3.29,7.34,7.34c0,0.12-0.01,0.23-0.02,0.35L1995.87,1295.77z"
            />
            <path
              id="earth__cloud-4"
              fill="#FFFFFF"
              d="M2151.09,1148.75c-0.99,0.09-1.94,0.29-2.87,0.55
			c-2.63-8.36-10.81-14.05-19.89-13.19c-2.13,0.2-4.14,0.77-6,1.6c-4.93-7.83-13.96-12.68-23.8-11.74
			c-10.81,1.03-19.36,8.73-22.02,18.63c-2.82-1.2-6-1.76-9.31-1.47c-9.44,0.83-16.51,8.11-16.5,16.71l117.31,0.08
			C2165.75,1152.83,2158.8,1148.02,2151.09,1148.75z"
            />
            <path
              id="earth__cloud-3"
              fill="#DCEBF0"
              d="M2098.92,1159.92l-68.58-0.11c0,0,1.13-10.18,19.09-9.89
			c0,0,2.76-15.45,18.15-15.42c15.38,0.03,18.32,16.26,18.32,16.26S2098.84,1149.07,2098.92,1159.92z"
            />
            <path
              id="earth__cloud-2"
              fill="#FFFFFF"
              d="M1863.59,1202.98c1.23,0,2.39,0.22,3.45,0.62c2.57-5.49,8.65-9.34,15.73-9.34
			c3.58,0,6.89,0.99,9.64,2.68c2.15-5.38,7.41-13.91,19.21-13.93c17.23-0.03,20.33,17.28,20.33,17.28
			c20.12-0.33,21.38,11.08,21.38,11.08l-45.71,0.07c0,0.02,0,0.03,0,0.05h-52.4c-0.1-0.44-0.15-0.88-0.15-1.34
			C1855.07,1206.18,1858.88,1202.98,1863.59,1202.98z"
            />
            <path
              id="earth__cloud-1"
              fill="#DCEBF0"
              d="M2068.95,1288.68c0.39,0,0.77,0.04,1.14,0.1c2.21-5.94,8.2-10.2,15.25-10.2
			c6.72,0,12.47,3.87,14.92,9.37c1-0.39,2.11-0.62,3.27-0.62c4.46,0,8.08,3.22,8.08,7.19c0,0.46-0.05,0.91-0.15,1.35h-49.7
			C2061.77,1291.9,2064.98,1288.68,2068.95,1288.68z"
            />
          </g>
        </g>
        <Branch0 />
        <BranchOwady />
        <BranchZwierzeta />
        <BranchPtaki />
        <BranchRosliny1 />
        <BranchRosliny2 />
        <BranchLudzie />
        <BranchVehicle1 />
        <BranchVehicle2 />
      </svg>
    </>
  )
}

export default Svg
