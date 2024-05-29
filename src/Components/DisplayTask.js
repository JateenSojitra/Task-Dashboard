import React from 'react'
import { Accordion } from "react-bootstrap"


const DisplayTask = () => {
    let statusArray = [
        {
            status: "In Progress",
            isTaskStarted: 1,
            data: []
        },
        {
            status: "Pause",
            isTaskStarted: 2,
            data: []
        },
        {
            status: "Completed",
            isTaskStarted: 3,
            data: []
        },
    
    ]
    return (
        <div className='card col-md-12 border'>
            <h3>Show  Task</h3>
            <hr className='m-0' />
            {
                statusArray?.map(d => {
                    return <div className='card  h-auto m-2'>
                        <Accordion>
                            <Accordion.Item>
                                <Accordion.Header>{d.status}</Accordion.Header>
                                <Accordion.Body>
                                    {d.isTaskStarted}
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                })
            }
        </div>
    )
}

export default DisplayTask
