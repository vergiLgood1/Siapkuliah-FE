// import { useEffect, useRef, useLayoutEffect } from 'react'
// import {
//   GlobalCanvas,
//   ScrollScene,
//   useScrollbar,
//   UseCanvas,
//   SmoothScrollbar,
//   useTracker,
//   useImageAsTexture,
//   styles
// } from '@14islands/r3f-scroll-rig'
// import { MeshDistortMaterial } from '@react-three/drei'
// import { motion, useMotionValue, useTransform } from 'framer-motion'
// // import lerp from '@14islands/lerp'

// import './styles.css'
// import '@14islands/r3f-scroll-rig/css'

// /**
//  * Return a Framer Motion value bound to a tracker scrollState
//  * @param {Tracker} tracker scroll-rig tracker instance
//  * @param {string} prop scrollState prop to bind
//  */
// function useTrackerMotionValue(tracker, prop = 'progress') {
//   const progress = useMotionValue()
//   const { onScroll } = useScrollbar()

//   useLayoutEffect(() => {
//     // set initial progress
//     progress.set(tracker.scrollState[prop])
//   }, [progress, tracker, prop])

//   useEffect(() => {
//     // update progress on scroll
//     return onScroll(() => {
//       progress.set(tracker.scrollState[prop])
//     })
//   }, [tracker, progress, onScroll, prop])
//   return progress
// }

// function JSMarquee() {
//   const track = useRef()
//   const tracker = useTracker(track)
//   const progress = useTrackerMotionValue(tracker)

//   const x = useTransform(progress, [0, 1], ['0vw', '-50vw'], { clamp: false })
//   const x2 = useTransform(progress, [0, 1], ['-50vw', '0vw'], { clamp: false })

//   return (
//     <div ref={track} className="Marquee">
//       <motion.div style={{ x }}>
//         <h1>TEXT BIG TEXT BIG TEXT</h1>
//       </motion.div>
//       <motion.div style={{ x: x2 }}>
//         <h1>TEXT BIG TEXT BIG TEXT</h1>
//       </motion.div>
//     </div>
//   )
// }

// function CSSMarquee({ children, reverse = false, duration = 30, style }) {
//   const track = useRef()
//   const tracker = useTracker(track)
//   const progress = useTrackerMotionValue(tracker)

//   const x = useTransform(progress, [0, 1], reverse ? ['-50vw', '50vw'] : ['50vw', '-50vw'], { clamp: false })

//   return (
//     <div className="marqueeWrapper" ref={track}>
//       <div style={style}>
//         <motion.div className={'marquee ' + (reverse ? 'reverse' : '')} style={{ x }}>
//           <div className="marquee__content" style={{ '--duration': `${duration}s` }}>
//             <h2>{children}</h2>
//           </div>
//           <div className="marquee__content" style={{ '--duration': `${duration}s` }} aria-hidden="true">
//             <h2>{children}</h2>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   )
// }

// const ImageMesh = ({ track, ...props }) => {
//   const texture = useImageAsTexture(track)
//   return (
//     <mesh {...props}>
//       <planeGeometry args={[1, 1, 16, 16]} />
//       <MeshDistortMaterial speed={5} distort={0.2} map={texture} />
//     </mesh>
//   )
// }

// function WebGLImage() {
//   const el = useRef()
//   return (
//     <>
//       <img ref={el} className={styles.hidden + ' WebGLImage'} src="https://source.unsplash.com/random/?abstract" alt="test" />
//       <UseCanvas>
//         <ScrollScene track={el}>{(props) => <ImageMesh {...props} />}</ScrollScene>
//       </UseCanvas>
//     </>
//   )
// }

// const Row = ({ children }) => <div className="row">{children}</div>

// export default function App() {
//   return (
//     <>
//       <GlobalCanvas style={{ zIndex: -1 }}>
//         <ambientLight />
//       </GlobalCanvas>
//       <SmoothScrollbar>
//         {(bind) => (
//           <article {...bind}>
//             <Row>@14islands/r3f-scroll-rig + Framer Motion</Row>

//             <CSSMarquee>R3F Scroll Rig</CSSMarquee>
//             <CSSMarquee reverse>R3F Scroll Rig</CSSMarquee>

//             <Row>Framer motion marquee</Row>

//             <JSMarquee>R3F Scroll Rig</JSMarquee>
//             <JSMarquee>R3F Scroll Rig</JSMarquee>

//             <Row>Some WebGL stuff</Row>
//             <WebGLImage />

//             <Row>CSS animation + Framer motion marquee</Row>

//             <CSSMarquee style={{ transform: 'rotateZ(7deg)' }}>R3F Scroll Rig</CSSMarquee>

//             <Row>More HTML content</Row>
//             <Row>More HTML content</Row>
//           </article>
//         )}
//       </SmoothScrollbar>
//     </>
//   )
// }
