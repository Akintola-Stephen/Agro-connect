import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";

function App() {
  return (
    <>
       <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout><Index /></Layout>} />
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
