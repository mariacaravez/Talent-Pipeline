import React from "react";
import { useState } from "react";
import {
    Dropdown,
    Input,
    Button,
    Segment,
    Header
} from "semantic-ui-react";
import "../App.css";
import { Link, Route } from 'react-router-dom';
import SearchStudents from './Search/Students/SearchStudents';

// redux imports
import { useDispatch } from 'react-redux';
import { searchStudentActions } from './store/search-student-slice';

// Styling
const segment = { borderRadius: "15px" };

function NewSearchStudent() {
    const [textValue, setTextValue] = useState();
    const dispatch = useDispatch();

    const searchClickedHandler = () => {
        dispatch(searchStudentActions.saveTextInput({
            textInput: textValue
        }));
    };

    //   const handleSelect = (e, data) => {
    //     console.log(data.value);
    //     setOptionsValue(data.value);
    //     console.log(optionsValue);
    //   };

    return (
        <div>
            <Segment padded="very" className="responsive" style={segment}>
            <Header as="h4" textAlign="center" style={{color: "#696969"}}>Search For Students</Header>
                <div className="ui action input">
                    <Input
                        type="text"
                        placeholder="Search Student..."
                        value={textValue}
                        onChange={(e) => {
                            setTextValue(e.target.value);
                        }}
                        action
                    >
                    </ Input>
                    <Link to={{pathname: "/search-page/students/"}}>
                        <Button
                            style={{ backgroundColor: "#FBBE74" }}
                            onClick={searchClickedHandler}   
                            as={Link} 
                            to="/search/students/"                       
                        >
                            Find Students
              </Button>
                    </Link>
                </div>

            </Segment>
        </div>
    );
}
export default NewSearchStudent;
