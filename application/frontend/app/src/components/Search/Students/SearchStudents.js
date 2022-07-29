// Components
import SearchResults from './SearchResults';
import FilterPanel from './FilterPanel';
import HighlightPanel from './HighlightPanel';
import SearchPanel from './SearchPanel';

import React, { useState, useEffect } from 'react'
import { Grid } from 'semantic-ui-react'
import styles from './SearchStudents.module.css';
// Redux Imports
import { useSelector } from 'react-redux';

const SearchStudents = () => {
    const [studentList, setStudentList] = useState([]);
    

    // Create a callback so we can set the list of students based on actions
    // from child.
    const handleDataCallback = (students) => {
        setStudentList(students);
        console.log(studentList);
    }

    return (
        <div className={styles.studentsContainer}>
            <SearchPanel
                dataCallback={handleDataCallback}
            />
            <Grid>
                <Grid.Column width={4} >
                    <FilterPanel />
                    <br />
                    <HighlightPanel />
                </Grid.Column>
                <Grid.Column width={11}>
                    <SearchResults results={studentList}/>
                </Grid.Column>
            </Grid>
        </div>
    );
}

export default SearchStudents;