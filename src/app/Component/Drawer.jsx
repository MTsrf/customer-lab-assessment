import { Offcanvas } from 'react-bootstrap';
import React from 'react'
import { FaChevronLeft } from 'react-icons/fa';
import styled from 'styled-components';
import Button from './Button';


const FooterCanvas = styled.div`
    padding:15px;
    background-color:#d3d3d347;
    display:flex;
    gap:5px
`
const Drawer = ({
    show,
    handleClose,
    children,
    handleSubmit,
    handleCancel
}) => {
    return (
        <div className='Segment-Section'>
            <Offcanvas show={show} onHide={handleClose} placement={'end'} backdrop="static" className="dailog-component">
                <Offcanvas.Header
                    className="dailog-header"
                >
                    <Offcanvas.Title
                        style={{ color: "white" }}
                    >
                        <FaChevronLeft
                            onClick={handleClose}
                            style={{ cursor: 'pointer', marginRight: '10px' }}
                        />
                        Saving Segment
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {children}
                </Offcanvas.Body>
                <FooterCanvas>
                    <Button
                        variant="primary"
                        onClick={handleSubmit}
                    >
                        Save the Segment
                    </Button>
                    <Button
                        style={{ color: "red" }}
                        variant="danger"
                        onClick={handleCancel}
                    >
                        Cancel
                    </Button>
                </FooterCanvas>
            </Offcanvas>
        </div>
    )
}

export default Drawer
