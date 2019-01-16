// @flow
import React from "react";

import type DroneData from "../../../types/drones";

type Props = {
    drones: DroneData[];
    lastUpdated: number;
}

const DronesList = ({ drones, lastUpdated }: Props) => (
    <p>Last updated: {lastUpdated}</p>
);

export default DronesList;
