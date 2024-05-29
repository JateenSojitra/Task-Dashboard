import React from 'react'
import { Button, ButtonToolbar } from 'rsuite';

const ButtonComponent = (props) => {
  return (
    <button type={props.type} disabled={props.disabled  || false} onClick={props.onClick} className={props.className}>
        {props.ButtonName}
    </button>
  )
}

export default ButtonComponent


// const App = () => (
//   <ButtonToolbar>
//     <Button appearance="default">Default</Button>
//   </ButtonToolbar>
// );
