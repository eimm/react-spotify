import React,{Component} from "react";

class TypesButtons extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: this.props.type
        };
    }

    handleOptionChange = changeEvent => {
        if ((this.state.selectedOption && changeEvent.target.value) === 'track'){
            this.setState({
                    selectedOption: ''
                }
            )
        }else if (this.state.selectedOption.includes(changeEvent.target.value)){
            const line1 =  this.state.selectedOption.replace('%2C'+changeEvent.target.value,'')
            this.setState({
                selectedOption: line1
                }
            )
            this.props.changeHandler(line1)

            console.log(line1);
        } else {
            let line = '';
            if (this.state.selectedOption === ''){
                line = changeEvent.target.value;
            }
            else {
                line = this.state.selectedOption + '%2C' + changeEvent.target.value
            }
            this.setState({
                selectedOption: line
            });
            this.props.changeHandler(line)

            console.log(line);
        }
    };


    render() {
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

export default TypesButtons;