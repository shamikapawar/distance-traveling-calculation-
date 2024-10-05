import React from 'react'
import { Card, Space } from 'antd';

const WelcomeHeader = () => {
    return (
        <div>
            <div style={{ marginTop: "4vh", display: "flex", justifyContent: "center" }}>
                <Card style={{
                    width: 1200,
                    height: 60,
                    display: "flex",
                    alignItems: "center",


                }} >
                    <img src="wavinghand.png" alt="" style={{ width: "30px", }} />
                    <label style={{ fontSize: "30px", fontWeight: "bold", margin: "5px" }}>  Welcomer, User</label>

                </Card>
            </div>
        </div>
    )
}

export default WelcomeHeader
