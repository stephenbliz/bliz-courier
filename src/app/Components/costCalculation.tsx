'use client';
import { motion } from "motion/react";
import { slideInTopVariant } from "../Utils/animations";
import { ChangeEvent, FormEvent, useState } from "react";

export default function CostCalculation(){
    const apiKey= process.env.NEXT_PUBLIC_API_KEY;
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

    const getCordinates = async (place: string) => {
        // const apiKey= process.env.NEXT_PUBLIC_API_KEY;
        const url = `https://api.openrouteservice.org/geocode/search?api_key=${apiKey}&text=${encodeURIComponent(place)}`
        try{
            const res = await fetch(url);
            const data = await res.json();
            const cords = data.features[0].geometry.coordinates
            // console.log(cords)
            return cords;
        }catch(error){
            console.log(error);
        }
    }

    // const getDistance = async (fromLong: number, fromLat: number, toLong: number, toLat: number) =>{
    //     const url = `https://api.openrouteservice.org/v2/directions/driving-car?api_key=${apiKey}&start=${fromLong},${fromLat}&end=${toLong},${toLat}`;
    //     try{
    //         const res = await fetch(url);
    //         const data = await res.json();
    //         console.log(data)
    //     }catch(error){
    //         console.log(error);
    //     }

    // }

    const  getDistance =(
        lat1: number,
        lon1: number,
        lat2: number,
        lon2: number
      ): number => {
        const toRadians = (deg: number) => (deg * Math.PI) / 180;
        const R = 6371; // Earth's radius in km
      
        const dLat = toRadians(lat2 - lat1);
        const dLon = toRadians(lon2 - lon1);
      
        const a =
          Math.sin(dLat / 2) * Math.sin(dLat / 2) +
          Math.cos(toRadians(lat1)) *
            Math.cos(toRadians(lat2)) *
            Math.sin(dLon / 2) *
            Math.sin(dLon / 2);
      
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      
        return R * c; // Distance in km
      }
      

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        console.log(calculate);
        const from = await getCordinates(calculate.from);
        const to = await getCordinates(calculate.to);
        console.log('cordinates:', from, '--', to)
        const distance = getDistance(from[1], from[0], to[1], to[0]).toFixed(2);
        console.log('Distance = ', distance);
        setCalculate({
            height: '',
            width: '',
            depth: '',
            weight: '',
            from: '',
            to: '',
            package: 'usual delivery'
        })
    }

    return(
        <form 
            onSubmit={(e)=>handleSubmit(e)}
        >
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
                <select 
                    name="package" 
                    id="package"
                    className="md:w-[80%] w-full block py-3 px-4 uppercase outline-none border border-gray-200 rounded focus:border-primaryColor transition-all duration-300 ease-linear"
                    onChange={(e)=>setCalculate({...calculate, package: e.target.value})}
                    value={calculate.package}
                >
                <option value="usual delivery">usual delivery</option>
                <option value="fast delivery">fast delivery +$50</option>
                <option value="express delivery">express delivery +$100</option>
            </select>
            </motion.div>
            <motion.div
                className="md:w-[80%] w-full ml-0 md:ml-[20%] text-whiteColor flex items-center justify-center"
                variants={slideInTopVariant}
                initial='hidden'
                whileInView='visible'
                viewport={{once: true, amount: 0.5}}
            >
                <button
                    type="submit"
                    className="w-[60%] uppercase rounded-l py-2 px-4 bg-primaryColor text-center hover:bg-black transition-all duration-300 ease-linear"
                >
                    calculate
                </button>
                <span
                    className="w-[40%] py-2 px-4 rounded-r text-center bg-gray-400"
                >
                    $0
                </span>
            </motion.div>
        </form>
    )
}