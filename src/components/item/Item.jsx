import React from 'react'
import './Item.css'

export class Item extends React.Component {
	itemClassName() {
        return [
            "todoItem",
            this.props.itemData.selected ? "done" : ""
        ].join(" ").trim();
    }

    onCheckboxChange() {
        const newState = !this.props.itemData.selected;
        this.props.onStatusChange({id: this.props.itemData.id, state: newState});
    }

    render() {
        return (
            <div className={this.itemClassName()}>
                <span onClick={() => this.props.removeItem(this.props.itemData.id)}>[X]</span>
                <input type="checkbox" checked={this.props.itemData.selected} onChange={this.onCheckboxChange.bind(this)}/>
                <span className={'text'} onClick={this.onCheckboxChange.bind(this)}>{this.props.itemData.value}</span>
            </div>
        );
    }
}
