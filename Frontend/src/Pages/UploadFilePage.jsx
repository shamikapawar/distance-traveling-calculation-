import React from 'react'
import HeaderTop from '../Component/Header'
import { Card, Space } from 'antd';
import UploadExcelButton from '../Component/UploadExcelButton';
import WelcomeHeader from '../Component/WelcomeHeader';

const UploadFilePage = () => {
  return (
    <div>
      <HeaderTop />
      <WelcomeHeader />
      <div style={{ marginTop: "4vh", display: "flex", justifyContent: "center" }}>
        <Card style={{
          width: 1200,
          height: 340,
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }} >
          <div style={{
            display: "flex",
            justifyContent: "center",
          }}>
            <img src="mapimg.png" alt="" />
          </div>
          <div style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "2vh"

          }}>
            <UploadExcelButton />
          </div>

          <span style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "3vh",
            fontSize: "20px",
            color: "gray",
            marginBottom: "3vh"
          }}>Upload the &nbsp; <u> Excel</u>&nbsp; sheet of your trip</span>
        </Card>
      </div>
    </div>
  )
}

export default UploadFilePage
