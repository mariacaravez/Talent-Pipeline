import { Label, Icon } from 'semantic-ui-react'

import { useDispatch, useSelector } from 'react-redux';
import { searchStudentActions } from '../../../store/search-student-slice';



const MajorTag = (props) => {
    const majorItems = useSelector(state => state.searchStudent.majors);

    const { value } = props.item;

    const dispatch = useDispatch();

    const removeMajorHandler = () => {
        let index = majorItems.indexOf(value);
        dispatch(searchStudentActions.removeMajor({
            skillIndex: index
        }));
    }

    return (
        <Label as='a'>
            {value}
            <Icon name='delete' onClick={removeMajorHandler} />
        </Label>
    );
}

export default MajorTag;