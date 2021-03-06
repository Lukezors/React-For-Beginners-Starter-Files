import React from "react";


class AddFishForm extends React.Component {
    nameRef = React.createRef();
    priceRef = React.createRef();
    descRef = React.createRef();
    statusRef = React.createRef();
    imageRef = React.createRef();

    createFish = (event) => {
        event.preventDefault();
        const fish = {
            nameRef: this.nameRef.current.value,
            priceRef: parseFloat(this.priceRef.current.value),
            descRef: this.descRef.current.value,
            statusRef: this.statusRef.current.value,
            imageRef: this.imageRef.current.value,
        }
        this.props.addFish(fish);

        event.currentTarget.reset();
    }

    render() {
        return (
            <form className="fish-edit" onSubmit={this.createFish}>
                <input type="text" ref={this.nameRef} name="name" placeholder="Name" />
                <input type="text" ref={this.priceRef} name="price" placeholder="Price" />
                <select name="status" ref={this.statusRef}>
                    <option value="available">Fresh!</option>
                    <option value="unavailable">Sold out!</option>
                </select>
                <textarea name="desc" ref={this.descRef} placeholder="Description"></textarea>
                <input type="text" ref={this.imageRef} name="image" placeholder="Image" />
                <button type="submit">+ Add Fish</button> 
            </form>
        );
    }
}

export default AddFishForm;