import { useMyContext } from "@/context/MyContext";


const DisplayData = () => {
   const { data } = useMyContext();
   return <p>Data: {data}</p>

}
export default DisplayData;