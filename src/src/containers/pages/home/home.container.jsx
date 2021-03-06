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

const API_ENDPOINT = "https://bobs-epic-drone-shack-inc.herokuapp.com/api/v0/drones";

class HomeContainer extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            droneData: [],
            lastUpdated: Date.now(),
            loading: true
        };
    }

    componentDidMount() {
        this.fetchDroneData();
    }

    fetchDroneData() {
        fetch(API_ENDPOINT)
            .then(response => response.json())
            .then(droneData => this.setState({
                droneData,
                loading: false,
                lastUpdated: Date.now()
            }))
            .catch(error => this.fetchDroneData());
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
