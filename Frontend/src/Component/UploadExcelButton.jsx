





import React, { useState } from 'react';
import { Button, Modal, Input, message, Upload } from 'antd';
import { UploadOutlined, CloseOutlined } from '@ant-design/icons';
import axios from 'axios';
import { useNavigate ,Link } from 'react-router-dom';

const { Dragger } = Upload;

const UploadExcelButton = () => {
    const [modal2Open, setModal2Open] = useState(false);
    const [file, setFile] = useState(null);
    const [tripName, setTripName] = useState('');
    const navigate = useNavigate();

   
    const handleFileChange = (info) => {
        const { status } = info.file;
        if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);
            setFile(info.file.originFileObj); 
        } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    };

   
    const handleUpload = async () => {
        
        const formData = new FormData();
        formData.append('trip_name', tripName);
        formData.append('file', file);

       
        const token = localStorage.getItem('token');

        try {
            const res = await axios.post('http://localhost:4448/api/trips/upload', formData, {
                headers: {
                    'Authorization': `Bearer ${token}`,  
                    'Content-Type': 'multipart/form-data'
                }
            });

            message.success('File uploaded successfully!');
            setModal2Open(false);  
            navigate('/showtrip');  
        } catch (error) {
            console.error('File upload error:', error);
            message.error('File upload failed, please try again.');
        }
    };

    return (
        <div>
            <Button type="primary" onClick={() => setModal2Open(true)}>
                Upload Trip
            </Button>
            <Modal
                title=""
                centered
                open={modal2Open}
                onOk={() => setModal2Open(false)}
                onCancel={() => setModal2Open(false)}
                footer={null}
                closeIcon={<CloseOutlined />}
            >
                <Input
                    placeholder="Trip Name*"
                    required
                    value={tripName}
                    onChange={(e) => setTripName(e.target.value)}
                    style={{
                        marginBottom: '16px',
                        borderRadius: '4px',
                        padding: '8px',
                        borderColor: '#D9D9D9',
                    }}
                />

                <div>
                    <Dragger
                        name="file"
                        accept=".csv"
                        beforeUpload={() => false}  
                        onChange={handleFileChange}
                        style={{ borderRadius: '8px', border: '2px dashed #40a9ff', padding: '16px' }}
                    >
                        <p className="ant-upload-drag-icon">
                            <UploadOutlined style={{ fontSize: '24px' }} />
                        </p>
                        <p className="ant-upload-text">
                            Click here to upload the <span style={{ color: '#1890ff', textDecoration: 'underline' }}>CSV</span> file of your trip
                        </p>
                    </Dragger>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '24px' }}>
                    <Button
                        onClick={() => setModal2Open(false)}
                        style={{
                            backgroundColor: '#f5f5f5',
                            color: '#000',
                            borderRadius: '4px',
                            padding: '6px 24px',
                            marginRight: "1vw"
                        }}
                    >
                        Cancel
                    </Button>
                    <Link to={"/showtrip"}>
                    <Button
                        type="primary"
                        onClick={handleUpload}
                        style={{
                            backgroundColor: '#0d274d',
                            borderColor: '#0d274d',
                            borderRadius: '4px',
                            padding: '6px 24px',
                        }}
                    >
                        Save
                    </Button>
                    </Link>
                </div>
            </Modal>
        </div>
    );
};

export default UploadExcelButton;
