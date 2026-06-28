import { AiOutlineLoading3Quarters } from "react-icons/ai";




const Loading = ({size = 25, color = "#fff"}) => {
   return (
      <>
       <AiOutlineLoading3Quarters style={{
        height: size,
        width: size
       }} className="block animate-spin mx-auto" color={color}/>
      </>
   )    
}; export default Loading