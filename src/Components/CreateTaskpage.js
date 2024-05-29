import React from 'react'
import ButtonComponent from '../CommonComponents/ButtonComponent'


const CreateTaskpage = () => {
    return (
    <div className='col-md-6 parent-card d-flex'>
        <div className='card col-md-12 border'>
            <div className=' d-flex justify-content-between'>
                <h3 className='col-md-2 w-50 d-flex justify-content-start w-50'>Create Task</h3>
                <div className='d-flex'>
                    <div className=' col-md-2'>
                        <ButtonComponent
                            type="submit"
                            className={"btn btn-primary "}
                            ButtonName={"Create"}
                        />
                    </div>
                </div>
            </div>
            <hr className='m-0' />
        </div>

    </div>
    )
}

export default CreateTaskpage
