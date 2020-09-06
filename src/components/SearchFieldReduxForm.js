import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';


let SearchFieldReduxForm = props => {
    const {handleSubmit, pristine, reset, submitting} = props
    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label>Search:</label>
                <div>
                    <Field
                        name="SearchField"
                        component="input"
                        type="text"
                        placeholder="write your search here"
                    />
                </div>
            </div>
            <div>
                <button type="submit" disabled={pristine || submitting}>Submit</button>
            </div>
        </form>
    )
}

SearchFieldReduxForm = reduxForm({
    form: 'searchFieldReduxForm'
})(SearchFieldReduxForm)



export default SearchFieldReduxForm