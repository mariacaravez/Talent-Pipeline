import { Segment, Input, Grid, Button } from 'semantic-ui-react'
import { useState, useEffect } from "react";
import Axios from "axios";

import { useDispatch, useSelector } from 'react-redux';
import { searchStudentActions } from '../../store/search-student-slice';
import MajorTag from './Tags/MajorTag';

const SearchPanel = (props) => {
    
    const { dataCallback } = props;
    // The following states only store values inputed into the text boxes.
    const [majorValue, setMajorValue] = useState("");
    const [textValue, setTextValue] = useState("");

    // Selectors:
    const majorItems = useSelector(state => state.searchStudent.majors);
    const textInput = useSelector(state => state.searchStudent.textInput);

    const dispatch = useDispatch();

    const addMajorHandler = () => {
        dispatch(searchStudentActions.addMajor({
            majorInput: majorValue
        }))
    }

    useEffect(() => {
        setTextValue(textInput);
        // submitSearchHandler();
    }, []);
    useEffect(() => {
        submitSearchHandler();
    }, [textInput]);

    const submitSearchHandler = () => {
        const optionsValue = '*';
        // http://localhost:6480/search/student
        // http://ec2-18-188-8-216.us-east-2.compute.amazonaws.com:6480/search/student
        Axios.get("http://localhost:6480/search/student", {
            params: { textValue: textValue, optionsValue: optionsValue }
        }).then((response) => {
            dataCallback(response.data);
        })
        dispatch(searchStudentActions.saveTextInput({
            textInput: textValue
        }));
    }

    return (
        <Segment>
            <Grid columns='equal'>
                <Grid.Column>
                    <Input fluid icon='search' placeholder='Keywords, Skills...' onChange={(e) => {
                        setTextValue(e.target.value);
                    }} />
                </Grid.Column>
                <Grid.Column>
                    <Input fluid disabled icon='map marker alternate' placeholder='Location...' />
                </Grid.Column>
                <Grid.Column>
                    <Input fluid action={{
                        icon: 'plus',
                        onClick: () => {
                            addMajorHandler();
                        }
                    }} onChange={(e) => {
                        setMajorValue(e.target.value);
                    }} placeholder='Add Major...' />
                    <br />
                    {majorItems.map(item => (
                        <MajorTag item={{ value: item }} />
                    ))}
                </Grid.Column>
                <Grid.Column width={2}>
                    <Button content='Search' onClick={submitSearchHandler} />
                </Grid.Column>
            </Grid>
        </Segment>
    );
}

export default SearchPanel;