import React from 'react'

import './ItemInput.css'

export class ItemInput extends React.Component {
    render() {
        return (
            <div className={'item-input'}>
                    <for name='addItem'>Add item</for>
                    <input ref={elem => this.input = elem} type={'text'} name={'addItem'} value={this.props.value} onChange={this.onChangeData.bind(this)}/>
            </div>
        );
    }

    onChangeData(e) {
        if (this.props.onChange) {
            this.props.onChange(e.target.value);
        }
    }

    setFocus() {
        this.input.focus();
    }
}
