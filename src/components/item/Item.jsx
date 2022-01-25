import React from 'react'
import './Item.css'
import {observer} from "mobx-react";

export const Item = observer(
 class Item extends React.Component {
    render() {
        return (
            <div className={this.itemClassName()}>
                <span onClick={() => this.props.removeItem(this.props.itemData.id)}>[X]</span>
                <input type="checkbox" checked={this.props.itemData.isComplete} onChange={this.onCheckboxChange.bind(this)}/>
                <span className={'text'} onClick={this.onCheckboxChange.bind(this)}>{this.props.itemData.text}</span>
            </div>
        );
    }

    itemClassName() {
        return [
            "todoItem",
            this.props.itemData.isComplete ? "done" : ""
        ].join(" ").trim();
    }

    onCheckboxChange() {
        const newState = !this.props.itemData.isComplete;
        this.props.onStatusChange({id: this.props.itemData.id, state: newState});
    }

}
)
