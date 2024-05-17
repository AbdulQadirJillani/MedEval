import React, { useEffect, useState } from 'react'
import styles from './QA.module.css'
import { Link } from 'react-router-dom'

export default function QA(props) {
    const qaArray = props.data
    const [index, setIndex] = useState(0)
    const [optionIndex, setOptionIndex] = useState(null)
    const [ansIndex, setAnsIndex] = useState(null)
    const [score, setScore] = useState(0)
    const [lock, setLock] = useState(false)
    const [lockcounter, setLockCounter] = useState(0)
    const currentQA = qaArray[index]
    let info

    if (typeof currentQA.info === 'string') {
        let iarr = currentQA.info.split('/')
        info = `${iarr[1]} - ${iarr[2]}`
    }
    else {
        let iarr = currentQA.info.map((i) => i.split('/'))
        let yrs = iarr.map((y) => ` ${y[2]} `).filter((y) => y !== ' compiled ')
        info = `${iarr[0][1]} - ${iarr[0][2]} (${yrs})`
    }

    function decrement() {
        setIndex((prevIndex) => prevIndex - 1)
        setOptionIndex(null)
        setAnsIndex(null)
        setLock(true)
        setLockCounter(prevLockCounter => prevLockCounter - 1)
    }

    function increment() {
        setIndex((prevIndex) => prevIndex + 1)
        setOptionIndex(null)
        setAnsIndex(null)
        if (lockcounter < 0) setLockCounter(prevLockCounter => prevLockCounter + 1)
        if (lockcounter === 0) setLock(false)
        else setLock(true)
    }

    function checker(index, opt) {
        setOptionIndex(index)
        if (opt && !lock) {
            setScore(prevScore => prevScore + 1)
            setLock(true)
        }
    }

    function show() {
        for (let i=0; i<currentQA.answers.length; i++) {
            if (currentQA.answers[i].bool) {
                setAnsIndex(i)
            }
        }
    }

    function navigate(e) {
        if (currentQA.id + 1 !== qaArray.length && e.key==='ArrowRight') {
            increment()
        }
        else if (currentQA.id!==0 && e.key==='ArrowLeft') {
            decrement()
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', navigate)
        return () => document.removeEventListener('keydown', navigate)
    })

  return (
    <>
    <div className={styles.qawrapper}>

        <header className={styles.qainfo}>
            <p>
                {info}
            </p>

            <p>
                {`${currentQA.id+1} out of ${qaArray.length}`}
            </p>
        </header>

        <hr />

        <main>
            <p 
            className={styles.question}>
                {currentQA.question}
            </p>

            <ol>
                {
                currentQA.answers.map((opt, index) => 
                <li
                key={index} 
                className={(index===optionIndex || index===ansIndex) ? 
                    ((opt.bool) ? styles.optionCorrect : styles.optionWrong) 
                    : styles.option}
                onClick={() => checker(index, opt.bool)}>
                    {opt.option}
                </li>)
                }
            </ol>
            
            <button 
            onClick={show} 
            className={styles.showbtn}>
                Show Answer
            </button>
        </main>

        <footer className={styles.btnlayout}>
            <button 
            onClick={decrement} 
            disabled={currentQA.id===0} 
            className={currentQA.id===0 ? styles.disabledbtn : styles.btn}>
                Back
            </button>

            {
            (currentQA.id + 1 === qaArray.length) ? 
            <button 
            onClick={() => document.querySelector('dialog').showModal()} 
            className={styles.btn}>
                Finish
            </button> 
            : 
            <button 
            onClick={increment} 
            className={styles.btn}>
                Next
            </button>
            }
        </footer>
        
    </div>

    <dialog>
        <p>
            Score: {score} / {qaArray.length}
        </p>

        <button
        onClick={() => document.querySelector('dialog').close()}>
            <Link className={styles.homebtn} to='/'>Home</Link>
        </button>
    </dialog>
    </>
  )
}