import { BrowserRouter, Routes, Route, Link} from "react-router-dom" // 1° IMPORTAR REACT ROUTER DOM
import Catalogo from "./components/Catalogo"
import Home from "./components/Home"
import DuplaTelecine from "./components/DuplaTelecine"

export default function App() {
  return(
    <>
      <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} /> {/* <Route path="/programacao" element={<Programação />} /> */}
              <Route path="/catalogo" element={<Catalogo />} />
              <Route path="/duplaTelecine" element={<DuplaTelecine />} />
            </Routes>
      </BrowserRouter>
    </>
  )
}