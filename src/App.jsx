import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from './components/NavHeader/Layout.jsx'
import Home from './components/Home/Home.jsx'
import FirstYear from './components/Pages/FirstYear.jsx'
import SecondYear from './components/Pages/SecondYear.jsx'
import ThirdYear from './components/Pages/ThirdYear.jsx'
import Loading from './components/Loading/Loading.jsx'
const QA = React.lazy(() => import('./components/QA/QA.jsx'))

export default function App() {
  const [sem, setSem] = useState(null)
  const [name, setName] = useState(null)
  const [year, setYear] = useState(null)

  function update (s, n, y) {
    setSem(s)
    setName(n)
    setYear(y)
  }

  return (
    <BrowserRouter>
    <React.Suspense fallback={<Loading />}>
    <Routes>
      <Route  path='/' element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path='1st-year' element={<FirstYear update={update} />}/>
        <Route path='2nd-year' element={<SecondYear update={update} />}/>
        <Route path='3rd-year' element={<ThirdYear update={update} />}/>
        <Route path={`${sem}/${name}/${year}`} element={<QA sem={sem} name={name} year={year} />}/>
        <Route path='*' element={<Home />}/>
      </Route>
    </Routes>
    </React.Suspense>
    </BrowserRouter>
  )
}