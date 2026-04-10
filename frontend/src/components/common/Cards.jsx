

const Cards = ({children,icon,value}) => {

  return (
    
        <div className="shadow-[0_0_15px_rgba(0,0,0,0.45)] p-5 rounded-lg  flex items-start gap-3">
        {icon}
        <div className="flex flex-col items-center"><h1 className="text-2xl font-bold">{value}</h1>
        <h2 className="text-sm font-bold">{children}</h2></div>
     </div>
      
       
     
  )
}

export default Cards