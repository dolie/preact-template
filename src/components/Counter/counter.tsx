import { useSignal, useComputed } from '@preact/signals'
import preactLogo from '@/assets/svg/preact.svg'

export function Counter(){
  const count = useSignal(0)
  const double = useComputed(() => count.value * 2)

  return (
    <>
      <div class="flex justify-center">
        <a
          href="https://vitejs.dev"
          target="_blank"
          rel="noreferrer"
          class="font-medium"
        >
          <img
            src="/vite.svg"
            class="h-24 p-6 hover:drop-shadow-vite"
            alt="Vite logo"
          />
        </a>
        <a
          href="https://preactjs.com"
          target="_blank"
          rel="noreferrer"
          class="font-medium"
        >
          <img
            src={preactLogo}
            class="h-24 p-6 logo preact hover:drop-shadow-preact"
            alt="Preact logo"
          />
        </a>
      </div>
      <h1>Vite + Preact</h1>
      <div class="p-8">
        <button class="btn-primary m-4" onClick={() => count.value++}>
          count is {count}
        </button>
        <p>{count} x 2 = {double} </p>
        <p>
          Edit <code>src/app.tsx</code> and save to test HMR
        </p>
      </div>
      <p class="text-gray-400">
        Click on the Vite and Preact logos to learn more
      </p>
    </>
  )
}