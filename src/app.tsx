// import { useState } from 'preact/hooks'
import '@/assets/css/reset.css'
import './app.css'

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
      <Provider value={client}>
        <Layout>
          <Router>
            <Route path="/" component={Counter} />
            <Route path="/about" component={About} />
          </Router>
        </Layout>
      </Provider>
    </>
  )
}

render(<App />, document.getElementById('app') as HTMLElement)
