import React from 'react'
import {GiShop} from 'react-icons/gi'
import {GrCart} from 'react-icons/gr'
import { BsSearch } from "react-icons/bs";
import { Badge } from "@mantine/core";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { search, showModalBtn } from '../feature/services/cartSlice';

const Navbar = () => {
    const { quantity,showModal } = useSelector((state) => state.Cart);
    const dispatch = useDispatch();


  return (
    <div>
      <div className="flex justify-between px-2 lg:px-10 items-center shadow-md w-full">
        <Link to={"/"}>
          <GiShop className=" cursor-pointer text-4xl mr-5" />
        </Link>
        <div className="flex items-center my-3">
          <div className="hover:bg-orange-300 bg-orange-100 rounded-lg py-2 lg:py-2 px-3 mr-0 lg:mr-5 flex items-center">
            <input
              onChange={(e) => {
                dispatch(search(e.target.value));
              }}
              className=" bg-transparent outline-0 border-b border-gray-600 max-w-[100px] lg:max-w-[150px]"
              placeholder="Search. . ."
              type="text"
            />
            <BsSearch className=" text-lg" />
          </div>
          <div className=" relative w-20">
            <GrCart
              onClick={() => {
                dispatch(showModalBtn(true));
              }}
              className=" cursor-pointer text-4xl mx-auto relative z-10"
            />
            <Badge
              color="yellow"
              className=" select-none absolute top-[-10px] right-0 z-0 text-black"
              radius="lg"
            >
              {quantity}
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar