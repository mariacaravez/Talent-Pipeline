import { Label, Icon } from 'semantic-ui-react'

import { useDispatch, useSelector } from 'react-redux';
import { searchStudentActions } from '../../../store/search-student-slice';



const SkillTag = (props) => {
    const skillItems = useSelector(state => state.searchStudent.skills);

    const { value } = props.item;

    const dispatch = useDispatch();

    const removeSkillHandler = () => {
        let index = skillItems.indexOf(value);
        dispatch(searchStudentActions.removeSkill({
            skillIndex: index
        }));
    }

    return (
        <Label as='a'>
            {value}
            <Icon name='delete' onClick={removeSkillHandler} />
        </Label>
    );
}

export default SkillTag;