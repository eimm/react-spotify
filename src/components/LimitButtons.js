import React,{Component} from "react";
import { Field, reduxForm } from 'redux-form';

let LimitButtons = props =>{
        return (
            <div className="container">
                <div className="row mt-5">
                    <div className="col-sm-12">
                        <form>
                            <div className="form-check">
                                <label>
                                    <Field
                                        type="radio"
                                        name="limit"
                                        value="20"
                                        component="input"
                                        className="form-check-input"
                                    />
                                    20
                                </label>
                            </div>
                            <div className="form-check">
                                <label>
                                    <Field
                                        type="radio"
                                        name="limit"
                                        value="30"
                                        component="input"
                                        className="form-check-input"
                                    />
                                    30
                                </label>
                            </div>
                            <div className="form-check">
                                <label>
                                    <Field
                                        type="radio"
                                        name="limit"
                                        value="40"
                                        component="input"
                                        className="form-check-input"
                                    />
                                    40
                                </label>
                            </div>
                            <div className="form-check">
                                <label>
                                    <Field
                                        type="radio"
                                        name="limit"
                                        value="50"
                                        component="input"
                                        className="form-check-input"
                                    />
                                    50
                                </label>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    // }
}


export default reduxForm({
    form: 'limitRadio' // a unique identifier for this form
})(LimitButtons)


