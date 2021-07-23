import React from 'react'
import { InputGroup } from 'react-bootstrap';
import { FormControl, Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const Submit = ({
    handleSubmit,
    search,
    setSearch
}) => {
    return (
        <div>
            <Form className="form">
                <Form.Group className="mb-2" id="formBasicEmail" className="groupOne">
                    <Form.Control
                        type="text"
                        placeholder="Enter your movie"
                        id='search'
                        name='search'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)} />
                </Form.Group>
                <div className="groupTwo">
                    <Button variant="warning" type="button" className="btn" onClick={handleSubmit}>
                        Search
                    </Button>
                </div>

            </Form>
        </div>
    )
}

export default Submit
