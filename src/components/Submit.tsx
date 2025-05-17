interface submitInterface{
    value:string;
}


export default function Submit({value}:submitInterface) {
  return (
    <input type="submit" value={value}  className="bg-[#266dfa] text-white font-bold py-4 mt-2 rounded-l hover:opacity-80 cursor-pointer duration-300 text-xl" />
  )
}
