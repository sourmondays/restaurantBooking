import React, { useState, useEffect } from "react";
import { useQuery } from 'react-query';
import AdminPanel from "./AdminPanel";
import { useMutation, useQueryCache } from 'react-query';
import { modifySeats, showSeats } from '../services/SeatsApi'
import { useHistory } from 'react-router-dom';

const intaialValue = {
    maxSeats: null,
}

const Settings = () => {
    const navigate = useHistory();
    const { data, status } = useQuery(['showMaxSeats'], showSeats);
    const [mutate] = useMutation(modifySeats);
    const [seats, setSeats] = useState(intaialValue);
    const queryCache = useQueryCache();


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

        console.log("Submitting seats...");

        mutate(seats, {
            onSucces: (data) => {
                console.log("Mutating...", [data]);

                queryCache.refetchQueries('showMaxSeats');
                console.log(data);

                // Empty form 
                setSeats(intaialValue);
            }
        })
        navigate.push('/adminbookings')
    }

    return (
        <>
            <AdminPanel />
            <div className="text-center align-items-center mt-5">
                <h1 className="change-font mb-1">Settings</h1>
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

                    {status === 'loading' && (
                        <div className="text-center align-items-center mb-2 mt-2">
                            <p>Loading...</p>
                        </div>
                    )}

                    {status === 'error' && (
                        <div className="text-center align-items-center mb-2 mt-2">
                            <p>Error when trying to get data.</p>
                        </div>
                    )}

                    {status === 'success' && (
                        <>
                            {data.data.seats.map((seats, index) =>
                                <h4 className="change-font" key={index}>{seats.maxSeats} seats available</h4>
                            )}
                            <div className="button">
                                <button type="submit" className="btn btn-dark btn-sm">Update</button>
                            </div>
                        </>
                    )}
                </form>
            </div>
        </>
    );
};

export default Settings;