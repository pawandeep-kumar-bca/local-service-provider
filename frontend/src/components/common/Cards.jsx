

const Cards = ({children,icon,value}) => {

  return (
    
        <div className="shadow-[inset_0_0_3px_rgba(0,0,0,0.3)] bg-bg p-5 rounded-lg  flex items-start gap-3">
        {icon}
        <div className="flex flex-col items-center"><h1 className="text-2xl font-bold">{value}</h1>
        <h2 className="text-sm font-bold">{children}</h2></div>
     </div>
      
       
     
  )
}

export default Cards