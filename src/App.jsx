import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ArticlePreview from "./components/articlePreview";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ArticlePreview />
    </>
  );
}

export default App;
