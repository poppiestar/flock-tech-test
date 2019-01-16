// @flow
import React from "react";

import type DroneData from "../../../types/drones";

const getDronePrice = (currency: string, price: number): string => {
    return `${currency} ${price}`;
}

const DroneRow = ({ drone }: DroneData) => (
    <tr>
        <td>{drone.name}</td>
        <td>{getDronePrice(drone.currency, drone.price)}</td>
        <td>{drone.numFlights}</td>
        <td>{drone.numCrashes}</td>
    </tr>
);

export default DroneRow;
