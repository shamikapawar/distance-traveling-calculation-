import React from 'react'

const MapInfo = () => {
    return (
        <div style={{ display: "flex", alignItems: "center", marginTop: "2vh" }}>
            <div style={{ display: "flex", alignItems: "center", marginRight: "1vw" }}>
                <div
                    style={{
                        width: '20px',
                        height: '20px',
                        backgroundColor: '#1890ff', 
                        borderRadius: '50%',
                        display: 'inline-block',
                    }}
                />
                <label style={{ marginLeft: "5px" }}> Stopped</label>
            </div>

            <div style={{ display: "flex", alignItems: "center", marginRight: "1vw" }}>
                <div
                    style={{
                        width: '20px',
                        height: '20px',
                        backgroundColor: '#ff6cf1', 
                        borderRadius: '50%',
                        display: 'inline-block',
                    }}
                />
                <label style={{ marginLeft: "5px" }}> Idle</label>
            </div>


            <div style={{ display: "flex", alignItems: "center" }}>
                <div
                    style={{
                        width: '20px',
                        height: '20px',
                        backgroundColor: "#52e7ff", 
                        borderRadius: '50%',
                        display: 'inline-block',
                    }}
                />
                <label style={{ marginLeft: "5px" }} > Over speeding</label>
            </div>


        </div>
    )
}

export default MapInfo
