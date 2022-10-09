import React, { useState, useCallback, useRef, useEffect } from 'react'
import { useTransition, animated } from '@react-spring/web'
import styles from './style.module.css'
import wtfanta from './assets/homePage/can-pzs.png'

const  Pourstep = () =>{
  const ref = useRef<ReturnType<typeof setTimeout>[]>([])
  const [items, set] = useState<string[]>([])
  const transitions = useTransition(items, {
    from: {
      opacity: 1,
      height: 0,
      innerHeight: 0,
      transform: 'perspective(600px) rotateX(0deg)',
      color: '#f5f2f2',
    },
    enter: [
      { opacity: 1, height: 80, innerHeight: 80 },
      { transform: 'perspective(600px) rotateX(180deg)', color: '#d91111' },
      { transform: 'perspective(600px) rotateX(0deg)', color: '#28b4d7' },

    ],
    leave: [{ color: '#28b4d7' }, { innerHeight: 0 }, { opacity: 0.5, height: 0 }],
    update: { color: '#f2f2f2' },
  })

  const reset = useCallback(() => {
    ref.current.forEach(clearTimeout)
    ref.current = []
    set([])
    ref.current.push(setTimeout(() => set(['Pepsi', 'Zero', 'Sugar']), 2000))
    ref.current.push(setTimeout(() => set(['Zero Sugar', ' Compromise']), 5000))

  }, [])

  useEffect(() => {
    reset()
    return () => ref.current.forEach(clearTimeout)
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        {transitions(({ innerHeight, ...rest }, item) => (
          <animated.div className={styles.transitionsItem} style={rest} onClick={reset}>
            <animated.div style={{ overflow: 'hidden', height: innerHeight }}>{item}</animated.div>
          </animated.div>
        ))}
      </div>
      <div className={styles.fanta}>
          <img src={wtfanta}></img>
      </div>  
    </div>
  )
}
export default Pourstep