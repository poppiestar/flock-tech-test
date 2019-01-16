// @flow
import React from "react";
import DroneRow from "./drone-row";
import type DroneData from "../../../types/drones";

type Props = {
    drones: DroneData[];
    lastUpdated: number;
}

const getTableRows = (drones: DroneData[]) =>
    drones.map((drone: DroneData) =>
        <DroneRow
            key={drone.droneId}
            drone={drone}
        />
    );

const DronesList = ({ drones, lastUpdated }: Props) => (
    <div>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Flights</th>
                    <th>Crashes</th>
                </tr>
            </thead>
            <tbody>
            {getTableRows(drones)}
            </tbody>
        </table>
        <p>Last updated: {lastUpdated}</p>
    </div>
);

export default DronesList;
