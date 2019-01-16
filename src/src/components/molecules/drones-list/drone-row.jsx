// @flow
import React from "react";

import type DroneData from "../../../types/drones";

const getCurrency = (currency: string): string => {
    let sign;

    switch (currency) {
        case "USD":
            sign = "$";
            break;

        case "GBP":
            sign = "£";
            break;

        case "EUR":
            sign = "€";
            break;

        case "Galaxy Credits":
            sign = "🚀";
            break;

        case "Monopoly Dollars":
            sign = "💰";
            break;

        case "Large Rocks":
            sign = "🤘";
            break;

        default:
            sign = "£";
    }

    return sign;
}

const getDronePrice = (currency: string, price: number): string => {
    return `${getCurrency(currency)}${price}`;
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
