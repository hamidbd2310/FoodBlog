import {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";
const UpdateFrom = () => {
    let navigate=useNavigate();
    let {id}= useParams();

    const [Existing,SetExisting]=useState(null)

    const ExistingInfo=async (id)=>{
        let res=await axios.post(`/api/food/updateFood/${id}`)
        SetExisting(res.data['data'])
    }

    useEffect(() => {
        (async ()=>{
            await ExistingInfo(id)
        })()
    }, []);


    const UpdateData=async (event)=>{

        event.preventDefault();

        let formData=new FormData(event.target);
        let name=formData.get("name");
        let code=formData.get("code");
        let image=formData.get("image");
        let category=formData.get("category");
        let qty=formData.get("qty");
        let price=formData.get("price");


        await axios.post(`/api/food/updateFood/${id}`,{
            name:name,
            code:code,
            image:image,
            category:category,
            qty:qty,
            price:price,
        })

        navigate("/")


    }

    return (
        <div className="content">
            <form onSubmit={UpdateData}>
                <div className="row">
                    <div className="col-md-4 mt-4">
                        <label>Food Name</label>
                        <input defaultValue={Existing!==null?(Existing['name']):("")} className="form-control mt-1 p-3" name="name" type="text" />
                    </div>
                    <div className="col-md-4 mt-4">
                        <label>Food Code</label>
                        <input defaultValue={Existing!==null?(Existing['code']):("")} className="form-control mt-1 p-3" name="code" type="text" />
                    </div>
                    <div className="col-md-4 mt-4">
                        <label>Food image</label>
                        <input defaultValue={Existing!==null?(Existing['image']):("")} className="form-control mt-1 p-3" name="image" type="text" />
                    </div>
                    <div className="col-md-4 mt-4">
                        <label>Food category</label>
                        <input defaultValue={Existing!==null?(Existing['category']):("")} className="form-control mt-1 p-3" name="category" type="text" />
                    </div>
                    <div className="col-md-4 mt-4">
                        <label>Food qty</label>
                        <input defaultValue={Existing!==null?(Existing['qty']):("")} className="form-control mt-1 p-3" name="qty" type="text" />
                    </div>
                    <div className="col-md-4 mt-4">
                        <label>Food price</label>
                        <input defaultValue={Existing!==null?(Existing['price']):("")} className="form-control mt-1 p-3" name="price" type="text" />
                    </div>



                </div>
                <div className='col-md-2 mt-4'>
                <button type="submit" className="UpdateBTN btn ">Update</button>
                </div>
            </form>
        </div>
    );
};

export default UpdateFrom;
