"use client"
import React, { useContext, useState,useEffect } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Image from 'next/image'

const Collection = () => {
    const {products} = useContext(ShopContext);
    const [showFilter, setShowFilter] = useState(false);
    const [filterProducts,setFilterProducts]=useState([]);
    const [category,setCategory]=useState([]);
    const [subCategory,setSubCategory]=useState([]);
    const [sortType,setSortType]=useState('relevant');



    const toggleCategory=(e)=>{
        if(category.includes(e.target.value)){
            setCategory(prev=>prev.filter(item=>item!== e.target.value));
        }else{
            setCategory(prev=>[...prev,e.target.value]);
        }
    }

       const togglesubCategory=(e)=>{
        if(subCategory.includes(e.target.value)){
            setSubCategory(prev=>prev.filter(item=>item!== e.target.value));
        }else{
            setSubCategory(prev=>[...prev,e.target.value]);
        }
    }

   

    const applyFilter = () => {
        let productsCopy = [...products];

        if (category.length > 0) {
            productsCopy = productsCopy.filter(product => category.includes(product.category));
        }

        if (subCategory.length > 0) {
            productsCopy = productsCopy.filter(product => subCategory.includes(product.productCategory));
        }

        setFilterProducts(productsCopy);
    }

    const sortProduct=(sortType)=>{
        let fpCopy=[...filterProducts];

        switch(sortType){
            case 'low-high':
                setFilterProducts(fpCopy.sort((a,b)=>a.price-b.price));
                break;
            case 'high-low':
                setFilterProducts(fpCopy.sort((a,b)=>b.price-a.price));
                break;
            default:
                applyFilter();
                break;

        }
    }

    
 useEffect(() => {
        setFilterProducts(products);
    }, [products]); 


    useEffect(() => {
        applyFilter();
    }, [category, subCategory, products]);

    useEffect(()=>{
        sortProduct(sortType);
    },[sortType])

    useEffect(()=>{
        console.log(category);
    },[category])
    

    return (
   <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
            <div className='min-w-60'>
                <p 
                    className='my-2 text-xl flex items-center cursor-pointer gap-2 sm:hidden'
                    onClick={() => setShowFilter(!showFilter)}
                >
                    FILTERS
                </p>
                <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? 'block' : 'hidden'} sm:block`}>
                    {/* Categories Section */}
                    <div className="mb-6">
                        <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
                        <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                            <label className='flex items-center gap-2 cursor-pointer'>
                                <input type="checkbox" className='w-3 h-3' value="men" onChange={toggleCategory}/>
                                <span>Men</span>
                            </label>
                            <label className='flex items-center gap-2 cursor-pointer'>
                                <input type="checkbox" className='w-3 h-3' value="women" onChange={toggleCategory}/>
                                <span>Women</span>
                            </label>
                            <label className='flex items-center gap-2 cursor-pointer'>
                                <input type="checkbox" className='w-3 h-3' value="children" onChange={toggleCategory}/>
                                <span>Kids</span>
                            </label>
                        </div>
                    </div>

                    {/* Subcategories Section */}
                    <div>
                        <p className='mb-3 text-sm font-medium'>SUBCATEGORIES</p>
                        <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                            <label className='flex items-center gap-2 cursor-pointer'>
                                <input type="checkbox" className='w-3 h-3' value="topwear" onChange={togglesubCategory}/>
                                <span>Top Wear</span>
                            </label>
                            <label className='flex items-center gap-2 cursor-pointer'>
                                <input type="checkbox" className='w-3 h-3' value="bottomwear" onChange={togglesubCategory}/>
                                <span>Bottom Wear</span>
                            </label>
                            <label className='flex items-center gap-2 cursor-pointer'>
                                <input type="checkbox" className='w-3 h-3' value="outerwear" onChange={togglesubCategory}/>
                                <span>Out Wear</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            {/* {right side} */}
                        <div className='flex-1'>
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-semibold">All Collections</h2>
                    <select 
                    onChange={(e)=>setSortType(e.target.value)}
                        className="px-4 py-2 border rounded-lg bg-white text-gray-700 cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        defaultValue="relevant"
                    >
                        <option value="relevant">Sort By Relevant</option>
                        <option value="low-high">Price: Low to High</option>
                        <option value="high-low">Price: High to Low</option>
                    </select>
                </div>
                {/* Products grid will go here */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filterProducts.map((product) => (
                        <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                            <div className="relative h-64">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                                <p className="text-sm text-gray-500 mt-1">{product.category}</p>
                                <div className="mt-2 flex items-center justify-between">
                                    <span className="text-lg font-bold text-gray-900">${product.price}</span>
                                    <button className="bg-indigo-600 text-white px-4 py-2 rounded-full text-sm hover:bg-indigo-700 transition-colors">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Collection
