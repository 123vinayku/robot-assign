"use client"
import { useState } from "react";

export default function PlaceForm(props: {
    rows: number;
    columns: number;
    submitEvent: (arg0: { placeX: number; placeY: number; face: string; }) => void;
}) {

    const [formValues, setFormValues] = useState({
        placeX: 0,
        placeY: 0,
        face: 'SOUTH'
    });
    const handleChange = (e: { target: { id: any; value: any; }; }) => {
        setFormValues({ ...formValues, [e.target.id]: e.target.value });
    };
    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        props.submitEvent(formValues);
    };

    return (
        <div className="placeContainer">
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label htmlFor="placeX">Position X</label>
                    <input type="number" min="0" max={props.rows - 1} id="placeX" value={formValues.placeX} onChange={handleChange} />
                </div>
                <div className="input-group">
                    <label htmlFor="placeY">Position Y</label>
                    <input type="number" min="0" max={props.columns - 1} id="placeY" value={formValues.placeY} onChange={handleChange} />
                </div>
                <div className="input-group">
                    <label htmlFor="face">Facing</label>
                    <select onChange={handleChange} id="face" value={formValues.face || ""}>
                        <option value="">Select Option</option>
                        <option value="NORTH">North</option>
                        <option value="SOUTH">South</option>
                        <option value="EAST">East</option>
                        <option value="WEST">West</option>
                    </select>
                </div>
                <div className="btn-ct">
                    <button className="submit-btn">Submit</button>
                </div>
            </form>
        </div>
    )
}