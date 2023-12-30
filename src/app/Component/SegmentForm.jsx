import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { FaMinus, FaPlus } from 'react-icons/fa'

const SegmentForm = ({
    handleFormChange,
    formData,
    fields,
    addSegment,
    thisSelectedSegment,
    setThisSelectedSegment,
    error,
    removeSegment
}) => {
    const handleFieldChange = (fieldName, e, index) => {
        const { value, name } = e.target
        if (index !== undefined) {
            const thisSchema = fields[1]?.options?.find((obj) => obj.value === value);
            const updatedSchema = [...formData.schema];
            updatedSchema[index] = thisSchema;
            handleFormChange({ ...formData, schema: updatedSchema });
            setThisSelectedSegment(value)
        } else {
            handleFormChange({ ...formData, [fieldName]: value });
        }
    };
    return (
        <>
            <Row>
                {
                    fields?.map((field, index) => {
                        return (
                            <Col lg={12}>
                                {field.type === 'text' && (
                                    <>
                                        <p>Enter the Name of the Segment</p>
                                        <input
                                            style={{
                                                width: '100%',
                                                padding: 8
                                            }}
                                            type="text"
                                            placeholder='Name of The Segment'
                                            value={formData[field.name] || ""}
                                            onChange={(e) => handleFieldChange(field.name, e)}
                                        />
                                        <p className='mt-3'>To save your segment,you need to add the schemas to build the query</p>
                                        <Row className="justify-content-md-end">
                                            <Col lg={4}>
                                                <p style={{
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    fontSize: '12px'
                                                }}>
                                                    <span style={{
                                                        height: '13px',
                                                        width: '13px',
                                                        backgroundColor: '#57e557',
                                                        borderRadius: '50%',
                                                        display: 'block'
                                                    }}></span> &nbsp;  - User Traits</p>
                                            </Col>
                                            <Col lg={4}>
                                                <p style={{
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    fontSize: '12px'
                                                }}>
                                                    <span style={{
                                                        height: '13px',
                                                        width: '13px',
                                                        backgroundColor: 'red',
                                                        borderRadius: '50%',
                                                        display: 'block'
                                                    }}></span>  &nbsp; - Group Traits</p>
                                            </Col>
                                        </Row>
                                    </>
                                )}
                                {error && (
                                    <Row>
                                        <Col>
                                            <p style={{ color: 'red' }}>{error}</p>
                                        </Col>
                                    </Row>
                                )}

                                {field.type === 'select' && formData.schema?.map((item, index) => {
                                    return (
                                        <div key={index} style={{ marginTop: '10px' }}>
                                            <Row>
                                                <Col lg={11}>
                                                    <select
                                                        style={{
                                                            width: '100%',
                                                            padding: "10px",
                                                            fontSize: '14px'
                                                        }}
                                                        value={item?.value || ''}
                                                        onChange={(e) => handleFieldChange(field.name, e, index)}
                                                    >
                                                        <option value={""} style={{ display: 'none' }}>Add Schema To Segment</option>
                                                        {field.options.map((data, idx) => (
                                                            <option key={idx} value={data.value} name={data.label}>{data.label}</option>
                                                        ))}
                                                    </select>
                                                </Col>
                                                <Col lg={1} style={{ backgroundColor: "#eafcff" }}>
                                                    <FaMinus
                                                        style={{ cursor: 'pointer' }}
                                                        onClick={() => removeSegment(index)}
                                                    />
                                                </Col>
                                            </Row>
                                        </div>
                                    )
                                })
                                }


                            </Col>
                        )
                    })
                }
            </Row>

            {(!formData?.schema?.length || thisSelectedSegment !== "") && (
                <Row>
                    <Col>
                        <span
                            style={{
                                color: '#009688',
                                textDecoration: 'underline',
                                cursor: 'pointer',
                                fontSize: '10px'
                            }}
                            onClick={addSegment}
                        >
                            <FaPlus
                                style={{ marginRight: '3px' }}
                            />
                            Add New Segment
                        </span>
                    </Col>
                </Row>
            )}


        </>
    )
}

export default SegmentForm
