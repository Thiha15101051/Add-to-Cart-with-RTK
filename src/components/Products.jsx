import React, { useEffect, useState } from 'react'
import Product from './Product';
import { Loader } from "@mantine/core";
import { useSelector } from 'react-redux';

const Products = () => {
    const {search}=useSelector(state=>state.Cart)
    const [products,setProducts]=useState([]);
    const [loading,setLoading]=useState(true);
    const [searchData,setSearchData]=useState([]);

    useEffect(()=>{
        let searchResult=products.filter(product=>product.title.toLowerCase().includes(search.toLowerCase()));
        setSearchData(searchResult);
    },[search])
    useEffect(()=>{
        fetchData()
    },[])
    const fetchData=async ()=>{
        const api = await fetch(`https://fakestoreapi.com/products`);
        const data=await api.json();
        setProducts(data);
        setLoading(false);
        setSearchData(data);
    }
  if (loading) {
    return (
      <div className='flex h-screen items-center justify-center'>
        <Loader color="yellow" variant="dots" />
      </div>
    );
  }else{
    return (
      <div className="flex flex-wrap gap-10 justify-center my-10">
        {searchData.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </div>
    );
  }
}

export default Products