interface submitInterface{
    value:string;
    onClick?:()=>void;    
}


export default function Submit({value,onClick,}:submitInterface) {
  return (
    <input onClick={onClick} type="submit" value={value}   className="bg-[#266dfa] text-white font-bold py-4 mt-2 rounded-xl hover:opacity-80 cursor-pointer duration-300 text-xl"   />
  )
}
