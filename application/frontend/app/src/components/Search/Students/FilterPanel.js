import { Segment, Header, Input, Dropdown } from 'semantic-ui-react'
import { useState } from "react";

import { useDispatch, useSelector } from 'react-redux';
import { searchStudentActions } from '../../store/search-student-slice';
import SkillTag from './Tags/SkillTag';

const schoolYearOptions = [
    {
        key: 'All',
        text: 'All',
        value: 'All'
    },
    {
        key: 'Freshman',
        text: 'Freshman',
        value: 'Freshman'
    },
    {
        key: 'Sophmore',
        text: 'Sophmore',
        value: 'Sophmore'
    },
    {
        key: 'Junior',
        text: 'Junior',
        value: 'Junior'
    },
    {
        key: 'Senior',
        text: 'Senior',
        value: 'Senior'
    }
]

const Filter = (props) => {
    // The following states only store values inputed into the text boxes.
    const [skillValue, setSkillValue] = useState();
    const [schoolYearValue, setSchoolYearValue] = useState("");
    // Selectors:
    const skillItems = useSelector(state => state.searchStudent.skills);

    const dispatch = useDispatch();

    const addSkillHandler = () => {
        dispatch(searchStudentActions.addSkill(
            {
                skillInput: skillValue
            }
        ))
    }

    const addSchoolYearHandler = (e, data) => {
        setSchoolYearValue(data.value);
        dispatch(searchStudentActions.addSchoolYear(
            {
                schoolYear: data.value
            }
        ));
    }

    return (
        <Segment textAlign='center'>
            <Header as='h2' textAlign='center'>Narrow By</Header>
            <Input fluid action={{
                icon: 'plus',
                onClick: () => {
                    addSkillHandler();
                }
            }} onChange={(e) => {
                setSkillValue(e.target.value);
            }} placeholder='Add Skills, Experience, Courses...' />
            <br />
            {skillItems.map(item => (
                <SkillTag item={{ value: item }} />
            ))}

            <Header as='h2' textAlign='center'>School Year</Header>
            <Dropdown placeholder='Select Year' fluid selection 
            options={schoolYearOptions} 
            onChange={addSchoolYearHandler} />
        </Segment>
    );
}

export default Filter;