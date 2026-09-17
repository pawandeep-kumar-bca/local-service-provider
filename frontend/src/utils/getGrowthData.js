import { IoMdArrowRoundDown, IoMdArrowRoundUp } from "react-icons/io"

export const getGrowthData = (growth)=>{
    const percentage = Number(growth) || 0

    if(percentage>0){
        return {
            value:`${percentage}%`,
            icon:<IoMdArrowRoundUp size={18} />,
            color:'text-green-500'
        }
    }

    if(percentage<0){
        return {
            value:`${Math.abs(percentage)}%`,
            icon: <IoMdArrowRoundDown size={18} />,
             color:'text-red-500'
        }
    }


        return {
      value: "0%",
      icon: null,
      color: "text-white",
    };
   
}