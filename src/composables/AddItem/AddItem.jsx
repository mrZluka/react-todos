import React from 'react'
import ItemInput from "../../components/ItemInput";
import ItemButton from "../../components/ItemButton";
import './AddItem.css'

export class AddItem extends React.Component {
 	state = {value: ""};
	inputComponent = React.createRef();
	onChange = (value) => {
		this.setState({value})
	}

    render() {
        return (
                <div className={'addItem'}>
                    <ItemInput ref={this.inputComponent}  onChange={this.onChange } value={this.state.value}/>
                    <ItemButton click={this.onAddPressed.bind(this)}>Add</ItemButton>
                    <ItemButton click={this.onClearPressed.bind(this)}>Clear</ItemButton>
                </div>
        );
    }

    onClearPressed() {
        this.setState({
            value: ""
        });

        this.inputComponent.current.setFocus();
    }

    onAddPressed() {
        const value = this.state.value;
        if (this.props.onAddItem) {
            this.props.onAddItem(value);
        }
        this.onClearPressed();
    }
}
