import React, { useState, useEffect } from "react";
import { useQuery } from 'react-query';
import AdminPanel from "./AdminPanel";
import { useMutation, useQueryCache } from 'react-query';
import { modifySeats, showSeats } from '../services/SeatsApi'

const intaialValue = {
    maxSeats: null,
}

const Settings = () => {
    const { data } = useQuery(['showMaxSeats'], showSeats);
    const [mutate] = useMutation(modifySeats);
    const [seats, setSeats] = useState();
    const queryCache = useQueryCache();

    // const updateSeats = (e) => {
    //     Axios.post(`http://localhost:4000/seats`)

    //     console.log("Something changed, target", e.target.id, e.target.value);

    //     setSeats({
    //         ...seats,
    //         [e.target.id]: e.target.value
    //     })
    // }

    useEffect(() => {
        console.log("Effectiong");
        return function () {

        }

    }, [seats]);

    const handleInputChange = e => {
        console.log("Something changed, target", e.target.id, e.target.value);
        setSeats({
            ...seats,
            [e.target.id]: e.target.value
        })
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();

        // mutate(seats)
        console.log("Submitting seats...");

        mutate(seats, {
            onSucces: (data) => {
                console.log("Mutating...", [data]);

                //???? Uppdaterar inte direkt...
                // queryCache.invalidateQueries('showMaxSeats', [data])
                queryCache.refetchQueries('showMaxSeats');
                console.log(data);

                // Empty form 
                setSeats(intaialValue);
            }
        })
    }



    return (
        <>
            <AdminPanel />
            <div className="text-center align-items-center mt-5">
                <h1 className="mb-1">Settings</h1>
                <p className="mb-3">Here you can change max available seats for your restaurant.</p>

                <form onSubmit={handleFormSubmit}>

                    <div className="form-group d-inline-flex justify-content-center">
                        <input type="number"
                            className="form-control input-sm"
                            id="maxSeats"
                            min="1"
                            max="150"
                            placeholder="Enter seats"
                            onChange={handleInputChange} />
                    </div>

                    <h4>{data} seats available</h4>

                    <div className="button">
                        <button type="submit" className="btn btn-dark btn-sm">Update</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Settings;