// @flow
import React from "react";

import type DroneData from "../../../types/drones";

type Props = {
    drones: DroneData[];
}

const DronesList = ({ drones }: Props) => (
    <h2>Drones List</h2>
);

export default DronesList;
