// @flow
import React, { Component } from 'react';
import { HomeTemplate } from "../../../components/templates";

import type DroneData from "../../../types/drones";

type Props = {};
type State = {
    droneData: DroneData[];
    lastUpdated: number;
    loading: boolean;
};

class HomeContainer extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            droneData: [],
            lastUpdated: new Date().getMilliseconds(),
            loading: true
        };
    }

    render() {
        const { droneData, lastUpdated, loading } = this.state;

        return (
            <HomeTemplate
                drones={droneData}
                lastUpdated={lastUpdated}
                loading={loading}
            />
        );
    }
}

export default HomeContainer;
