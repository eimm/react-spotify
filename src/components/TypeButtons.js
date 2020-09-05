import React,{Component} from "react";
import {connect} from "react-redux";
import {changeSearchType} from "../Actions/Actions";

class TypesButtons extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: this.props.searchTypes
        };
    }
    handleOptionChange = changeEvent => {
        let types = this.state.selectedOption.split('%2C')
        if (this.state.selectedOption.includes(changeEvent.target.value)) {
            types = types.filter(item => item !== changeEvent.target.value)
        }else {
            types.push(changeEvent.target.value)
        }
        if (!types[0]){
            types.shift();
        }
        let lineTypes = types.join('%2C');
        this.setState({
            selectedOption: lineTypes
        });
        this.props.changeTypes(lineTypes);
    }

    render() {
        // this.state.selectedOption = this.props.searchTypes;
        return (
            <div className="container">
                <div className="row mt-5">
                    <div className="col-sm-12">
                        <form>
                            <div className="form-check">
                                <label>
                                    <input
                                        type="checkbox"
                                        name="react-tips"
                                        value="album"
                                        checked={this.state.selectedOption.includes('album')}
                                        onChange={this.handleOptionChange}
                                        className="form-check-input"
                                    />
                                    Album
                                </label>
                            </div>
                            <div className="form-check">
                                <label>
                                    <input
                                        type="checkbox"
                                        name="react-tips"
                                        value="artist"
                                        checked={this.state.selectedOption.includes('artist')}
                                        onChange={this.handleOptionChange}
                                        className="form-check-input"
                                    />
                                    Artist
                                </label>
                            </div>
                            <div className="form-check">
                                <label>
                                    <input
                                        type="checkbox"
                                        name="react-tips"
                                        value="track"
                                        checked={this.state.selectedOption.includes('track')}
                                        onChange={this.handleOptionChange}
                                        className="form-check-input"
                                    />
                                    Track
                                </label>
                            </div>
                            <div className="form-check">
                                <label>
                                    <input
                                        type="checkbox"
                                        name="react-tips"
                                        value="playlist"
                                        checked={this.state.selectedOption.includes('playlist')}
                                        onChange={this.handleOptionChange}
                                        className="form-check-input"
                                    />
                                    Playlist
                                </label>
                            </div>
                            <div className="form-check">
                                <label>
                                    <input
                                        type="checkbox"
                                        name="react-tips"
                                        value="show"
                                        checked={this.state.selectedOption.includes('show')}
                                        onChange={this.handleOptionChange}
                                        className="form-check-input"
                                    />
                                    Show
                                </label>
                            </div>
                            <div className="form-check">
                                <label>
                                    <input
                                        type="checkbox"
                                        name="react-tips"
                                        value="episode"
                                        checked={this.state.selectedOption.includes('episode')}
                                        onChange={this.handleOptionChange}
                                        className="form-check-input"
                                    />
                                    Episode
                                </label>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}



const mapDispatchToProps = (dispatch) => ({
    changeTypes: (payload) => dispatch(changeSearchType(payload)),
})

function mapStateToProps(state) {
    const searchTypes  = state.search.searchTypes;
    return { searchTypes }
}

export default connect(mapStateToProps,mapDispatchToProps)(TypesButtons)