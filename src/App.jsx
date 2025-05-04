import { Routes,Route } from "react-router-dom";
import { Skeleton } from "@/components/ui/skeleton"
import Home from "./Pages/Home";
import Image from "./Pages/Image";
function App(){
  return(
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/image/" element={<Image/>}/>
    </Routes>

    </>
  )
}
export default App;