import React from 'react'
import { Modal, Button, ButtonToolbar, Placeholder } from 'rsuite';

const ModalComponents = (props) => {
    return (
        <div>
            <ButtonToolbar>
                <Button>{props.ButtonName}</Button>
            </ButtonToolbar>

            <Modal
            size={props.size}
            open={props.open} 
            onClose={props.onClose}
            >
                <Modal.Header>
                    <Modal.Title>{props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {props.body}
                    {/* <Placeholder.Paragraph /> */}
                </Modal.Body>
                <Modal.Footer>
                    {/* <Button>
                        Ok
                    </Button>
                    <Button>
                        Cancel
                    </Button> */}
                    {props.footer}
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ModalComponents

// const App = () => {
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);
//   return (
//     <>
//       <ButtonToolbar>
//         <Button onClick={handleOpen}> Open</Button>
//       </ButtonToolbar>

//       <Modal open={open} onClose={handleClose}>
//         <Modal.Header>
//           <Modal.Title>Modal Title</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Placeholder.Paragraph />
//         </Modal.Body>
//         <Modal.Footer>
//           <Button onClick={handleClose} appearance="primary">
//             Ok
//           </Button>
//           <Button onClick={handleClose} appearance="subtle">
//             Cancel
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// };

// ReactDOM.render(<App />, document.getElementById('root'));
