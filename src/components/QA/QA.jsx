import React, { useState } from 'react'
import styles from './QA.module.css'
import { Link } from 'react-router-dom'

export default function QA(props) {
    const data = require(`../PastPapers/${props.sem}/${props.name}/${props.name}-${props.year}`).default
    const qaArray = data.map((obj, index) => ({id: index, question: obj.text, options: obj.responses}))
    const [index, setIndex] = useState(0)
    const [optionIndex, setOptionIndex] = useState(null)
    const [ansIndex, setAnsIndex] = useState(null)
    const [score, setScore] = useState(0)
    const [lock, setLock] = useState(false)
    const [lockcounter, setLockCounter] = useState(0)
    const currentQA = qaArray[index]

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
        for (let i=0; i<currentQA.options.length; i++) {
            if (currentQA.options[i].correct) {
                setAnsIndex(i)
            }
        }
    }

  return (
    <>
    <div className={styles.qawrapper}>

        <header className={styles.qainfo}>
            <p>
                {props.name}-{props.year}
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
                currentQA.options.map((opt, index) => 
                <li
                key={index} 
                className={(index===optionIndex || index===ansIndex) ? 
                    ((opt.correct) ? styles.optionCorrect : styles.optionWrong) 
                    : styles.option}
                onClick={() => checker(index, opt.correct)}>
                    {opt.text}
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