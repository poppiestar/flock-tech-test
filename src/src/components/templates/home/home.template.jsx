// @flow
import React from "react";
import './home.template.css';
import { DronesList } from "../../../components/molecules";

import type DroneData from "../../../types/drones";

type Props = {
    drones: DroneData[];
    lastUpdated: number;
    loading: boolean;
}

const HomeTemplate = ({ drones, lastUpdated, loading }: Props) => (
    <div className="App">
        <header className="App-header">
            <h1>Drone Home</h1>
            <p>We like drones, you like drones. Take a look at our drones!</p>
        </header>
        <DronesList drones={drones} />
    </div>
);

export default HomeTemplate;
