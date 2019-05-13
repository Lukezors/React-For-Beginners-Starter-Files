import React from "react";


class EditFishForm extends React.Component {    

    handleChange = (event) => {
        const fieldname = event.currentTarget.name;
        const newValue = event.currentTarget.value;
        const updatedFish = {
            ...this.props.fish,
            [fieldname]: newValue
        }

        this.props.updateFish(this.props.index, updatedFish)
        
    }

    render() {
        const { image, name, price, desc, status } = this.props.fish;
        return (
            <div className="fish-edit" >
                <input type="text" name="name" value={name} onChange={this.handleChange} />
                <input type="text" name="price" value={price} onChange={this.handleChange} />
                <select name="status" value={status} onChange={this.handleChange}>
                    <option value="available">Fresh!</option>
                    <option value="unavailable">Sold out!</option>
                </select>
                <textarea name="desc" value={desc} onChange={this.handleChange}></textarea>
                <input type="text" name="image" value={image} onChange={this.handleChange} />
            </div>
        );
    }
}

export default EditFishForm;