import React,{Component} from "react";

class LimitButtons extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: this.props.limit
        };
    }

    handleOptionChange = changeEvent => {
        this.setState({
            selectedOption: changeEvent.target.value
        })
        this.props.changeHandler(changeEvent.target.value)
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
                                        type="radio"
                                        name="react-tips"
                                        value="20"
                                        checked={this.state.selectedOption === '20'}
                                        onChange={this.handleOptionChange}
                                        className="form-check-input"
                                    />
                                    20
                                </label>
                            </div>
                            <div className="form-check">
                                <label>
                                    <input
                                        type="radio"
                                        name="react-tips"
                                        value="30"
                                        checked={this.state.selectedOption === '30'}
                                        onChange={this.handleOptionChange}
                                        className="form-check-input"
                                    />
                                    30
                                </label>
                            </div>
                            <div className="form-check">
                                <label>
                                    <input
                                        type="radio"
                                        name="react-tips"
                                        value="40"
                                        checked={this.state.selectedOption === '40'}
                                        onChange={this.handleOptionChange}
                                        className="form-check-input"
                                    />
                                    40
                                </label>
                            </div>
                            <div className="form-check">
                                <label>
                                    <input
                                        type="radio"
                                        name="react-tips"
                                        value="50"
                                        checked={this.state.selectedOption === '50'}
                                        onChange={this.handleOptionChange}
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
    }
}

export default LimitButtons;