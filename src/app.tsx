// import { useState } from 'preact/hooks'
import './index.css'
import { render } from 'preact'
import { Router, Route } from 'preact-router'
import { Counter } from './components/Counter/counter'
import { About } from './components/About/about'

import { createClient, Provider } from '@urql/preact';
import { Layout } from './components/Layout/layout'

const client = createClient({
  url: 'https://rickandmortyapi.com/graphql'
});

function App(){

  return (
    <>
      <Layout>
        <Provider value={client}>
          <Router>
            <Route path="/" component={Counter} />
            <Route path="/about" component={About} />
          </Router>
        </Provider>
      </Layout>
    </>
  )
}

render(<App />, document.getElementById('app') as HTMLElement)
