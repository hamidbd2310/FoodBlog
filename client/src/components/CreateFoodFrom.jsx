import React, { useState } from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";
import { toast } from "react-hot-toast"; 
const CreateFoodFrom = () => {
    let [submit, SetSubmit] = useState(false);
    let navigate = useNavigate();

    const onSubmit = async (e) => {
        e.preventDefault();
        let formDate = new FormData(e.target);
        let name = formDate.get('name');
        let code = formDate.get('code');
        let image = formDate.get('image');
        let category = formDate.get('category');
        let qty = formDate.get('qty');
        let price = formDate.get('price');

        try { SetSubmit(false);
            let res = await axios.post(`/api/food/createFood`, {
                name: name,
                code: code,
                image: image,
                category: category,
                qty:qty,
                price: price,
                
            });

            if (res.data['status'] === "Success") {
                toast.success(res.data['message']);
                SetSubmit(false);
                navigate("/");
            } else {
                toast.error("Request Fail !" + res.data['message']);
            }
        } catch (error) {
            toast.error(error);
        }
    }

    return (
        <div className="content">
            <form onSubmit={onSubmit} className="p-4">
                <div className="row">
                    <h5>Create Food Item</h5>
                    <div className='col-md-4 mt-4'>
                        <label className="form-label ">Food Name</label>
                        <input name="name" type="text" required="required"
                               className="form-control mt-1 p-3"/>
                    </div>
                    <div className='col-md-4 mt-4'>
                        <label className="form-label ">Food Code</label>
                        <input name="code" type="text" required="required"
                               className="form-control mt-1 p-3"/>
                    </div>
                    <div className='col-md-4 mt-4'>
                        <label className="form-label ">Food Image</label>
                        <input name="image" type="text" required="required"
                               className="form-control mt-1 p-3"/>
                    </div>
                    <div className='col-md-4 mt-4'>
                        <label className="form-label ">Food Category</label>
                        <input name="category" type="text" required="required"
                               className="form-control mt-1 p-3"/>
                    </div>
                    <div className='col-md-4 mt-4'>
                        <label className="form-label ">Qty</label>
                        <input name="qty" type="text" required="required"
                               className="form-control mt-1 p-3"/>
                    </div>
                    <div className='col-md-4 mt-4'>
                        <label className="form-label ">Price</label>
                        <input name="price" type="text" required="required"
                               className="form-control mt-1 p-3"/>
                    </div>
                    <div className='col-md-2 mt-4'>
                        <button disabled={submit} type="submit" className="btn SubmitBTN text-white mt-2">{submit ? (
                            <ButtonSpinner/>) : ("Submit")}</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default CreateFoodFrom;
