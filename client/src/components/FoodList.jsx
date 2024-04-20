import React, {useEffect, useState} from 'react';
import Helper from "../utility/Helper.js";
import FullScreenLoader from "./FullScreenLoader.jsx";
import toast from "react-hot-toast";
import axios from "axios";
import {Link} from "react-router-dom";


const FoodList = () => {


    let [data,SetData]=useState(null)
    let [loader,SetLoader]=useState(false);


    useEffect(() => {
        (async ()=>{
            await CallFoodList()
        })()
    }, []);



    const CallFoodList=async ()=>{
        let res= await axios.get(`/api/food/getAllFood`)
        let CallFoodList=res.data['data']
        SetData(CallFoodList);
    }


    const Delete=async (_id)=>{
        try {
            SetLoader(true)
            let res=await axios.post(`/api/food/deleteFood/${_id}`)
            SetLoader(false)
            if(res.data['message']==="Food item deleted successfully"){
                toast.success("Food Item Deleted Successfully")
                CallFoodList()
            }
            else {
                toast.error("Request Fail")
            }
        }catch (e) {
            Helper.Unauthorized(e.response.status)
        }
    }



    return (
        <div className="content">
            <b className='m-3'>All Food List</b>
            
            <div >
            {data==null || loader?(<FullScreenLoader/>):(
                <div className="container-fluid">
                    <div className="row">
                        {
                            data.map((item,i)=>{
                                return (
                                    <div className="col-md-3   p-1 ">

                                        <div className="card m-2 rounded-4 ">
                                        
                                        <div className='priceView'>Taka: {item['price']}</div>
                                        

                                            <img className="w-100 FoodImage pb-2" alt="" src={item['image']}/>

                                        
                                            <p className='px-2'>{item['name']}</p>
                                            <div>
                                                
                                                <Link className="btn editBTN text-success  m-2" to={`/update/${item['_id']}`}>Edit</Link>

                                            <button onClick={async ()=>{ await  Delete(item['_id'])}} className=" DeleteBTN text-danger btn m-2">Delete</button></div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            )}
        </div>





        </div>
    );
};

export default FoodList;