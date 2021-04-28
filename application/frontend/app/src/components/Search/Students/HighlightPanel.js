import { Segment, Input, Header } from 'semantic-ui-react'
import { useState } from "react";

import { useDispatch, useSelector } from 'react-redux';
import { searchStudentActions } from '../../store/search-student-slice';
import OrganizationTag from './Tags/OrganizationTag';
import DiversityTag from './Tags/DiversityTag';

const HighlightPanel = (props) => {
    // The following states only store values inputed into the text boxes.
    const [organizationValue, setOrganizationValue] = useState();
    const [diversityValue, setDiversityValue] = useState();

    // Selectors:
    const organizationItems = useSelector(state => state.searchStudent.organizations);
    const diversityItems = useSelector(state => state.searchStudent.diversity);

    const dispatch = useDispatch();

    const addOrganizationHandler = () => {
        dispatch(searchStudentActions.addOrganization(
            {
                organizationInput: organizationValue
            }
        ))
    }
    const addDiversityHandler = () => {
        dispatch(searchStudentActions.addDiversity(
            {
                diversityInput: diversityValue
            }
        ))
    }

    return (
        <Segment color='orange' textAlign='center'>
            <Header as='h2' textAlign='center'>Highlight By</Header>
            <Header as='h4' textAlign='center'>Groups/Organizations:</Header>
            <Input fluid action={{
                icon: 'plus',
                onClick: () => {
                    addOrganizationHandler();
                }
            }} onChange={(e) => {
                setOrganizationValue(e.target.value);
            }} placeholder='Add Organization or Group' />
            <br />
            {organizationItems.map(item => (
                <OrganizationTag item={{ value: item }} />
            ))}
            <Header as='h4' textAlign='center'>Diversity:</Header>
            <Input fluid action={{
                icon: 'plus',
                onClick: () => {
                    addDiversityHandler();
                }
            }} onChange={(e) => {
                setDiversityValue(e.target.value);
            }} placeholder='Add Diversity Parameter' />
            <br />
            {diversityItems.map(item => (
                <DiversityTag item={{ value: item }} />
            ))}
            {/* <Header as='h4' textAlign='center'>Age:</Header>
            <Form>
                <Form.Group>
                    <lable>max</lable>
                    <Form.Input placeholder='0' width={4} type='number' />
                    <lable>min</lable>
                    <Form.Input placeholder='∞' width={4} type='number' />
                </Form.Group>
            </Form> */}
        </Segment>
    );
}

export default HighlightPanel;