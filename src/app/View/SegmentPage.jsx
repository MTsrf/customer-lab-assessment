import React, { useState } from 'react'
import Drawer from '../Component/Drawer'
import Button from '../Component/Button'
import SegmentForm from '../Component/SegmentForm'
import { transformData } from '../util'

const initialState = {
    segment_name: "",
    schema: []
}
const fields = [
    {
        name: 'segment_name',
        label: 'Segment Name',
        type: 'text',
    },
    {
        name: 'schema',
        label: 'Schema',
        type: 'select',
        options: [
            { label: "First Name", value: "first_name" },
            { label: "Last Name", value: "last_name" },
            { label: "Gender", value: "gender" },
            { label: "Age", value: "age" },
            { label: "Account Name", value: "account_name" },
            { label: "City", value: "city" },
            { label: "State", value: "state" }
        ],
    },
];
const SegmentPage = () => {
    const [show, setShow] = useState(false)
    const [segmentForm, setSegmentForm] = useState(initialState)
    const [thisSelectedSegment, setThisSelectedSegment] = useState("");
    const [error, setError] = useState("")

    const validateForm = () => {
        if (!segmentForm.segment_name.trim()) {
            setError('Segment name cannot be empty');
            return false;
        }

        for (const item of segmentForm.schema) {
            if (!item.value.trim()) {
                setError('Schema value cannot be empty');
                return false;
            }
        }

        setError('');
        return true;
    };
    const handleAddSchema = () => {
        const newSchema = [...segmentForm.schema, { label: 'Add Schema To Segment', value: '' }];
        setSegmentForm({ ...segmentForm, schema: newSchema });
        setThisSelectedSegment("")

    };

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const handleFormChange = (formData) => {
        setSegmentForm(formData)
        setError("")
    }

    const handleSubmit = () => {
        if (validateForm()) {
            const formDatas = transformData(segmentForm)
            alert(JSON.stringify(formDatas))
            setSegmentForm(initialState)
        }
    }

    const removeSegment = (indexToRemove) => {
        const updatedSchema = segmentForm.schema.filter((_, index) => index !== indexToRemove);
        handleFormChange({ ...segmentForm, schema: updatedSchema });

    }

    const handleCancel = () => {
        setShow(false)
        setSegmentForm(initialState)
    }
    return (
        <>
            <div className='main-section'>
                <Button
                    onClick={handleShow}
                    variant="outline-primary"
                >
                    Save segment
                </Button>
            </div>
            <Drawer show={show} handleClose={handleClose} handleCancel={handleCancel} handleSubmit={handleSubmit}>
                <SegmentForm
                    handleFormChange={handleFormChange}
                    formData={segmentForm}
                    addSegment={handleAddSchema}
                    fields={fields}
                    thisSelectedSegment={thisSelectedSegment}
                    setThisSelectedSegment={setThisSelectedSegment}
                    error={error}
                    removeSegment={removeSegment}
                />
            </Drawer>
        </>
    )
}

export default SegmentPage
