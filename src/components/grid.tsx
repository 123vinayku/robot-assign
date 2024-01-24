"use client"

import { useState } from "react";

// SOUTH = 0; WEST = 90; NORTH = 180; EAST = 270;

export default function Grid(props: { rows: number; columns: number; placeX: number, placeY: number, face: string }) {

    const totalItems = props.rows * props.columns;
    let items = [];
    const containerStyle = {
        gridTemplateRows: `repeat(${props.rows}, 100px)`,
        gridTemplateColumns: `repeat(${props.columns}, 100px)`
    }

    const getCellIndex = (rows: number, columns: number, placeX: number, placeY: number) => {
        return (((rows - 1) - placeX) * columns + placeY);
    }

    for (let i = 0; i < totalItems; i++) {
        if (i === getCellIndex(props.rows, props.columns, props.placeX, props.placeY)) {
            items.push(
                <div className={`item selected-item ${props.face.toLowerCase()}`} key={i}></div>
            );
        } else {
            items.push(
                <div className="item" key={i}></div>
            );
        }
    }

    return (
        <div className="container-grid" style={containerStyle}>
            {items}
        </div>
    )
}