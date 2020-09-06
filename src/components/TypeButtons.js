import React,{Component} from "react";
import { Field, reduxForm } from 'redux-form';

let TypesButtons = props => {
        return (
            <div className="container">
                <div className="row mt-5">
                    <div className="col-sm-12">
                        <form>
                            <div className="form-check">
                                <label>
                                    <Field
                                        type="checkbox"
                                        name="album"
                                        id="album"
                                        component="input"
                                        className="form-check-input"
                                    />
                                    Album
                                </label>
                            </div>
                            <div className="form-check">
                                <label>
                                    <Field
                                        type="checkbox"
                                        name="artist"
                                        id="artist"
                                        component="input"
                                        className="form-check-input"
                                    />
                                    Artist
                                </label>
                            </div>
                            <div className="form-check">
                                <label>
                                    <Field
                                        type="checkbox"
                                        name="track"
                                        id="track"
                                        component="input"
                                        className="form-check-input"
                                    />
                                    Track
                                </label>
                            </div>
                            <div className="form-check">
                                <label>
                                    <Field
                                        type="checkbox"
                                        name="playlist"
                                        id="playlist"
                                        component="input"
                                        className="form-check-input"
                                    />
                                    Playlist
                                </label>
                            </div>
                            {/*<div className="form-check">*/}
                            {/*    <label>*/}
                            {/*        <input*/}
                            {/*            type="checkbox"*/}
                            {/*            name="react-tips"*/}
                            {/*            value="show"*/}
                            {/*            checked={this.state.selectedOption.includes('show')}*/}
                            {/*            onChange={this.handleOptionChange}*/}
                            {/*            className="form-check-input"*/}
                            {/*        />*/}
                            {/*        Show*/}
                            {/*    </label>*/}
                            {/*</div>*/}
                            {/*<div className="form-check">*/}
                            {/*    <label>*/}
                            {/*        <input*/}
                            {/*            type="checkbox"*/}
                            {/*            name="react-tips"*/}
                            {/*            value="episode"*/}
                            {/*            checked={this.state.selectedOption.includes('episode')}*/}
                            {/*            onChange={this.handleOptionChange}*/}
                            {/*            className="form-check-input"*/}
                            {/*        />*/}
                            {/*        Episode*/}
                            {/*    </label>*/}
                            {/*</div>*/}
                        </form>
                    </div>
                </div>
            </div>
        );

}

export default reduxForm({
    form: 'typeButtons'  // a unique identifier for this form
})(TypesButtons)