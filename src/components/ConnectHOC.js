import React from "react";


export default function withConnect (WrappedComponent,selectData) {
    return class extends React.Component{
        constructor(props) {
            super(props);
        }
        render() {
            return <WrappedComponent data = {selectData}{...this.props}/>
        }
    }
}



