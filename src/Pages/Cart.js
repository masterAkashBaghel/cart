import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(
      cart.reduce((acc, curr) => acc + curr.price,0));
  },[cart]);
  return (
    <div className=" flex flex-col w-[75%] mx-auto">
      {cart.length > 0 ? (
        <div className=" flex gap-5 mt-5">
          <div className=" border-2  rounded-2xl w-[65%]">
            {cart.map((item, index) => {
              return (
                <CartItem
                  key={item.id}
                  item={item}
                  itemIndex={index}
                ></CartItem>
              );
            })}
          </div>

          <div className=" flex flex-col item-center justify-end p-4">
            <div className=" flex flex-col gap-10">
              <div className=" font-bold text-2xl mx-auto  text-green-500">Your cart</div>
              <div className=" font-semibold opacity-70">Summary of your cart</div>
              <p className=" font-semibold opacity-60">
                <span>Total items :</span>
                <span>{cart.length}</span>
              </p>
            </div>

            <div>
              <p className=" font-semibold">
                Total amount : <span className=" text-blue-400">${totalAmount}</span>
              </p>
              <button className=" w-[80%] border p-1 rounded-lg bg-green-400 mt-4 mx-auto text-white font-bold hover:bg-green-600">CheckOut</button>
            </div>
          </div>
        </div>
      ) : (
        <div className=" flex flex-col  items-center justify-center h-screen w-[75%] mx-auto">
          <p className=" font-bold  text-2xl text-red-400">Cart empty</p>
          <Link  className=" border-2 p-2 mt-2 rounded-xl bg-green-400 w-[160px] items-center flex  justify-center text-white" to={"/"}>Shop Now</Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
