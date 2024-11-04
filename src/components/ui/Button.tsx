const Button = ({name,isBeam,containerClass,onClick}:{name:string,isBeam?:boolean,containerClass:string,onClick?:()=>void}) => {
    return (
     <button className={`btn ${containerClass}`} onClick={onClick}>
         {isBeam && (
             <span className="relative flex h-3 w-3">
                 <span className="btn-ping"/>
                 <span className="btn-ping_dot"/>
             </span>
         )}
         {name}
     </button>
    )
}
export default Button
