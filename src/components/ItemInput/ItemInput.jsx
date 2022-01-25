import React, { Component } from 'react';

import './ItemInput.css'

export class ItemInput extends Component {

	onChangeData = (e) => {
		this.props.onChange(e.target.value);
	}

    setFocus() {
        this.input.focus();
    }
    render() {
        return (
            <div className={'item-input'}>
                    <label htmlFor='addItem'>Add item</label>
                    <input ref={elem => this.input = elem} type={'text'} name={'addItem'} value={this.props.value} onChange={this.onChangeData}/>
            </div>
        );
    }
}
