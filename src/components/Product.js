
import { useDispatch, useSelector } from 'react-redux'
import {remove,add} from '../redux/slices/CartSlice'
import { toast } from 'react-hot-toast'

const Product = ({postItem}) => {
  const {cart} = useSelector((state)=>state)
  const dispatch = useDispatch();
  function removeItem()
  {
    dispatch(remove(postItem.id));
    toast.error(("item  removed"));
  }
  function addItem()
  {
    dispatch(add(postItem));
    toast.success(("item added"));
  }
  return (
    <div className='  flex flex-col items-center justify-between hover:scale-110 transition duration-300 ease-in gap-3 p-4 rounded-xl ml-5 outline mt-2 '>
      <div className=' text-gray-700 font-semibold text-lg text-left truncate mt-1  w-40'>
        <p>{postItem.title}</p>
      </div>

      <div className=' text-[10px] w-40 text-gray-400 font-normal text-left'>
        <p>{postItem.description.split(" ").slice(0,10).join(" ")+"..."}</p>
      </div>

      <div className=' h-[180px] '>
        <img className=' h-full w-full' src={postItem.image} alt="itemss" />
      </div>

      <div  className=' flex justify-between gap-12 items-center w-full mt-5'>
      <div>
        <p className=' text-green-600 font-semibold '>${postItem.price}</p>
      </div>

   <div>
   {
        
       
        cart.some((p)=>p.id===postItem.id) ? 
        (<button  className=' text-gray-700 border-2 border-gray-700 rounded-full  font-semibold text-[12px] uppercase p-1 px-3 hover:bg-gray-700 hover:text-white transition duration-300 ease-in'
         onClick={removeItem}>
            Remove item
        </button>) :
        (<button   className=' text-gray-700 border-2 border-gray-700 rounded-full  font-semibold text-[12px] uppercase p-1 px-3 hover:bg-gray-700 hover:text-white transition duration-300 ease-in'
        onClick={addItem}>
            Add to cart</button>)
      }
   </div>

      </div>
     
    </div>
  )
}

export default Product
