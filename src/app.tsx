// import { useState } from 'preact/hooks'
import {Router, Route } from 'preact-router'
import { Counter } from './counter'
import './app.css'
import { About } from './about'

export function App() {

  return (
    <>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">about</a>
          </li>
        </ul>
      </nav>
      <Router>
        <Route path="/" component={Counter} />
        <Route path="/about" component={About} />
      </Router>
    </>
  )
}
