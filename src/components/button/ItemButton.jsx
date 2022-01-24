import React from 'react'

export class ItemButton extends React.Component {

    render() {
        return (
            <button onClick={this.props.click}>{this.props.children}</button>
        );
    }
}
