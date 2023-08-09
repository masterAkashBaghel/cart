import React, { useEffect, useState } from 'react'
import Spinner from '../components/Spinner';
import Product from '../components/Product';

const Home = () => {

    const API_URL = 'https://fakestoreapi.com/products';
    const [loading , setLoading]= useState(false);
    const [post,setPost] = useState([]);

    async function fetchData()
    {

      try{

        setLoading(true);
        const res = await fetch(API_URL);
        const data = await res.json();
        setPost(data);
      }
      catch(error){
        console.log("error aa gya ");
        setPost([]);
      }
      setLoading(false);
    }

    useEffect(()=>{
        fetchData();
    },[])
  return (
    <div>
        {
            loading ? <Spinner></Spinner>:
            post.length>0 ?
             
             ( <div className='grid sm:grid-cols-1 lg:grid-cols-4 md:grid-cols-2 max-w-6xl p-2 mx-auto space-y-10  gap-x-5'>
                 { post.map((postItem)=>(
                    <Product key = {postItem.id} postItem={postItem}></Product>
                ))}
              </div>)
             :<div className='flex justify-center items-center'>
                <p>No data Found</p>
            </div>
        }
      
    </div>
  )
}

export default Home
