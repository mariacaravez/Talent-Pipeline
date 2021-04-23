import { Segment, Card } from 'semantic-ui-react'
import StudentCard from './StudentCard';

const SearchResults = (props) => {
    const { results } = props;
    return (
            <Card.Group itemsPerRow={2}>
                {results.map(item => (
                    <StudentCard student={item} />
                ))}
            </Card.Group>
    );
}
export default SearchResults;