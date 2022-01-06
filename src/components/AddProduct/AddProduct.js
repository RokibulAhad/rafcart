import React from 'react';
import NavBar from '../shared/NavBar/NavBar';
import Topbar from '../shared/Topbar/Topbar';

const AddProduct = () => {
    var allData = {};
    const handleProductData = (e) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;
        if (!allData[fieldName]) {
            allData[fieldName] = fieldValue;
        } else {
            allData[fieldName] = fieldValue;
        }
    }
    const addProduct = (e) => {
        console.log(allData);
        fetch('https://rafcart.herokuapp.com/addtoproduct', {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(allData),
        })
        .then(res=>{
            if(res.statusText==='OK'){
                alert("Product Added Successfully!!!");
            }
        })
        e.preventDefault();
}
return (
    <div>
        <Topbar></Topbar>
        <NavBar></NavBar>
        <h2 className='text-center py-10 font-medium text-xl text-gray-600'>Add Product</h2>
        <div className="container">
            <form action="">
                <div className="space-y-4">
                    <div>
                        <label className="text-gray-600 mb-2 block">
                            Product Title <span className="text-primary">*</span>
                        </label>
                        <input onBlur={handleProductData} name='productTitle' type="text" className="block w-full input-box border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:outline-none focus:border-primary" placeholder="John Doe" />
                    </div>
                    <div>
                        <label className="text-gray-600 mb-2 block">
                            Product Subtitle <span className="text-primary">*</span>
                        </label>
                        <input onBlur={handleProductData} name='productsubTitle' type="text" className="block w-full input-box border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:outline-none focus:border-primary" placeholder="John Doe" />
                    </div>
                    <div>
                        <label className="text-gray-600 mb-2 block">
                            Product Image Link <span className="text-primary">*</span>
                        </label>
                        <input onBlur={handleProductData} name='productImg' type="text" className="block w-full input-box border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:outline-none focus:border-primary" placeholder="John Doe" />
                    </div>
                    <div>
                        <label className="text-gray-600 mb-2 block">
                            Availability <span className="text-primary">*</span>
                        </label>
                        <input onBlur={handleProductData} name='availability' type="text" className="block w-full input-box border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:outline-none focus:border-primary" placeholder="example@mail.com" />
                    </div>
                    <div>
                        <label className="text-gray-600 mb-2 block">Brand<span className="text-primary">*</span></label>
                        <input onBlur={handleProductData} name='brand' type="text" className="block w-full input-box border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:outline-none focus:border-primary" placeholder="type password" />
                    </div>
                    <div>
                        <label className="text-gray-600 mb-2 block">Category<span className="text-primary">*</span></label>
                        <input onBlur={handleProductData} name='category' type="text" className="block w-full input-box border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:outline-none focus:border-primary" placeholder="confirm your password" />
                    </div>
                    <div>
                        <label className="text-gray-600 mb-2 block">SKU<span className="text-primary">*</span></label>
                        <input onBlur={handleProductData} name="SKU" type="text" className="block w-full input-box border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:outline-none focus:border-primary" placeholder="confirm your password" />
                    </div>
                    <div>
                        <label className="text-gray-600 mb-2 block">Price<span className="text-primary">*</span></label>
                        <input onBlur={handleProductData} name="productPrice" type="text" className="block w-full input-box border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:outline-none focus:border-primary" placeholder="confirm your password" />
                    </div>
                    <div>
                        <label className="text-gray-600 mb-2 block">Short Description<span className="text-primary">*</span></label>
                        <input onBlur={handleProductData} name="shortDescription" type="text" className="block w-full input-box border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:outline-none focus:border-primary" placeholder="confirm your password" />
                    </div>
                    <div>
                        <label className="text-gray-600 mb-2 block">Description<span className="text-primary">*</span></label>
                        <input onBlur={handleProductData} name="description" type="text" className="block w-full input-box border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:outline-none focus:border-primary" placeholder="confirm your password" />
                    </div>
                    <div>
                        <label className="text-gray-600 mb-2 block">Color<span className="text-primary">*</span></label>
                        <input onBlur={handleProductData} name="color" type="text" className="block w-full input-box border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:outline-none focus:border-primary" placeholder="confirm your password" />
                    </div>
                    <div>
                        <label className="text-gray-600 mb-2 block">Material<span className="text-primary">*</span></label>
                        <input onBlur={handleProductData} name="material" type="text" className="block w-full input-box border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:outline-none focus:border-primary" placeholder="confirm your password" />
                    </div>
                    <div>
                        <label className="text-gray-600 mb-2 block">Weight<span className="text-primary">*</span></label>
                        <input onBlur={handleProductData} name="weight" type="text" className="block w-full input-box border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:outline-none focus:border-primary" placeholder="confirm your password" />
                    </div>
                </div>
                <div className="mt-4">
                    <button onClick={addProduct} type="submit"
                        className="block w-full py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium">
                        Add Product
                    </button>
                </div>
            </form>
        </div>
    </div>
);
};

export default AddProduct;