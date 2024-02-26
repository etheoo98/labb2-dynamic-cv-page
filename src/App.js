import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import NoPage from "./pages/no-page/NoPage";
import GithubProjects from "./pages/github-projects//GitHubProjects";

function App() {
  return (
    <BrowserRouter basename="/labb2-dynamic-cv-page">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="*" element={<NoPage />}></Route>
        <Route path="/github-projects" element={<GithubProjects />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
