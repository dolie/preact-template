import { ComponentChildren } from 'preact';

export function Layout({ children }: {children: ComponentChildren}){
  return (
    <div>
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

      {children}
      
      <footer>this is my footer</footer>
    </div>
  )
}