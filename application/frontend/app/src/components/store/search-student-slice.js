import { createSlice } from '@reduxjs/toolkit';

const searchStudentSlice = createSlice({
    name: 'searchStudent',
    initialState: { 
        textInput: "", 
        locationInput: "", 
        distance: 20, 
        majors: [],
        skills: [],
        schoolYear: "",
        organizations: [],
        diversity: [],
        ageMin: 0,
        ageMax: 125
    },
    reducers: {
        saveTextInput(state, action) {
            state.textInput = action.payload.textInput
        },
        addSkill(state, action) {
            state.skills.push(action.payload.skillInput)
        },
        removeSkill(state, action) {
            state.skills.splice(action.payload.skillIndex, 1)
        },
        addMajor(state, action) {
            state.majors.push(action.payload.majorInput)
        },
        removeMajor(state, action) {
            state.majors.splice(action.payload.majorIndex, 1)
        },
        addSchoolYear(state, action) {
            state.schoolYear = action.payload.schoolYear
        },
        addOrganization(state, action) {
            state.organizations.push(action.payload.organizationInput)
        },
        removeOrganization(state, action) {
            state.organizations.splice(action.payload.organizationIndex, 1)
        },
        addDiversity(state, action) {
            state.diversity.push(action.payload.diversityInput)
        },
        removeDiversity(state, action) {
            state.diversity.splice(action.payload.diversityIndex, 1)
        }
    }
});

export const searchStudentActions = searchStudentSlice.actions;

export default searchStudentSlice;