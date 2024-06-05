import React, { useState } from 'react'
import "../Components/TaskDashboard.css"
import { Accordion } from "react-bootstrap"
import ButtonComponent from '../CommonComponents/ButtonComponent'
import ModalComponents from '../CommonComponents/ModalComponents'
import TextInput from '../CommonComponents/TextInput'
import TextArea from '../CommonComponents/TextArea'
import { connect } from "react-redux"
// import {setGridList , setProps} from "../redux/action"
import { useDispatch, useSelector } from "react-redux";
import { setProps, setGridList } from '../redux/reducer'


const TaskDashboard = () => {
    const [isOpen, setIsOpen] = useState(false)
    const initailsfromData = useSelector((state) => state.taskManager.formData);
    const initailsData = useSelector((state) => state.taskManager.data);
    console.log('initailsfromData :>> ', initailsfromData);
    const dispatch = useDispatch();
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

    const setFormData = () => {
        let fromData = {}
        fromData['tasktitle'] = ''
        fromData['taskdescription'] = ''
        fromData['taskhour'] = 0
        fromData['taskmintes'] = 0
        dispatch(setProps(fromData))
    }

    const handleFormData = (type, key, value) => {
        let fromData = { ...initailsfromData }
        if (type === "number-input") {
            fromData[key] = value
        } else {
            fromData[key] = value
        }
        dispatch(setProps(fromData))
    }

    const handleAddbuttonClick = () => {
        let gridData = [...initailsData]
        gridData.push(initailsfromData)
        setIsOpen(false)
        dispatch(setGridList(gridData))

    }



    return (
        <>
            <div className='row'>
                <div className='col-12 d-flex justify-content-center border mb-1'>
                    <h1 className='p-2'>Task Dashboard</h1>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-6 parent-card d-flex'>
                    <div className='card col-md-12 border'>
                        <div className=' d-flex justify-content-between'>
                            <h3 className='col-md-2 w-50 d-flex justify-content-start w-50'>Create Task</h3>
                            <div className='d-flex'>
                                <div className="">
                                    <ButtonComponent
                                        type="submit"
                                        className={"btn btn-primary "}
                                        ButtonName={"Create"}
                                        onClick={() => (setIsOpen(true), setFormData())}
                                    />
                                </div>
                            </div>
                        </div>
                        <hr className='m-0' />
                        <div className='table-responsive project-table table-bordered table-btn'>
                            <table className='table'>
                                <thead>
                                    <tr>
                                        <th>Task Title</th>
                                        <th>Task Description</th>
                                        <th>Task Hour</th>
                                        <th>Minute</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        initailsData?.map((data) => {
                                            return (
                                                <tr>
                                                    <>
                                                        <td>{data.tasktitle}</td>
                                                        <td>{data.taskdescription}</td>
                                                        <td>{data.taskhour}</td>
                                                        <td>{data.taskmintes}</td>
                                                    </>
                                                </tr>
                                            )
                                        })
                                    }
                                    {/* <td>Task Planning</td>
                                        <td>Planning For Task DashBoard</td>
                                        <td>1 Hr</td>
                                        <td>30 Min</td> */}
                                </tbody>
                            </table>

                        </div>
                    </div>

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
                </div>
            </div>

            {
                isOpen === true &&
                <ModalComponents
                    size={"md"}
                    open={isOpen}
                    title={"Create Task"}
                    onClose={() => setIsOpen(!isOpen)}
                    body={
                        <div className='row'>
                            <div className='col-12'>
                                <div className='p-2 col-12 col-sm-12'>
                                    <div className='form-group validate-input m-0'>
                                        <label className='label-form-control '>Task Title:</label>
                                        <TextInput
                                            type={'text'}
                                            className={"form-control"}
                                            id={"tasktitle"}
                                            name={"tasktitle"}
                                            placeholder={"Enter Task Title"}
                                            required={false}
                                            disabled={false}
                                            // value={}
                                            onChange={(e) => handleFormData("input-text", "tasktitle", e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className='p-2 col-12 col-sm-12'>
                                    <div className='form-group validate-input m-0'>
                                        <label className='label-form-control '>Task Description:</label>
                                        <TextArea
                                            type={'text'}
                                            className={"form-control"}
                                            id={"taskdescription"}
                                            name={"taskdescription"}
                                            placeholder={"Enter Task description"}
                                            required={false}
                                            disabled={false}
                                            onChange={(e) => handleFormData("input-text", "taskdescription", e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className='d-flex col-12'>
                                    <div className='p-2 col-sm-6'>
                                        <div className='form-group validate-input m-0'>
                                            <label className='label-form-control '>Hour(s)</label>
                                            <TextInput
                                                type={'number'}
                                                className={"form-control"}
                                                id={"taskhour"}
                                                name={"taskhour"}
                                                placeholder={"Enter Hour"}
                                                required={false}
                                                disabled={false}
                                                onChange={(e) => handleFormData("number-input", "taskhour", e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className='p-2 col-sm-6'>
                                        <div className='form-group validate-input m-0'>
                                            <label className='label-form-control '>Minute(s)</label>
                                            <TextInput
                                                type={'number'}
                                                className={"form-control"}
                                                id={"taskminute"}
                                                name={"taskminute"}
                                                placeholder={"Enter Minute"}
                                                required={false}
                                                disabled={false}
                                                onChange={(e) => handleFormData("number-input", "taskmintes", e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    }
                    footer={
                        <>
                            <div className='d-flex justify-content-between'>
                                <button type='submit' className='btn btn-primary mr-3' onClick={() => handleAddbuttonClick()}>
                                    Submit
                                </button>

                                <ButtonComponent
                                    type="submit"
                                    className={"btn btn-primary "}
                                    ButtonName={"cancel"}
                                    onClick={() => setIsOpen(!isOpen)}
                                />
                            </div>
                        </>

                    }
                />
            }
        </>

    )
}

// const mapStateToProps =(state)=>({
//     // const { formData , data } = ownState
//     // return { formData  , data}
//     ...state,
//     // formData : state.formData,
//     // data : state.data,
// })

// const mapDispatchToProps = (dispatch) => {
//     return {
//     setGridList: () => dispatch(setGridList()),
//     setProps: () => dispatch(setProps()),
//     }
//   }

// export default connect(mapStateToProps ,mapDispatchToProps)(TaskDashboard)
export default TaskDashboard

