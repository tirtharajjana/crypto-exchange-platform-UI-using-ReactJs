import React from 'react'
import AlertBox from './Alert/Alert'
import Fee from './Fee/Fee'
import Reward from './Reward/Reward'
import TableTab from './Table/TableTab'

const TabPanel = () => {
    return (

        <>
            <AlertBox />
            <Reward />
            <Fee />
            <TableTab />
        </>
    )
}

export default TabPanel