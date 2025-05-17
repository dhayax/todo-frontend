interface inputTypes{
    type:string;
    name:string;
    placeholder:string;
    id:string;


}



export default function Input({type,name,placeholder,id}:inputTypes) {
  return (
    <div className="w-90 border-1 rounded">

    <input className="w-full p-4" type={type} name={name} placeholder={placeholder} id={id}/>
    </div>
  )
}
