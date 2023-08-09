import React from 'react'
import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';
import {remove} from '../redux/slices/CartSlice'

const CartItem = ({item}) => {
    const dispatch = useDispatch();

    function delHandler()
    {
       dispatch(remove(item.id));
       toast.success("item has been removed");
    }
  return (
    <div className=' mt-5 p-4 flex flex-col '>
        <div>
            <img className=' h-[250px]' src={item.image} alt="item" />
        </div>
        <div>
            <h1 className=' font-bold text-black '>{item.title}</h1>
            <h1 className=' font-semibold opacity-60'>{item.description}</h1>
        </div>
        <div className=' flex justify-between   mt-2'>
            <p className=' font-semibold text-green-500 text-2xl'>${item.price}</p>
          <div onClick={delHandler}>
          <div className=' w-[40px] h-[40px] rounded-full bg-red-400 flex items-center justify-center'><AiOutlineDelete ></AiOutlineDelete></div>

        

          </div>
          

        </div>
        <div className=' h-[2px] w-[95%] bg-blue-400 mt-2'></div>
      
    </div>
  )
}

export default CartItem
