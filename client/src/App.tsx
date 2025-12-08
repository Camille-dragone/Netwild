import { Outlet } from "react-router";

function App() {
  return (
    <>
      <header>
        <h1 className="logo">JS Monorepo</h1>
      </header>

      <main className="text-box">
        <Outlet />
      </main>

      <footer>
        Développé par la&nbsp;
        <a
          href="https://www.wildcodeschool.com/"
          className="wcs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Wild Code School
        </a>
      </footer>
    </>
  );
}

export default App;
