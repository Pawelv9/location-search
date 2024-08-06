import type { Place } from '../api/Place'
import React, {useState} from "react";

interface LocationSearchProps {
    onPlaceClick: (place: Place) => void;
}

function LocationSearch({onPlaceClick}: LocationSearchProps): JSX.Element {
    const [term, setTerm] = useState('')
    const [places, setPlaces] = useState<Place[]>([])

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        console.log('Needed to search an api..', term)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label className="form-bold">Place
                    Search
                </label>
            </form>
            <input
                className='border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 px-4 py-2 w-full'
                id='term'
                value={term}
                onChange={e => setTerm(e.target.value)}
            />
        </div>
    );
}

export default LocationSearch;