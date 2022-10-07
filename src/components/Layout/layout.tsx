import { ComponentChildren } from 'preact';
import { NavElement } from '@/components/Layout/layout.model';
import { useSignal } from '@preact/signals';

export function Layout({ children }: {children: ComponentChildren}){
  const navElements = useSignal<NavElement[]>([{
    id: 0, name: 'Home', path: '/'
  }, {
    id: 1, name: 'About', path: '/about'
  }])

  return (
    <div>
      <nav class="fixed top-0 bg-indigo-200 dark:bg-slate-800 w-full p-4">
        <ul class="flex justify-center">
          {navElements.value.map(({ id, name, path }) => (
            <li key={id} class="mx-3">
              <a href={path} class="text-xl text">{name}</a>
            </li>
          ))}
        </ul>
      </nav>

      <div class="my-20 mx-auto">
        {children}
      </div>
      
      <footer
        class="fixed bottom-0 w-full p-4 bg-indigo-200 dark:bg-slate-800"
      >
        This is my footer
      </footer>
    </div>
  )
}