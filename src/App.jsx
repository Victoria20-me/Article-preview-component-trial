import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ArticlePreview from "./components/articlePreview";
import Blog from "./components/Blog";
import Counter from "./components/Counter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
       {/* <ArticlePreview /> */}
      <Blog />
      {/* <Counter/> */}
    </>
  );
}

export default App;
