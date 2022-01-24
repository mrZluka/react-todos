import React from 'react'
import {ItemInput} from "../input/ItemInput";
import {ItemButton} from "../button/ItemButton";
import './AddItem.css'

export class AddItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ""};
    }
    render() {
        return (
                <div className={'addItem'}>
                    <ItemInput ref={elem => this.inputComponent = elem} onChange={value => this.setState({value})} value={this.state.value}/>
                    <ItemButton click={this.onAddPressed.bind(this)}>Add</ItemButton>
                    <ItemButton click={this.onClearPressed.bind(this)}>Clear</ItemButton>
                </div>
        );
    }

    onClearPressed() {
        this.setState({
            value: ""
        });
        this.inputComponent.setFocus();
    }

    onAddPressed() {
        const value = this.state.value;
        if (this.props.onAddItem) {
            this.props.onAddItem(value);
        }
        this.onClearPressed();
    }
}
