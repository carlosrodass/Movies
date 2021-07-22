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
            <Form>
                <Form.Group className="mb-3" id="formBasicEmail">
                    <Form.Control
                        type="text"
                        placeholder="Enter your movie"
                        id='search'
                        name='search'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)} />
                </Form.Group>
                <Button variant="warning" type="button" onClick={handleSubmit}>
                    Search
                </Button>
            </Form>
        </div>
    )
}

export default Submit
