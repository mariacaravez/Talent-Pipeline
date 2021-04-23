import { Label, Icon } from 'semantic-ui-react'

import { useDispatch, useSelector } from 'react-redux';
import { searchStudentActions } from '../../../store/search-student-slice';



const DiversityTag = (props) => {
    const diversityItems = useSelector(state => state.searchStudent.diversity);

    const { value } = props.item;

    const dispatch = useDispatch();

    const removeDiversityHandler = () => {
        let index = diversityItems.indexOf(value);
        dispatch(searchStudentActions.removeDiversity({
            diversityIndex: index
        }));
    }

    return (
        <Label as='a'>
            {value}
            <Icon name='delete' onClick={removeDiversityHandler} />
        </Label>
    );
}

export default DiversityTag;