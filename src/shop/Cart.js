import { useState } from "react";

const Cart = ({ shopData, cart, setCart }) => {

    const allPrice = cart.reduce((current, next) => (current) + Number(next.price * next.num), 0);
    const cartModify = (id) => {
        console.log("변한", id, cart);
        const newCart = cart.map(it => it.id === id ? { ...it, num: it.num + 1 } : it);
        setCart(newCart);
    }

    return (
        <>
            <h2>장바구니</h2>
            {
                cart.map(it => {
                    return (
                        <li key={it.id}>
                            {it.id}
                            {it.name}
                            {it.description}
                            {it.price}
                            {it.num}
                            <button onClick={() => cartModify(it.id)}>+</button>
                            <img src={it.img} alt="" />
                        </li>
                    )
                })
            }
            <span>합계 : {allPrice}</span>
        </>
    )
}

export default Cart;