import React, { Component } from 'react';
import PrivateHeader from './PrivateHeader';
class Dashboard extends Component {
    render() {
        return (
            <div>
                <PrivateHeader title="Real T-notes"/>
                <div className="page-content">
                    Dashboard
                </div>
            </div>
        );
    }
}

export default Dashboard;