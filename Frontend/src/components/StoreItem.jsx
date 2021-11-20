import React, { useState } from "react";

const StoreItem = ({ el, handleChange, handleAddToCart, form, price, id }) => {
    const [add, setAdd] = useState(false);

    const handleClick = () => {
        const obj = {
            price: form[el.name.toLowerCase()] * price[el.name.toLowerCase()],
            name: el.name.toLowerCase(),
            store: id,
            quantity: form[el.name.toLowerCase()],
        };
        handleAddToCart(obj);
        setAdd(true);
    };
    return (
        <tr key={el._id}>
            <td>
                <img
                    src="https://img.etimg.com/thumb/width-640,height-480,imgsize-263761,resizemode-1,msid-74742498/news/economy/agriculture/rice-export-from-india-to-ride-rabi-harvest-global-price/rice-agencies.jpg"
                    alt=""
                />
                <br />
                {el.name}
            </td>
            <td>{el.remaining ? "Available" : "Out of Stock"}</td>
            <td>
                <input
                    onChange={handleChange}
                    min={0}
                    max={10}
                    type="number"
                    name={el.name}
                    value={form[el.name.toLowerCase()]}
                />
            </td>
            <td>
                {price &&
                    form[el.name.toLowerCase()] * price[el.name.toLowerCase()]}
            </td>

            <td>
                {!add && <button onClick={handleClick}>Add</button>}
                {add && <span>&#10003;</span>}
            </td>
        </tr>
    );
};

export default StoreItem;
