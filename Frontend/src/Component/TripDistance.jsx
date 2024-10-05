import React from 'react'
import HeaderTop from './Header'
import { Card, Button } from 'antd';
import { ArrowLeftOutlined, EnvironmentFilled, ClockCircleFilled } from '@ant-design/icons';
import MapInfo from './MapInfo';
import { Tabs, Row, Col, Table, Pagination } from 'antd';
import Location from './Location';

const { TabPane } = Tabs;

// Dummy data for the table
const dataSource = [
    {
        key: '1',
        time: '11:30:24 PM to 11:30:24 PM',
        point: '40.7128° N, 74.0060° W',
        ignition: 'ON',
        speed: '28.5 KM/H',
        travelDuration: '20 Mins',
        stoppedFrom: '10 Mins',
        distance: '10km',
        overspeedDuration: '20 Minutes'
    },
    {
        key: '2',
        time: '11:30:24 PM to 11:30:24 PM',
        point: '40.7128° N, 74.0060° W',
        ignition: 'ON',
        speed: '28.5 KM/H',
        travelDuration: '20 Mins',
        stoppedFrom: '10 Mins',
        distance: '10km',
        overspeedDuration: '20 Minutes'
    },
    {
        key: '3',
        time: '11:30:24 PM to 11:30:24 PM',
        point: '40.7128° N, 74.0060° W',
        ignition: 'ON',
        speed: '28.5 KM/H',
        travelDuration: '20 Mins',
        stoppedFrom: '10 Mins',
        distance: '10km',
        overspeedDuration: '20 Minutes'
    }
];

// Table columns with rowSpan for last column
const columns = [
    {
        title: 'Time',
        dataIndex: 'time',
        key: 'time',
    },
    {
        title: 'Point',
        dataIndex: 'point',
        key: 'point',
    },
    {
        title: 'Ignition',
        dataIndex: 'ignition',
        key: 'ignition',
        render: (ignition) => <span style={{ color: 'green' }}>{ignition}</span>,
    },
    {
        title: 'Speed',
        dataIndex: 'speed',
        key: 'speed',
    },
    {
        title: 'Details',
        key: 'details',
        render: (value, row, index) => {
            
            if (index === 0) {
                return {
                    children: (
                        <div>
                            <div><strong>Travel Duration: </strong> 20 Mins</div>
                            <div><strong>Stopped From: </strong> 10 Mins</div>
                            <div><strong>Distance: </strong> 10km</div>
                            <div><strong>Overspeeding Duration: </strong> 20 Minutes</div>
                        </div>
                    ),
                    props: {
                        rowSpan: dataSource.length, 
                    },
                };
            } else {
                return {
                    props: {
                        rowSpan: 0, 
                    },
                };
            }
        },
    },
];
const TripDistance = () => {
    return (
        <div>
            <HeaderTop />
            <div style={{ margin: "4vh", marginLeft: "4vw" }}>
                <div style={{ marginBottom: "2vh" }}>
                    <ArrowLeftOutlined style={{ fontSize: "20px" }} />
                </div>
                <Card >
                    <div style={{ display: 'flex', justifyContent: "space-between", alignItems: 'center' }}>
                        <label style={{ fontSize: '18px', fontWeight: "bold" }}>Colaba</label>
                        <Button type="primary">New</Button>
                    </div>
                </Card>
                <div>
                    <MapInfo />
                </div>
                <div style={{marginTop:"10px"}}>
                    <Location />
                </div>
                <div>
                    <div>
                        {/* Tabs for locations */}
                        <Tabs defaultActiveKey="1">
                            <TabPane tab="Colaba" key="1" />
                            <TabPane tab="Marine Drive" key="2" />
                            <TabPane tab="Nariman Point" key="3" />
                            <TabPane tab="Malabar Hill" key="4" />
                            <TabPane tab="Bandra" key="5" />
                            <TabPane tab="Andheri" key="6" />
                        </Tabs>

                        {/* Cards for statistics */}
                        <Row gutter={10} style={{ marginTop: 16 }}>
                            <Col span={4.5}>
                                <Card>
                                    <EnvironmentFilled style={{ color: "#00b8fff7" }} />
                                    <div style={{ fontSize: '20px', fontWeight: 'bold' }}>63 KM</div>
                                    <div>Total Distanced Travelled</div>
                                </Card>
                            </Col>
                            <Col span={4.5}>
                                <Card>
                                    <ClockCircleFilled style={{ color: "#00b8fff7" }} />
                                    <div style={{ fontSize: '20px', fontWeight: 'bold' }}>1Hr 36 Mins</div>
                                    <div>Total Travelled Duration</div>
                                </Card>
                            </Col>
                            <Col span={4.5}>
                                <Card>
                                    <ClockCircleFilled style={{ color: "aqua" }} />
                                    <div style={{ fontSize: '20px', fontWeight: 'bold' }}>41 Mins</div>
                                    <div>Over Speeding Duration</div>
                                </Card>
                            </Col>
                            <Col span={4.5}>
                                <Card>
                                    <EnvironmentFilled style={{ color: "aqua" }} />
                                    <div style={{ fontSize: '20px', fontWeight: 'bold' }}>20.3 KM</div>
                                    <div>Over Speeding Distance</div>
                                </Card>
                            </Col>
                            <Col span={4.5}>
                                <Card>
                                    <ClockCircleFilled style={{ color: "#0958d9" }} />
                                    <div style={{ fontSize: '20px', fontWeight: 'bold' }}>41 Mins</div>
                                    <div>Stopped Duration</div>
                                </Card>
                            </Col>
                        </Row>

                        {/* Table for data */}
                        <div>
                            {/* Table for data */}
                            <Table
                                dataSource={dataSource}
                                columns={columns}
                                pagination={false}
                                style={{ marginTop: 16 }}
                                bordered
                            />
                            {/* Pagination */}
                            <div style={{ display: "flex", justifyContent: "center" }}>
                                <Pagination

                                    defaultCurrent={1}
                                    total={50}
                                    style={{ marginTop: 16, textAlign: 'center' }}
                                />
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default TripDistance
