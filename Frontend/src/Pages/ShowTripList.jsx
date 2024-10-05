import React from 'react'
import HeaderTop from '../Component/Header'
import WelcomeHeader from '../Component/WelcomeHeader'
import TripTable from '../Component/TripTable'
import { Card, Space } from 'antd';
import UploadExcelButton from '../Component/UploadExcelButton';



const ShowTripList = () => {
    return (
        <div>
            <HeaderTop />
            <WelcomeHeader />
            <div style={{ marginTop: "4vh", display: "flex", justifyContent: "center" }}>
                <Card style={{
                    width: 1200,
                    height: 60,

                }}
                    bodyStyle={{ display: "flex", }}
                >
                    <div style={{ alignItems: "center", display: "flex", }}>
                        <UploadExcelButton />
                    </div>

                    <span> &nbsp;&nbsp;Upload the &nbsp; <u> Excel</u>&nbsp; sheet of your trip</span>

                </Card>
            </div>
            <TripTable />
        </div>
    )
}

export default ShowTripList
