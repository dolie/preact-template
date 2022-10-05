import "./counter.css"
import { useSignal, useComputed } from '@preact/signals'
import preactLogo from '@/assets/svg/preact.svg'

export function Counter(){
  const count = useSignal(0)
  const double = useComputed(() => count.value * 2)

  return (
    <>
      <div>
        <a
          href="https://vitejs.dev"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/vite.svg" class="logo" alt="Vite logo" />
        </a>
        <a href="https://preactjs.com" target="_blank" rel="noreferrer">
          <img src={preactLogo} class="logo preact" alt="Preact logo" />
        </a>
      </div>
      <h1>Vite + Preact</h1>
      <div class="card">
        <button onClick={() => count.value++}>
          count is {count}
        </button>
        <p>{count} x 2 = {double} </p>
        <p>
          Edit <code>src/app.tsx</code> and save to test HMR
        </p>
      </div>
      <p class="read-the-docs">
        Click on the Vite and Preact logos to learn more
      </p>
    </>
  )
}