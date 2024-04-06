import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const Product = () => {
    const [products, setProducts] = useState([]);
    const [counts, setCounts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const storeData = JSON.parse(localStorage.getItem("data")) || [];
        setProducts(storeData);
        // Initialize counts array with 0s for each product
        setCounts(Array(storeData.length).fill(0));
    }, []);

    const handleDelete = (index) => {
        const updatedProducts = [...products];
        updatedProducts.splice(index, 1);
        setProducts(updatedProducts);
        localStorage.setItem("data", JSON.stringify(updatedProducts));
    };

    const addCard = () => {
        navigate('/');
    };

    const handleIncrement = (index) => {
        setCounts(prevCounts => {
            const updatedCounts = [...prevCounts];
            updatedCounts[index] += 1;
            return updatedCounts;
        });
    };

    const handleDecrement = (index) => {
        if (counts[index] > 0) {
            setCounts(prevCounts => {
                const updatedCounts = [...prevCounts];
                updatedCounts[index] -= 1;
                return updatedCounts;
            });
        }
    };

    return (
        <div>
            <Navbar />
            <div className='w-full flex justify-center items-center'>
                {products.length > 0 ? (
                    <div className='w-full'>
                        {products.map((item, index) => (
                            <div key={index} className="w-[70%] h-[300px]  flex items-center justify-around gap-10 mx-auto mb-10 border-2 rounded-md ">
                                <img src={item.image} alt="" className='w-52 h-52' />
                                <div className='flex flex-col items-center mb-[20px]'>
                                    <p className='h-full pt-20 pr-5 mb-5 text-[25px]'>{item.title}</p>
                                    <div className='flex gap-4 mb-3 items-center'>
                                        <button className='w-[150px] h-10  rounded-md bg-red-600 text-[22px]  text-white' onClick={() => handleIncrement(index)}>+</button>
                                        <h3 className='text-[22px]'>{counts[index]}$</h3>
                                        <button className='w-[150px] h-10 rounded-md bg-green-600 text-white text-[22px]' onClick={() => handleDecrement(index)}>-</button>
                                    </div>
                                    <div className='flex gap-[70px]'>
                                        <button className="w-[150px] h-10  text-white bg-red-500 rounded-md  text-[20px] " onClick={() => handleDelete(index)}>Delete</button>
                                        <button className='w-[150px] h-10 text-white bg-green-400 rounded-lg text-[20px]  capitalize' onClick={addCard}>add card</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className='capitalize text-[30px] font-bold'>ma'lumotlar yo'q😁</p>
                )}
            </div>
        </div>
    );
};

export default Product;
