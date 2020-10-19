import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css'

const Map1 = lazy(() => import('./FirstMap/Svg'))
const Map2 = lazy(() => import('./SecondMap/Svg'))
const Map3 = lazy(() => import('./ThirdMap/Svg'))
const Map4 = lazy(() => import('./FourthMap/Svg'))
const Map5 = lazy(() => import('./FifthMap/Svg'))
const Map6 = lazy(() => import('./SixthMap/Svg'))
const Map7 = lazy(() => import('./SeventhMap/Svg'))
const Map8 = lazy(() => import('./Map8/Svg'))
const Map9 = lazy(() => import('./Map9/Svg'))
const Map10 = lazy(() => import('./Map10/Svg'))
const Map11 = lazy(() => import('./Map11/Svg'))
const Map12 = lazy(() => import('./Map12/Svg'))
const Map13 = lazy(() => import('./Map13/Svg'))
const Map14 = lazy(() => import('./Map14/Svg'))
const Map15 = lazy(() => import('./Map15/Svg'))
const Map16 = lazy(() => import('./Map16/Svg'))
const Map17 = lazy(() => import('./Map17/Svg'))

function App() {
  return (
    <Router>
      <div className="App">
        <Suspense fallback={<div>Loading...</div>}>
          <Route path="/1" component={Map1} />
          <Route path="/2" component={Map2} />
          <Route path="/3" component={Map3} />
          <Route path="/4" component={Map4} />
          <Route path="/5" component={Map5} />
          <Route path="/6" component={Map6} />
          <Route path="/7" component={Map7} />
          <Route path="/8" component={Map8} />
          <Route path="/9" component={Map9} />
          <Route path="/10" component={Map10} />
          <Route path="/11" component={Map11} />
          <Route path="/12" component={Map12} />
          <Route path="/13" component={Map13} />
          <Route path="/14" component={Map14} />
          <Route path="/15" component={Map15} />
          <Route path="/16" component={Map16} />
          <Route path="/17" component={Map17} />
        </Suspense>
        <Route path="/" exact>
          <Link to={'/1'}>1</Link>
          <br />
          <Link to={'/2'}>2</Link>
          <br />
          <Link to={'/3'}>3</Link>
          <br />
          <Link to={'/4'}>4</Link>
          <br />
          <Link to={'/5'}>5</Link>
          <br />
          <Link to={'/6'}>6</Link>
          <br />
          <Link to={'/7'}>7</Link>
          <br />
          <Link to={'/8'}>8</Link>
          <br />
          <Link to={'/9'}>9</Link>
          <br />
          <Link to={'/10'}>10</Link>
          <br />
          <Link to={'/11'}>11</Link>
          <br />
          <Link to={'/12'}>12</Link>
          <br />
          <Link to={'/13'}>13</Link>
          <br />
          <Link to={'/14'}>14</Link>
          <br />
          <Link to={'/15'}>15</Link>
          <br />
          <Link to={'/16'}>16</Link>
          <br />
          <Link to={'/17'}>17</Link>
          <br />
        </Route>
      </div>
    </Router>
  )
}

export default App
