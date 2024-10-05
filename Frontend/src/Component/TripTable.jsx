import React, { useState } from 'react';
import { Button, Flex, Table } from 'antd';
import { Link } from 'react-router-dom';
const columns = [
    {
        title: 'Trips',
        dataIndex: 'name',
    },

];
const dataSource = Array.from({
    length: 46,
}).map((_, i) => ({
    key: i,
    name: `Edward King ${i}`,

}));

const TripTable = () => {
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [loading, setLoading] = useState(false);
    const start = () => {
        setLoading(true);
        
        setTimeout(() => {
            setSelectedRowKeys([]);
            setLoading(false);
        }, 1000);
    };
    const onSelectChange = (newSelectedRowKeys) => {
        console.log('selectedRowKeys changed: ', newSelectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
    };
    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;

    return (
        <div style={{ margin: "2vw" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <label style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "10px" }} > Your Trips</label>
                <div style={{ marginBottom: "10px" }}>
                    <Button variant="outlined" size="large">
                        Delete
                    </Button>
                    <Link to={"/TripDistance"}>
                        <Button type="primary" variant="outlined" size="large">
                            Open
                        </Button>
                    </Link>
                </div>
            </div>

            {hasSelected ? `Selected ${selectedRowKeys.length} items` : null}
            <Table rowSelection={rowSelection} columns={columns} dataSource={dataSource} />
        </div>
    )
}

export default TripTable
