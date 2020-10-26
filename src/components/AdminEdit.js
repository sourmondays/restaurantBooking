
import AdminPanel from "./AdminPanel";
import React from "react";

const AdminEdit = () => {

    return (<>
        <AdminPanel />
        <h1 className="text-center mt-5">Edit booking</h1>
        <div className="container-booking">

            <form >
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="firstName">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="firstName"
                            placeholder="ex. Ann"
                            value=""
                            required
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="lastName">Last Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="lastName"
                            placeholder="ex. Jonsson"

                            required
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="email">Email</label>
                        <input
                            type="text"
                            className="form-control"
                            id="email"
                            placeholder="ex. ann.jonsson@hotmail.com"

                            required
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="phone">Phone </label>
                        <input
                            type="text"
                            className="form-control"
                            id="phone"
                            placeholder="ex. 0701236986"

                            required
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="date">Date</label>
                        <input type="date" className="form-control" id="date" required />
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="time">Time</label>
                        <select id="time" className="form-control" required >
                            <option defaultValue >Choose time</option>
                            <option>18:00</option>
                            <option>21:00</option>
                        </select>
                    </div>
                    <div className="form-group col-md-2">
                        <label htmlFor="sizeparty">Party size</label>
                        <input
                            type="number"
                            className="form-control"
                            id="noPersons"
                            min="1"
                            max="6"
                            placeholder="1 - 6 people"
                            required
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    className="btn btn-primary col-md-12">
                    Edit booking
              </button>

            </form>
        </div>
    </>
    )

};

export default AdminEdit;