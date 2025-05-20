interface inputTypes{
    type:string;
    name:string;
    placeholder:string;
    id:string;
    reference?:any;


}



export default function Input({type,name,placeholder,id,reference}:inputTypes) {
  return (
    <div className="w-90 border-1 rounded">

    <input ref={reference} className="w-full p-4" type={type} name={name} placeholder={placeholder} id={id}/>
    </div>
  )
}
