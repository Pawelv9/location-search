import LocationSearch from "./components/LocationSearch.tsx";
import type { Place } from './api/Place'
import {useState} from "react";

function App() {
    const [place, setPlace] = useState(Place | null)

  return (
    <div className="h-screen w-screen grid grid-cols-12">
        <div className="col-span-3 p-2">
            <LocationSearch />
        </div>
        <div className="col-span-9">
            <Map place={place} />
        </div>
    </div>
  )
}

export default App
