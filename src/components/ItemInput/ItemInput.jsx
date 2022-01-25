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
                    <for name='addItem'>Add item</for>
                    <input ref={elem => this.input = elem} type={'text'} name={'addItem'} value={this.props.value} onChange={this.onChangeData}/>
            </div>
        );
    }
}