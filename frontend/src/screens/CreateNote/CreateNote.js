import React, { useEffect, useState } from 'react';
import MainScreen from '../../components/MainScreen';
import { Badge, Button, Card, Form } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';
import ReactMarkdown from 'react-markdown';
import { createNoteAction } from '../../action/notesActions';

function CreateNote() {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [category, setCategory] = useState("");

    const dispatch = useDispatch();
    const history = useHistory();

    const noteCreate = useSelector((state) => state.noteCreate);
    const { loading, error, note } = noteCreate;


    const resetHandler = () => {
        setTitle("");
        setCategory("");
        setContent("");
    };

    const submitHandler = (e) => {
        e.preventDefault();
        if (!title || !content || !category) return;
        dispatch(createNoteAction(title, content, category));
        resetHandler();
        history.push('/mynotes');
    };

    return (
        <MainScreen title={`Create a note`} >
            <Card to='createnote'>
                <Card.Header >Create new Note</Card.Header>
                <Card.Body>
                    <Form onSubmit={submitHandler}>
                        {error && <ErrorMessage variant='danger' >{error}</ErrorMessage>}
                        <Form.Group controlId='title'>
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="title"
                                value={title}
                                placeholder="Enter the title"
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId='content'>
                            <Form.Label>Content</Form.Label>
                            <Form.Control
                                as="textarea"
                                value={content}
                                placeholder="Enter the content"
                                roes={7}
                                onChange={(e) => setContent(e.target.value)}
                            />
                        </Form.Group>{
                            content && (
                                <Card>
                                    <Card.Header>Note Preview</Card.Header>
                                    <Card.Body>
                                        <ReactMarkdown>{content}</ReactMarkdown>
                                    </Card.Body>
                                </Card>
                            )
                        }
                        <Form.Group controlId='category'>
                            <Form.Label>Category</Form.Label>
                            <Form.Control
                                type="content"
                                value={category}
                                placeholder="Enter the category"
                                onChange={(e) => setCategory(e.target.value)}
                            />
                        </Form.Group>
                        {loading && <Loading size={50} />}
                        <Button type='submit' variant='primary'>Create Note</Button>
                        <Button className='mx-2' onClick={resetHandler} variant='danger'>Reset Fields</Button>
                    </Form>
                </Card.Body>
                <Card.Footer className='text-muted'>Creating on --: {" "}{new Date().toLocaleDateString()}</Card.Footer>
            </Card>
        </MainScreen>
    )
}
export default CreateNote;