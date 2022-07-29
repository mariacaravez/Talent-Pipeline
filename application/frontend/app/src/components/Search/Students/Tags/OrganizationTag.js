import { Label, Icon } from 'semantic-ui-react'

import { useDispatch, useSelector } from 'react-redux';
import { searchStudentActions } from '../../../store/search-student-slice';



const OrganizationTag = (props) => {
    const organizationItems = useSelector(state => state.searchStudent.organizations);

    const { value } = props.item;

    const dispatch = useDispatch();

    const removeOrganizationHandler = () => {
        let index = organizationItems.indexOf(value);
        dispatch(searchStudentActions.removeOrganization({
            organizationIndex: index
        }));
    }

    return (
        <Label as='a'>
            {value}
            <Icon name='delete' onClick={removeOrganizationHandler} />
        </Label>
    );
}

export default OrganizationTag;