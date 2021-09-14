import React, { useEffect, useState, useRef } from 'react'
import classNames from 'classnames'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin)

export const EcoSystem = ({ className }) => {
  const svgEl = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: svgEl.current,
        toggleActions: 'play pause resume reset',
        onUpdate: ({ isActive }) => setInView(isActive),
      },
      defaults: {
        duration: 25,
        repeat: -1,
        ease: 'none',
      },
    })

    const orbit1MotionPath = {
      path: '#EcoSystem__orbit-1',
      align: '#EcoSystem__orbit-1',
      alignOrigin: [0.5, 0.5],
    }

    const orbit2MotionPath = {
      path: '#EcoSystem__orbit-2',
      align: '#EcoSystem__orbit-2',
      alignOrigin: [0.5, 0.5],
    }

    tl.to(
      '#EcoSystem__planet',
      {
        motionPath: { ...orbit2MotionPath, start: 0.15, end: 1.15 },
        reversed: true,
      },
      0
    )

    // tl.to(
    //   '#EcoSystem__planet-2',
    //   {
    //     motionPath: { ...orbit2MotionPath, start: 0.8, end: 1.8 },
    //     reversed: true,
    //   },
    //   0
    // )

    tl.to(
      '#EcoSystem__planet-3',
      { motionPath: { ...orbit1MotionPath, start: 0.15, end: 1.15 } },
      0
    )

    tl.to(
      '#EcoSystem__planet-4',
      { motionPath: { ...orbit1MotionPath, start: 0.85, end: 1.85 } },
      0
    )

    tl.to(
      '#EcoSystem__planet-5',
      {
        motionPath: { ...orbit2MotionPath, start: 0.25, end: 1.25 },
        reversed: true,
      },
      0
    )

    // tl.to(
    //   '#EcoSystem__planet-6',
    //   { motionPath: { ...orbit1MotionPath, start: 0.5, end: 1.5 } },
    //   0
    // )

    tl.to(
      '#EcoSystem__planet-7',
      {
        motionPath: { ...orbit2MotionPath, start: 0.8, end: 1.8 },
        reversed: true,
      },
      0
    )
  }, [])

  return (
    <svg
      ref={svgEl}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 497.9 386.91"
      className={classNames('EcoSystem', { inView: inView }, className)}
    >
      <defs>
        <style>
          {
            '.EcoSystem__cls-9{fill:none;stroke-width:3px}.EcoSystem__cls-3,.EcoSystem__cls-8{fill:#c4aa60}.EcoSystem__cls-3,.EcoSystem__cls-6,.EcoSystem__cls-7{fill-rule:evenodd}.EcoSystem__cls-4,.EcoSystem__cls-7{fill:#fff}.EcoSystem__cls-4,.EcoSystem__cls-9{stroke:#c4aa60}.EcoSystem__cls-4{stroke-width:2px}.EcoSystem__cls-6{fill:#dfc57a}'
          }
        </style>
      </defs>
      <g id="EcoSystem__solar-system">
        <path
          id="EcoSystem__orbit-1"
          d="M291.83 288.53C394.39 234 456.92 151.09 431.51 103.31S302.35 61 199.79 115.49 34.7 252.92 60.12 300.71 189.28 343 291.83 288.53z"
          strokeLinejoin="round"
          strokeDasharray="3 8"
          stroke="#291424"
          strokeLinecap="round"
          fill="none"
          strokeWidth={3}
        />
        <path
          id="EcoSystem__orbit-2"
          d="M295.65 108.31C184.58 49.27 72.23 43.37 44.71 95.12S84.9 236.68 196 295.71s223.42 64.94 251 13.19-40.28-141.56-151.35-200.59z"
          strokeDasharray="4 8"
          stroke="#291424"
          strokeLinecap="round"
          fill="none"
          strokeWidth={3}
        />
        <g id="EcoSystem__asteroids">
          <circle
            className="EcoSystem__cls-8"
            cx={449.57}
            cy={69.27}
            r={3.92}
          />
          <ellipse
            className="EcoSystem__cls-9"
            cx={217.67}
            cy={370.1}
            rx={15.32}
            ry={15.31}
          />
          <circle className="EcoSystem__cls-9" cx={11.4} cy={9.34} r={7.84} />
          <circle
            className="EcoSystem__cls-9"
            cx={446.03}
            cy={17.18}
            r={7.84}
          />
          <circle cx={185.25} cy={144.67} r={5.7} fill="#10b37d" />
          <circle className="EcoSystem__cls-8" cx={3.92} cy={145.03} r={3.92} />
        </g>
        <g id="EcoSystem__sun">
          <ellipse
            className="EcoSystem__cls-8"
            cx={246.17}
            cy={202.01}
            rx={33.84}
            ry={33.83}
          />
          <path
            className="EcoSystem__cls-7"
            d="M255.45 208c-5.66 0-8.09-2.77-10.24-5.21l-.14-.15c-1.67-1.9-3.26-3.71-6.43-4.26a2.5 2.5 0 01-2.09-2.47c5.66 0 8.1 2.77 10.25 5.21l.13.15c1.67 1.9 3.27 3.71 6.43 4.26a2.5 2.5 0 012.09 2.47"
          />
          <path
            className="EcoSystem__cls-7"
            d="M236.55 208c5.66 0 8.1-2.77 10.25-5.21l.13-.15c1.67-1.9 3.27-3.71 6.43-4.26a2.5 2.5 0 002.09-2.47c-5.66 0-8.09 2.77-10.24 5.21l-.14.15c-1.67 1.9-3.26 3.71-6.43 4.26a2.5 2.5 0 00-2.09 2.47"
          />
        </g>
        <path
          id="EcoSystem__planet"
          className="EcoSystem__cls-3"
          d="M164.64 44.65l13.88 10.08a6 6 0 012.18 6.71l-5.3 16.3a6 6 0 01-5.7 4.15h-17.16a6 6 0 01-5.7-4.15l-5.3-16.3a6 6 0 012.18-6.71l13.87-10.08a6 6 0 017.05 0z"
        />
        {/* <g id="EcoSystem__planet-2" data-name="planet">
          <ellipse
            className="EcoSystem__cls-4"
            cx={449.52}
            cy={263.55}
            rx={33.84}
            ry={33.83}
          />
          <image
            width={800}
            height={450}
            transform="matrix(.12 0 0 .12 401.9 236.7)"
            xlinkHref="data:image/png;base64,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"
            style={{
              isolation: 'isolate',
            }}
          />
        </g> */}
        <g id="EcoSystem__planet-3" data-name="planet">
          <ellipse
            className="EcoSystem__cls-4"
            cx={341.52}
            cy={64.55}
            rx={33.84}
            ry={33.83}
          />
          <path
            className="EcoSystem__cls-3"
            d="M341.81 49.66l-.23.08-5.34 2.26a.47.47 0 00-.26.26q-1.11 2.68-2.17 5.39a.54.54 0 000 .43c.74 1.77 1.49 3.52 2.25 5.28a.75.75 0 00.33.33c1.77.72 3.53 1.43 5.31 2.12a.77.77 0 00.56 0c1.73-.73 3.47-1.46 5.19-2.21a.8.8 0 00.37-.38q1.08-2.64 2.13-5.29a.76.76 0 000-.47c-.73-1.74-1.48-3.47-2.22-5.21a.69.69 0 00-.43-.42l-5.21-2.08-.28-.11zm.19-1.85l4.3 1.75 2.29.92a.86.86 0 01.53.51c.9 2.12 1.81 4.23 2.7 6.35a1.05 1.05 0 010 .7c-.85 2.16-1.71 4.32-2.6 6.47a.9.9 0 01-.45.45q-3.19 1.4-6.42 2.74a1 1 0 01-.64 0l-6.51-2.61a1 1 0 01-.45-.45c-.92-2.12-1.82-4.25-2.74-6.37a.87.87 0 010-.74c.86-2.13 1.71-4.27 2.59-6.4a1 1 0 01.52-.51c2.11-.92 4.23-1.82 6.35-2.73l.18-.09zM343.46 77.73a12.52 12.52 0 01-1.47-.46 3.75 3.75 0 01-2.19-4.11 4 4 0 013.58-3.22 4.18 4.18 0 014.2 1.72l-1.52.77a2.46 2.46 0 00-4.44 1.21 2.22 2.22 0 001.11 2.2 2.7 2.7 0 002.56.09c.32-.13.5-.31.43-.66a2.81 2.81 0 010-.41h-2.31v-1.5h4.12V76a.69.69 0 01-.28.61 4.62 4.62 0 01-2.39 1.1.86.86 0 00-.23.06zM354.4 73.79a2.2 2.2 0 00-2-2.37 2.12 2.12 0 00-1.26.27A2.28 2.28 0 00350 74a2.19 2.19 0 002.2 2.18 2.11 2.11 0 00.86-.18 2.27 2.27 0 001.33-2.24zm-2.59 3.94a9.47 9.47 0 01-1.38-.4 3.67 3.67 0 01-2.14-3.56 3.73 3.73 0 012.57-3.66 4 4 0 014.47 1.27 3.93 3.93 0 01-.69 5.51 4 4 0 01-1.85.79.33.33 0 00-.14 0zM335.07 73.38h1.84a.88.88 0 00.82-.94.13.13 0 010-.06.88.88 0 00-.83-.91h-1.82zm2.79 1.38l1.88 3h-1.95c-.07 0-.15-.11-.2-.19-.45-.73-.91-1.46-1.33-2.21a.58.58 0 00-.66-.35h-.54v2.7h-1.73v-7.77h.13c1.21 0 2.42-.06 3.62 0a2.5 2.5 0 012.47 2.53 2.54 2.54 0 01-.41 1.34 2.4 2.4 0 01-1.28 1zM326.91 69.89h5.7v1.45a1 1 0 01-.3.11h-3.62v1.32c0 .24.19.18.32.18h3.51v1.57h-3.6c-.08 0-.22.1-.22.15v1.48h3.91v1.56h-5.68z"
          />
          <path
            className="EcoSystem__cls-3"
            d="M338.32 61.35v-1.49a.58.58 0 01.18-.3l2.34-2.56-.44-.45-1.9-2a.51.51 0 01-.17-.3v-1.46h6.38v1.75H341l2.31 2.46-2.41 2.62h3.83v1.76z"
          />
        </g>
        <g id="EcoSystem__planet-4" data-name="planet">
          <ellipse
            className="EcoSystem__cls-4"
            cx={118.08}
            cy={330.81}
            rx={33.84}
            ry={33.83}
          />
          <path
            className="EcoSystem__cls-3"
            d="M118.05 325.86h1.8a.69.69 0 00.24-.05 17 17 0 013.25-1 10.57 10.57 0 012.63-.25 6.21 6.21 0 012.36.51 3.23 3.23 0 01.49.25 15.5 15.5 0 012 1.43 5.91 5.91 0 011 1 2 2 0 01.33.66.49.49 0 010 .17s0 .06-.05.06h-.21a10.65 10.65 0 00-2.25.27l-.48.15a8.07 8.07 0 01-3 .48 7.9 7.9 0 01-4.13-1.35 9.66 9.66 0 01-2-1.83.23.23 0 00-.19-.09h-3.58a.17.17 0 00-.18.1 1 1 0 01-1.39.27c-.09-.07-.09-.07-.18 0l-2.69 1.89a.18.18 0 00-.09.19.91.91 0 01-.53.9.94.94 0 01-1.26-.42 1.46 1.46 0 01-.07-.19.74.74 0 010-.21c0-.08 0-.1-.1-.12l-1.67-.59-2-.7a.17.17 0 00-.21.05.94.94 0 01-1.59-.93 1 1 0 01.82-.65.88.88 0 01.86.38 1 1 0 01.17.63c0 .11 0 .11.09.14l3.62 1.27h.16a1 1 0 011.4-.17l.09.08c.06.07.06.07.14 0l1.83-1.28.82-.58c.09-.06.09-.06.06-.15a1 1 0 01.84-1.13.94.94 0 01.41 0c.1.06.1.06.19 0l2-1.77a.25.25 0 00.1-.21 8.63 8.63 0 01.28-2.15 7 7 0 013-4.13 7.42 7.42 0 011.46-.74 5.55 5.55 0 001.15-.62c.31-.21.6-.43.89-.66.09-.08.09-.08.16 0a1.37 1.37 0 01.15.38 3.42 3.42 0 01.06.78 9.84 9.84 0 01-.41 2.28 6.51 6.51 0 01-.36 1.05 5.36 5.36 0 01-1.08 1.5 10 10 0 01-2.56 1.76 14.46 14.46 0 01-2.36.93.77.77 0 00-.25.14l-2 1.71-.07.06a.07.07 0 000 .11.75.75 0 01.1.32c0 .05 0 .07.07.07H118zM124.21 336.63v1.94a.19.19 0 00.06.16 7.68 7.68 0 001.22.9 4.58 4.58 0 003.29.61 3.1 3.1 0 002-1.19 4.39 4.39 0 00.85-2.34 6.63 6.63 0 000-1.26 4.34 4.34 0 00-.35-1.46 3.19 3.19 0 00-1.82-1.8 3.89 3.89 0 00-2-.17 3.76 3.76 0 00-2 1.06 6.2 6.2 0 00-1.08 1.42.38.38 0 000 .21v1.92m-.11-3.72c0-.06.06-.09.08-.13a5.28 5.28 0 011.15-1.21 4.33 4.33 0 012.21-.85 5.89 5.89 0 012.25.21 4.12 4.12 0 012.36 1.73 5.71 5.71 0 01.88 2.24 8.13 8.13 0 01.07 1.91 5.74 5.74 0 01-.92 2.75 4.37 4.37 0 01-3.05 2 6 6 0 01-3-.22 4.92 4.92 0 01-1.9-1.2h-.07V347a.69.69 0 01-.61.73.84.84 0 01-.7-.17.5.5 0 01-.22-.45v-14.2a1.22 1.22 0 000-.27.43.43 0 00-.34-.34h-1.64a.6.6 0 01-.54-.46.67.67 0 01.22-.69.59.59 0 01.4-.15h1.74a1.81 1.81 0 01.51.08 1.33 1.33 0 011 .93 2.52 2.52 0 01.11.77.43.43 0 000 .16M109.69 336.25a2.29 2.29 0 000 .37 4.19 4.19 0 00.32 1.44 3.72 3.72 0 002 2.05 4.21 4.21 0 002.43.21 3.66 3.66 0 002.69-2.07 4.17 4.17 0 00.39-1.43 5.39 5.39 0 00-.13-2 3.84 3.84 0 00-2-2.47A3.74 3.74 0 00114 332a4.13 4.13 0 00-1.71.19 3.77 3.77 0 00-2.2 2 4.76 4.76 0 00-.41 2.07m-1.57 0a5.67 5.67 0 01.52-2.5 5.07 5.07 0 013.82-2.93 6.43 6.43 0 012.76.08 5.17 5.17 0 013.7 3.65 6.75 6.75 0 01.2 1.9 5.85 5.85 0 01-.3 1.75 5.14 5.14 0 01-3.63 3.32 6.74 6.74 0 01-2.28.15 5.36 5.36 0 01-2.07-.63 5.14 5.14 0 01-2.55-3.36 6.28 6.28 0 01-.17-1.43M99.38 335.74v-3.09c0-.15 0-.13-.14-.13h-1.61a.6.6 0 01-.51-.61.64.64 0 01.54-.66h1.63c.13 0 .12 0 .12-.11v-3.72a.7.7 0 01.7-.7.84.84 0 01.44.07.58.58 0 01.4.58v3.72c0 .16 0 .16.16.16H106a.61.61 0 01.45.58 1.22 1.22 0 010 .27.58.58 0 01-.51.4h-4.87c-.1 0-.1 0-.1.1v5.76a3.27 3.27 0 00.11.88 1.45 1.45 0 001.1 1.07 4.78 4.78 0 001.25.12 5.52 5.52 0 002.6-.72h.08a.56.56 0 01.43-.12.61.61 0 01.58.43.7.7 0 01-.32.78 7.65 7.65 0 01-4.32.9 5.67 5.67 0 01-1.23-.22 2.35 2.35 0 01-1.66-1.67 5.07 5.07 0 01-.19-1.45v-2.59M136.81 331.12v8.68a.81.81 0 000 .22.41.41 0 00.28.34 1 1 0 00.38.07h1a.62.62 0 01.35.1.52.52 0 01.26.47v.16a.51.51 0 01-.45.52h-1.46a2.69 2.69 0 01-1-.22 1.42 1.42 0 01-.81-1.17 2.41 2.41 0 010-.38v-16.79c0-.16 0-.16-.16-.16h-1.74a.51.51 0 01-.39-.46.61.61 0 01.42-.75H136a.69.69 0 01.46.13.63.63 0 01.28.55v8.74"
          />
        </g>
        <g id="EcoSystem__planet-5" data-name="planet">
          <ellipse
            className="EcoSystem__cls-4"
            cx={42.08}
            cy={106.81}
            rx={33.84}
            ry={33.83}
          />
          <path
            className="EcoSystem__cls-3"
            d="M58.6 108.25a1.83 1.83 0 00-.05-.47 1.51 1.51 0 00-1.08-1.23 1.41 1.41 0 00-1.55.45 1.86 1.86 0 00-.42 1.45 1.55 1.55 0 001.55 1.55 1.57 1.57 0 00.64-.14 1.67 1.67 0 00.91-1.61m-2.4 3.11a3.08 3.08 0 01-2.31-2.53 3.15 3.15 0 012.36-3.71 3.28 3.28 0 012.82.59 3 3 0 011.17 2.35 3.12 3.12 0 01-.88 2.46 3 3 0 01-1.89.91 10.81 10.81 0 01-1.27-.07M64.13 111.42a4.31 4.31 0 01-1.67-.57c-.08 0-.09-.09-.05-.18l.45-1.08c0-.09.06-.09.14 0a3.32 3.32 0 002.17.52 1 1 0 00.34-.09.43.43 0 00.25-.38.41.41 0 00-.25-.38 2.37 2.37 0 00-.58-.21c-.44-.12-.88-.2-1.3-.36a2.19 2.19 0 01-.58-.32 1.74 1.74 0 01-.46-2 1.92 1.92 0 011.1-1.08 3.54 3.54 0 011.58-.23 4.26 4.26 0 011.75.47c.09 0 .11.08.07.19q-.23.54-.42 1.08c0 .08-.06.09-.13 0a3.05 3.05 0 00-1.7-.42 1.59 1.59 0 00-.38.07.64.64 0 00-.22.14.4.4 0 00-.06.58.53.53 0 00.14.11 3.2 3.2 0 00.74.24 12.34 12.34 0 011.19.33 1.92 1.92 0 01.73.49 1.32 1.32 0 01.35.67v.83a1.75 1.75 0 01-.61 1 2.64 2.64 0 01-1.13.51 8.9 8.9 0 01-1.46 0"
          />
          <path
            className="EcoSystem__cls-6"
            d="M17.51 107.46v-5.86c0-.11 0-.12.14-.12h2v6h-2.1z"
          />
          <path
            className="EcoSystem__cls-3"
            d="M25.29 101.59c1.37 1.26 2.75 2.56 4.17 3.74l.08.1h-.26c-.55 0-1.09.31-1.63.31l-.14-.15c-.58-.65-1.8-1.31-2.39-2s-1.13-1.35-1.74-2c0 0 0-.09.06-.09h1.62a.92.92 0 01.23.09z"
          />
          <path
            className="EcoSystem__cls-7"
            d="M19.65 101.46l.9.9 2.86 2.87s.05.08.1.08a.44.44 0 00.08.11c.61.6 1.21 1.21 1.81 1.82 0 0 0 .06.09 0v-3.82l1.82 1.83.14.14v6c-.3-.27-.57-.57-.86-.86l-2.91-2.92-.1-.09-.92-1-.95-1s0-.07-.08 0 0 .06 0 .09v3.56a.43.43 0 010 .16l-2-2v-6"
          />
          <path
            className="EcoSystem__cls-3"
            d="M40.41 107.84v.72c0 .24 0 .12.11.11h.64a1.35 1.35 0 00.49 0 .69.69 0 00.49-.42.81.81 0 00-.36-1.09.79.79 0 00-.26-.08h-1.05c-.07 0-.06 0-.06.09v.75m3.45 3.59h-1.3a.49.49 0 01-.54-.29c-.22-.39-.48-.76-.73-1.14a.17.17 0 00-.14-.09h-.65c-.07 0-.09 0-.09.1v1.31c0 .09 0 .11-.11.11H39c-.07 0-.1 0-.09-.1v-5.49c0-.07 0-.1.09-.1h2.52a2.9 2.9 0 011.16.27 2 2 0 011.1 1.94 1.9 1.9 0 01-1 1.65c-.08 0-.05.07 0 .12l1 1.59.07.12M31.75 108.58v-2.72c0-.1 0-.12.14-.12h4.6c.11 0 .14 0 .13.12v1c0 .09 0 .12-.12.12h-2.87c-.12 0-.15 0-.14.14s0 .46 0 .69 0 .13.15.13h2.48c.09 0 .13 0 .13.11v1c0 .09 0 .11-.12.11h-2.51c-.11 0-.13 0-.13.12v.8c0 .1 0 .12.14.12h3c.11 0 .14 0 .14.13v1c0 .07 0 .1-.11.1H31.9c-.1 0-.12 0-.12-.12v-2.74M49.26 109.44l1-2.28c.19-.44.38-.88.56-1.32a.13.13 0 01.15-.1h1.38c.08 0 .12 0 .07.1-.78 1.83-1.57 3.66-2.35 5.5a.13.13 0 01-.15.1h-1.39a.13.13 0 01-.13-.09c-.78-1.84-1.57-3.67-2.35-5.51 0-.08 0-.1.07-.1h1.53a.12.12 0 01.14.09c.48 1.16 1 2.32 1.45 3.48v.13"
          />
          <path
            className="EcoSystem__cls-6"
            d="M27.48 105.6v-.16h2.05v5.88c0 .09 0 .13-.09.13h-2z"
          />
          <path
            className="EcoSystem__cls-3"
            d="M21.61 109.44c.69.68 1.46 1.18 2.05 1.86a.07.07 0 00.08.07h-2.2a.11.11 0 01-.11 0c-1.22-1.4-2.69-2.49-3.92-3.89h2.09c.77.69 1.33 1.28 2.01 1.96z"
          />
          <path
            className="EcoSystem__cls-6"
            d="M23.64 111.31l-2-1.89v-3.8h.08c.34.31.69.69 1 1s.66.69 1 1v3.69a.1.1 0 01-.08 0zM25.49 103.62v3.67h-.09c-.65-.6-1.27-1.31-1.91-1.91a.28.28 0 01-.09-.1v-3.56a.33.33 0 010-.14h.1l2 1.89s-.01.1-.01.15z"
          />
        </g>
        {/* <g id="EcoSystem__planet-6">
          <ellipse
            className="EcoSystem__cls-4"
            cx={302.25}
            cy={280.88}
            rx={33.84}
            ry={33.83}
          />
          <path
            className="EcoSystem__cls-8"
            d="M287.86 299.83a1 1 0 011.08 1h.82c0-1.13-.83-1.68-1.91-1.68-1.32 0-2.09.72-2.09 2.24s.77 2.24 2.09 2.24c1.1 0 1.91-.52 1.91-1.66H289c0 .63-.44 1-1.11 1-.87 0-1.27-.48-1.27-1.49v-.12c-.03-1.02.38-1.53 1.24-1.53zM292 299.22l-1.68 4.33h.83l.34-.94h2l.35.94h.87l-1.71-4.33zm-.25 2.71l.44-1.19c.09-.23.24-.74.27-.82 0 .09.19.6.27.82l.44 1.19zM299.14 300.54a1.22 1.22 0 00-1.4-1.31h-2.28v4.33h.81v-1.67h1.33l.82 1.67h.89l-.93-1.79a1.23 1.23 0 00.76-1.23zm-1.47.66h-1.4v-1.29h1.4a.58.58 0 01.66.63.6.6 0 01-.66.66zM302 299.22h-1.72v4.33H302a2.17 2.17 0 000-4.33zm1.27 2.23c0 .95-.46 1.41-1.28 1.41h-.92v-2.95h.93c.82 0 1.28.47 1.28 1.41zM306.19 299.22l-1.68 4.33h.83l.34-.94h2l.35.94h.87l-1.68-4.33zm-.26 2.71l.45-1.19c.09-.23.24-.74.27-.82 0 .09.2.6.28.82l.44 1.19zM312.58 301.8v.34s-.14-.24-.21-.34l-1.89-2.59h-.77v4.33h.78V301v-.35s.12.21.22.36l1.89 2.6h.76v-4.33h-.78zM316.56 299.15a2.24 2.24 0 102.18 2.24 2 2 0 00-2.18-2.24zm1.36 2.3c0 1-.47 1.49-1.36 1.49s-1.34-.49-1.34-1.49v-.13c0-1 .47-1.49 1.34-1.49s1.36.51 1.36 1.49zM293.67 275.56a2.57 2.57 0 002.41 2.71h.16a2.56 2.56 0 10-2.57-2.71zM284.13 274.91a.83.83 0 00-.88.78.83.83 0 10.88-.78zM293.51 260.71a.83.83 0 00-.75-1.48.83.83 0 10.75 1.48zM296.1 265.24A1.27 1.27 0 10295 263a1.27 1.27 0 101.14 2.28zM287.37 268.35a1.05 1.05 0 101.15-1.76 1.07 1.07 0 00-1.46.31 1 1 0 00.31 1.45zM288.92 274.45a1.26 1.26 0 00-1.35 1.2 1.28 1.28 0 102.55.14 1.26 1.26 0 00-1.2-1.34zM287.51 283a1.05 1.05 0 101.42.47 1.06 1.06 0 00-1.42-.47zM292.48 271.8a1.5 1.5 0 10-.44-2.08 1.48 1.48 0 00.44 2.08zM308.23 265.14a1.28 1.28 0 10-.36-1.77 1.27 1.27 0 00.36 1.77zM310.86 260.62a.83.83 0 00.9-1.39.82.82 0 00-1.14.24.81.81 0 00.24 1.15zM308.44 273.13a2.55 2.55 0 00-2.7 2.41 2.58 2.58 0 002.41 2.71h.16a2.57 2.57 0 002.55-2.42 2.58 2.58 0 00-2.42-2.7zM296.94 271.63a2.56 2.56 0 002.3 1.41 2.4 2.4 0 001.14-.28 2.56 2.56 0 00-1.15-4.84 2.53 2.53 0 00-1.15.27 2.56 2.56 0 00-1.14 3.44zM317 268.35a1 1 0 00.47-1.41 1.06 1.06 0 10-.47 1.41zM310.51 269.17a1.5 1.5 0 001.35 2.68 1.5 1.5 0 10-1.35-2.68zM302.15 260.24a1.06 1.06 0 10-1-1.12 1.06 1.06 0 001 1.12zM302.14 266.87a1.51 1.51 0 10-1.41-1.6 1.51 1.51 0 001.41 1.6zM294 282.22a1.5 1.5 0 10-2-.67 1.5 1.5 0 002 .67zM303.12 269.06a2.57 2.57 0 002.14 4 2.52 2.52 0 002.13-1.16 2.57 2.57 0 00-.74-3.55 2.54 2.54 0 00-1.39-.41 2.5 2.5 0 00-2.14 1.12zM307.57 279.76a2.56 2.56 0 00-4.72.34 2.57 2.57 0 00.15 2 2.54 2.54 0 002.29 1.41 2.6 2.6 0 001.15-.28 2.56 2.56 0 001.13-3.47zM312 279.58a1.51 1.51 0 10.44 2.09 1.5 1.5 0 00-.44-2.09zM316.94 275.73a1.28 1.28 0 00-1.21-1.35 1.28 1.28 0 00-.14 2.56 1.28 1.28 0 001.35-1.21zM320.48 274.83a.83.83 0 10.78.87.83.83 0 00-.78-.87zM317.14 283a1.05 1.05 0 10-1.15 1.76 1.05 1.05 0 101.15-1.76zM293.65 290.76a.83.83 0 10.23 1.15.81.81 0 00-.23-1.15zM311 290.67a.83.83 0 101.12.37.83.83 0 00-1.12-.37zM301.39 282.33a2.53 2.53 0 00.37-1.93 2.55 2.55 0 00-2.5-2 2.56 2.56 0 00-1.4 4.7 2.54 2.54 0 003.53-.74zM296.28 286.25a1.28 1.28 0 10-1.41 2.14 1.28 1.28 0 001.41-2.14zM302.25 291.15a1.05 1.05 0 101 1.11 1.05 1.05 0 00-1-1.11zM302.26 284.52a1.51 1.51 0 101.41 1.59 1.51 1.51 0 00-1.41-1.59zM308.41 286.15a1.27 1.27 0 101.71.57 1.26 1.26 0 00-1.71-.57z"
          />
        </g> */}
        <g id="EcoSystem__planet-7">
          <ellipse
            className="EcoSystem__cls-4"
            cx={449.52}
            cy={263.55}
            rx={33.84}
            ry={33.83}
          />
          <path
            class="EcoSystem__cls-8"
            d="M419.82,263.19a.39.39,0,1,0,.36.41A.38.38,0,0,0,419.82,263.19Z"
          />
          <path
            class="EcoSystem__cls-8"
            d="M424.31,263.5a1.19,1.19,0,0,0,1.14,1.26h.08a1.2,1.2,0,1,0-1.22-1.26Z"
          />
          <path
            class="EcoSystem__cls-8"
            d="M419.82,263.19a.39.39,0,1,0,.36.41A.38.38,0,0,0,419.82,263.19Z"
          />
          <path
            class="EcoSystem__cls-8"
            d="M424.24,256.55a.37.37,0,0,0,.17-.51h0a.41.41,0,0,0-.53-.17.37.37,0,0,0-.17.51h0A.41.41,0,0,0,424.24,256.55Z"
          />
          <path
            class="EcoSystem__cls-8"
            d="M425.45,258.67a.6.6,0,0,0,.27-.81h0a.59.59,0,0,0-.8-.26.61.61,0,0,0-.27.8h0A.61.61,0,0,0,425.45,258.67Z"
          />
          <path
            class="EcoSystem__cls-8"
            d="M421.35,260.12A.48.48,0,0,0,422,260a.47.47,0,0,0-.15-.68h0a.48.48,0,0,0-.68.14.49.49,0,0,0,.15.68Z"
          />
          <path
            class="EcoSystem__cls-8"
            d="M422.08,263a.6.6,0,0,0-.08,1.19.61.61,0,0,0,.64-.56A.6.6,0,0,0,422.08,263Z"
          />
          <path
            class="EcoSystem__cls-8"
            d="M421.4,267a.48.48,0,0,0-.22.65h0a.48.48,0,0,0,.65.22.48.48,0,0,0,.22-.66h0A.46.46,0,0,0,421.4,267Z"
          />
          <path
            class="EcoSystem__cls-8"
            d="M423.75,261.73a.7.7,0,1,0,.78-1.17h0a.7.7,0,0,0-1,.2.68.68,0,0,0,.19,1Z"
          />
          <path
            class="EcoSystem__cls-8"
            d="M431.16,258.62a.6.6,0,0,0,.66-1h0a.61.61,0,0,0-.83.17.63.63,0,0,0,.17.83Z"
          />
          <path
            class="EcoSystem__cls-8"
            d="M432.4,256.5a.37.37,0,0,0,.54-.12.37.37,0,0,0-.12-.53h0a.38.38,0,0,0-.54.12.41.41,0,0,0,.12.53Z"
          />
          <path
            class="EcoSystem__cls-8"
            d="M431.26,262.36a1.19,1.19,0,1,0-.14,2.38h.07a1.18,1.18,0,0,0,.87-2A1,1,0,0,0,431.26,262.36Z"
          />
          <path
            class="EcoSystem__cls-8"
            d="M425.84,261.65a1.19,1.19,0,0,0,1.07.66,1.38,1.38,0,0,0,.54-.12,1.2,1.2,0,0,0,.53-1.6,1.17,1.17,0,0,0-1.07-.66,1.37,1.37,0,0,0-.53.12,1.2,1.2,0,0,0-.54,1.6Z"
          />
          <path
            class="EcoSystem__cls-8"
            d="M435.29,260.12a.48.48,0,0,0,.22-.65h0a.49.49,0,1,0-.87.44h0A.47.47,0,0,0,435.29,260.12Z"
          />
          <path
            class="EcoSystem__cls-8"
            d="M432.23,260.49a.71.71,0,0,0-.31.95h0a.72.72,0,0,0,.95.31.71.71,0,0,0,.31-.95h0A.71.71,0,0,0,432.23,260.49Z"
          />
          <path
            class="EcoSystem__cls-8"
            d="M428.3,256.33a.47.47,0,0,0,.51-.46.48.48,0,0,0-.46-.53.47.47,0,0,0-.51.46A.52.52,0,0,0,428.3,256.33Z"
          />
          <path
            class="EcoSystem__cls-8"
            d="M428.3,259.42a.7.7,0,1,0-.66-.73A.69.69,0,0,0,428.3,259.42Z"
          />
          <path
            class="EcoSystem__cls-8"
            d="M424.46,266.61a.71.71,0,0,0,.31-.95h0a.71.71,0,0,0-1.26.64h0A.72.72,0,0,0,424.46,266.61Z"
          />
          <path
            class="EcoSystem__cls-8"
            d="M428.76,260.44a1.17,1.17,0,0,0,.34,1.65h0a1.21,1.21,0,0,0,1.68-.34,1.19,1.19,0,0,0-.34-1.65h0A1.24,1.24,0,0,0,428.76,260.44Z"
          />
          <path
            class="EcoSystem__cls-8"
            d="M430.85,265.45a1.18,1.18,0,0,0-1.07-.66,1.37,1.37,0,0,0-.53.12,1.2,1.2,0,0,0-.54,1.6,1.17,1.17,0,0,0,1.07.66,1.37,1.37,0,0,0,.53-.12,1.16,1.16,0,0,0,.54-1.6Z"
          />
          <path
            class="EcoSystem__cls-8"
            d="M433,265.37a.7.7,0,0,0-.78,1.17h0a.71.71,0,0,0,1-.2.7.7,0,0,0-.2-1Z"
          />
          <path
            class="EcoSystem__cls-8"
            d="M435.27,263.57a.6.6,0,1,0-1.19-.07.59.59,0,0,0,.56.63h0a.59.59,0,0,0,.63-.56Z"
          />
          <path
            class="EcoSystem__cls-8"
            d="M437,263.14a.41.41,0,0,0-.42.36.4.4,0,0,0,.37.41.39.39,0,0,0,.41-.36A.41.41,0,0,0,437,263.14Z"
          />
          <path
            class="EcoSystem__cls-8"
            d="M435.37,267a.49.49,0,0,0-.54.82h0a.48.48,0,0,0,.68-.14.5.5,0,0,0-.14-.68Z"
          />
          <path
            class="EcoSystem__cls-8"
            d="M424.31,270.6a.36.36,0,0,0-.53.12.38.38,0,0,0,.1.53h0a.37.37,0,0,0,.53-.12.38.38,0,0,0-.1-.53Z"
          />
          <path
            class="EcoSystem__cls-8"
            d="M432.48,270.55a.39.39,0,0,0-.17.53h0a.39.39,0,0,0,.53.17.36.36,0,0,0,.17-.51h0A.43.43,0,0,0,432.48,270.55Z"
          />
          <path
            class="EcoSystem__cls-8"
            d="M428,266.66a1.18,1.18,0,0,0-.34-1.65h0a1.21,1.21,0,0,0-1.68.34,1.18,1.18,0,0,0,.34,1.65h0a1.22,1.22,0,0,0,1.68-.34Z"
          />
          <path
            class="EcoSystem__cls-8"
            d="M425.53,268.48a.6.6,0,1,0-.66,1h0a.61.61,0,0,0,.83-.17.58.58,0,0,0-.17-.83Z"
          />
          <path
            class="EcoSystem__cls-8"
            d="M428.35,270.79a.47.47,0,0,0-.51.46.48.48,0,0,0,.46.51.47.47,0,0,0,.51-.46A.48.48,0,0,0,428.35,270.79Z"
          />
          <path
            class="EcoSystem__cls-8"
            d="M428.35,267.68a.68.68,0,0,0-.73.66.66.66,0,0,0,.65.73.7.7,0,0,0,.08-1.39Z"
          />
          <path
            class="EcoSystem__cls-8"
            d="M431.26,268.43a.62.62,0,0,0-.27.81h0a.61.61,0,0,0,.81.26.59.59,0,0,0,.26-.8h0A.61.61,0,0,0,431.26,268.43Z"
          />
          <path
            class="EcoSystem__cls-8"
            d="M441,263.79h3.74v.83H442V266h2.48v.82H442v2.09h-1Z"
          />
          <path
            class="EcoSystem__cls-8"
            d="M445,267c0-1.44.66-2.07,2-2.07s2,.66,2,2.07-.66,2.06-2,2.06S445,268.41,445,267Zm3,0v-.09c0-.85-.29-1.29-1-1.29s-1,.41-1,1.29V267c0,.85.29,1.29,1,1.29S448,267.87,448,267Z"
          />
          <path
            class="EcoSystem__cls-8"
            d="M449.68,267.68V265h.9v2.5c0,.56.29.75.73.75a.89.89,0,0,0,.89-.92V265h.9v4h-.75l-.07-.53h0a1.5,1.5,0,0,1-1.29.61C450.21,269,449.68,268.68,449.68,267.68Z"
          />
          <path
            class="EcoSystem__cls-8"
            d="M454.17,265h.76l.07.53h.05a1.48,1.48,0,0,1,1.28-.61c.76,0,1.29.37,1.29,1.39V269h-.9v-2.55c0-.56-.29-.75-.73-.75a.89.89,0,0,0-.89.92v2.33h-.9V265Z"
          />
          <path
            class="EcoSystem__cls-8"
            d="M458.4,267c0-1.44.63-2.07,1.53-2.07a1.29,1.29,0,0,1,1.19.56h.05v-1.94h.9v5.41h-.75l-.08-.53h-.05A1.35,1.35,0,0,1,460,269C459,269,458.4,268.41,458.4,267Zm2.77,0v-.09c0-.8-.27-1.27-.9-1.27s-.92.39-.92,1.24v.1c0,.85.24,1.24.92,1.24S461.17,267.83,461.17,267Z"
          />
          <path
            class="EcoSystem__cls-8"
            d="M462.85,267.92c0-1.07,1-1.38,2.5-1.38v-.34c0-.34-.12-.61-.68-.61s-.73.24-.73.44v.1h-.88V266c0-.68.66-1.1,1.63-1.1s1.58.46,1.58,1.24V268a.26.26,0,0,0,.22.26h.29v.61a1.48,1.48,0,0,1-.56.12.72.72,0,0,1-.75-.53h-.05a1.49,1.49,0,0,1-1.26.53A1.06,1.06,0,0,1,462.85,267.92Zm2.5-.56v-.17c-.88,0-1.58.13-1.58.66,0,.32.19.49.61.49a.91.91,0,0,0,1-.81v-.17Z"
          />
          <path
            class="EcoSystem__cls-8"
            d="M467.41,268.07v-2.33h-.48V265h.51l.17-1.12h.73V265H469v.73h-.68V268a.29.29,0,0,0,.24.34H469v.61a2,2,0,0,1-.63.12A.88.88,0,0,1,467.41,268.07Z"
          />
          <path
            class="EcoSystem__cls-8"
            d="M469.75,263.53h.9v.89h-.9Zm0,1.48h.9v3.93h-.9Z"
          />
          <path
            class="EcoSystem__cls-8"
            d="M471.45,267c0-1.44.65-2.07,2-2.07s2,.66,2,2.07-.65,2.06-2,2.06S471.45,268.41,471.45,267Zm3,0v-.09c0-.85-.3-1.29-1-1.29s-1,.41-1,1.29V267c0,.85.3,1.29,1,1.29s1-.44,1-1.29Z"
          />
          <path
            class="EcoSystem__cls-8"
            d="M476.18,265h.76l.07.53h.05a1.5,1.5,0,0,1,1.29-.61c.75,0,1.28.37,1.28,1.39V269h-.89v-2.55a.65.65,0,0,0-.73-.75.9.9,0,0,0-.9.92v2.33h-.9Z"
          />
          <path
            class="EcoSystem__cls-8"
            d="M440.79,259.52c0-1.83.92-2.68,2.5-2.68,1.29,0,2.28.66,2.28,2h-1a1.15,1.15,0,0,0-1.29-1.19c-1.05,0-1.53.6-1.53,1.77v.15c0,1.21.48,1.77,1.53,1.77.8,0,1.33-.41,1.33-1.17h.95c0,1.34-1,2-2.28,2C441.71,262.19,440.79,261.36,440.79,259.52Z"
          />
          <path
            class="EcoSystem__cls-8"
            d="M446.13,261.07c0-1.07,1.05-1.38,2.5-1.38v-.34c0-.34-.12-.61-.68-.61s-.73.24-.73.44v.09h-.87v-.17c0-.68.66-1.09,1.63-1.09s1.58.46,1.58,1.24v1.92a.27.27,0,0,0,.22.27h.29v.6a1.35,1.35,0,0,1-.56.13.75.75,0,0,1-.76-.54h0a1.51,1.51,0,0,1-1.27.54A1.12,1.12,0,0,1,446.13,261.07Zm2.5-.56v-.17c-.87,0-1.58.12-1.58.66,0,.31.2.48.61.48a.89.89,0,0,0,1-.8v-.17Z"
          />
          <path
            class="EcoSystem__cls-8"
            d="M450.65,258.13h.75l.08.63h0a1,1,0,0,1,.9-.7,1.07,1.07,0,0,1,.39.07V259h-.29c-.63,0-1,.34-1,1.07v2.07h-.9v-4Z"
          />
          <path
            class="EcoSystem__cls-8"
            d="M453.2,260.1c0-1.43.63-2.07,1.53-2.07a1.31,1.31,0,0,1,1.19.56H456v-1.94h.9v5.44h-.75l-.08-.53H456a1.35,1.35,0,0,1-1.21.61C453.81,262.19,453.2,261.56,453.2,260.1Zm2.77.07v-.09c0-.81-.27-1.27-.9-1.27s-.92.39-.92,1.24v.1c0,.85.24,1.24.92,1.24s.9-.44.9-1.22Z"
          />
          <path
            class="EcoSystem__cls-8"
            d="M457.65,261.07c0-1.07,1-1.38,2.5-1.38v-.34c0-.34-.12-.61-.68-.61s-.73.24-.73.44v.09h-.87v-.17c0-.68.65-1.09,1.62-1.09s1.58.46,1.58,1.24v1.92a.28.28,0,0,0,.22.27h.29v.6a1.32,1.32,0,0,1-.56.13.74.74,0,0,1-.75-.54h0a1.49,1.49,0,0,1-1.26.54C458.45,262.19,457.65,262,457.65,261.07Zm2.48-.56v-.17c-.88,0-1.58.12-1.58.66,0,.31.19.48.6.48a.9.9,0,0,0,1-.8.25.25,0,0,0,0-.17Z"
          />
          <path
            class="EcoSystem__cls-8"
            d="M462.14,258.13h.75l.08.54h0a1.43,1.43,0,0,1,1.28-.61c.76,0,1.29.36,1.29,1.38v2.68h-.9v-2.55c0-.56-.29-.76-.73-.76a.91.91,0,0,0-.9.93v2.35h-.89Z"
          />
          <path
            class="EcoSystem__cls-8"
            d="M466.37,260.1c0-1.43.66-2.07,2-2.07s2,.66,2,2.07-.66,2.07-2,2.07S466.37,261.53,466.37,260.1Zm3,.07v-.09c0-.85-.29-1.29-1-1.29s-1,.41-1,1.29v.09c0,.85.29,1.29,1,1.29s1-.44,1-1.29Z"
          />
        </g>
      </g>
    </svg>
  )
}
