import type { Place } from '../api/Place'
import {useState} from "react";

interface LocationSearchProps {
    onPlaceClick: (place: Place) => void;
}

function LocationSearch({onPlaceClick}: LocationSearchProps): JSX.Element {
    const [places, setPlaces] = useState<Place[]>([])

    return (
        <div>Search for a locat`ion</div>
    );
}

export default LocationSearch;