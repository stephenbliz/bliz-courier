'use client';
import { motion } from "motion/react";
import { slideInTopVariant } from "../Utils/animations";
import { ChangeEvent, useState } from "react";

export default function CostCalculation(){
    const [calculate, setCalculate] = useState({
        height: '',
        width: '',
        depth: '',
        weight: '',
        from: '',
        to: '',
        package: 'usual delivery'
    });
    const formDetails = [
        {name: 'height', value: calculate.height, unit: '(cm)', id: 1},
        {name: 'width', value: calculate.width, unit: '(cm)', id: 2},
        {name: 'depth', value: calculate.depth, unit: '(cm)', id: 3},
        {name: 'weight', value: calculate.weight, unit: '(kg)', id: 4},
        {name: 'from', value: calculate.from, unit: '(location)', id: 5},
        {name: 'to', value: calculate.to, unit: '(location)', id: 6},
    ];
    const handleChange = (e: ChangeEvent<HTMLInputElement>)=>{
        const value = e.target.value;
        const name = e.target.name;
        setCalculate({...calculate, [name]: value})
    }

    return(
        <form>
            {
                formDetails.map((formDetail)=>(
                    <motion.div
                        className="md:flex justify-between items-center mb-4"
                        key={formDetail.id}
                        variants={slideInTopVariant}
                        initial='hidden'
                        whileInView='visible'
                        viewport={{once: true, amount: 0.5}}
                    >
                        <label 
                            htmlFor={formDetail.name}
                            className="md:w-[20%] w-full cursor-pointer block uppercase font-bold text-headerColor font-headerFont text-[0.75rem]"
                        >
                            <span>{formDetail.name}</span> <span
                                className="md:block"
                            >{formDetail.unit}</span>
                        </label>
                        <input 
                            type="text" 
                            id={formDetail.name}
                            className="md:w-[80%] w-full block py-3 px-4 outline-none border border-gray-200 rounded focus:border-primaryColor transition-all duration-300 ease-linear"
                            name={formDetail.name}
                            value={formDetail.value}
                            onChange={(e)=>handleChange(e)}
                        />
                    </motion.div>
                ))
            }
            
            <motion.div
                className="md:flex justify-between items-center mb-4"
                variants={slideInTopVariant}
                initial='hidden'
                whileInView='visible'
                viewport={{once: true, amount: 0.5}}
            >
                <label 
                    htmlFor='package'
                    className="md:w-[20%] w-full cursor-pointer block uppercase font-bold text-headerColor font-headerFont text-[0.75rem]"
                >
                    <span>package</span>
                </label>
                <select name="package" id="package"
                    className="md:w-[80%] w-full block py-3 px-4 uppercase outline-none border border-gray-200 rounded focus:border-primaryColor transition-all duration-300 ease-linear"

                >
                <option value="usual delivery" defaultChecked>usual delivery</option>
                <option value="fast delivery">fast delivery +$50</option>
                <option value="express delivery">express delivery +$100</option>
            </select>
            </motion.div>
        </form>
    )
}