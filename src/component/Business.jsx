import React, { Component } from 'react';

export default class Business extends Component {
    render() {
        return (
            <div className="business-wrap">
                <div className="container">
                    <ul className="row business-service">
                        <li className="col-md-4">
                            <div className="business-image"><img src="./assets/images/laptop.png" alt="" /></div>
                            <h3>CREATE FREE LISTINGS</h3>
                            <p>Eiusmod tempor incidiunt labore velit dolore magna aliqu sed eniminim veniam quis nostrud exercition eullamco laborisaa</p>
                        </li>
                        <li className="col-md-4">
                            <div className="business-image"><img src="./assets/images/globe-ad.png" alt="" /></div>
                            <h3>PUBLISH YOUR AD</h3>
                            <p>Eiusmod tempor incidiunt labore velit dolore magna aliqu sed eniminim veniam quis nostrud exercition eullamco laborisaa</p>
                        </li>
                        <li className="col-md-4">
                            <div className="business-image"><img src="./assets/images/advertise.png" alt="" /></div>
                            <h3>ADVERTISE Classify</h3>
                            <p>Eiusmod tempor incidiunt labore velit dolore magna aliqu sed eniminim veniam quis nostrud exercition eullamco laborisaa</p>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
