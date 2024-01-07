import { useMyContext } from "@/context/MyContext";
import TransitionDecs from "./Transition/TransitionDecs";

const Transition = () => {
   const { data } = useMyContext(); 

// Check if data is available and not an empty array
const allData = data && data.length > 0 ? data : null;

// Initialize tranHis state with the first commit if data is available
  const initialTranHis = allData ? allData[0].commit : null;
  const initialAmount= allData ? allData[0].value : null; 
  const initialOptionId= allData ? allData[0].optionId : null; 
  const ID = allData ? allData[0].id : null; 
    console.log(data);
 
  return ( 

    <main className="m-2">
      <div> 
        <h2>Amount : {}</h2>
        <h2>commit : {initialTranHis}</h2>
        <h2>Option : {initialOptionId}</h2>
        <h2>ID : {ID}</h2>
      </div>
      
      <section className="SecContainer bg-gradient-to-b from-pink-100 to-pink-200 h-screen myRounded space-y-3 py-2">
          <div className="flex justify-center items-center">
          <h2 className="font-bold text-2xl text-pink-900">Transition</h2>
       
          </div>
          
        <div className="flex justify-center items-center ">
          <div className="flex flex-col gap-2 justify-center items-center">
          {/* All transition lists */}
            <TransitionDecs amount={initialAmount} commit={initialTranHis} />
 
           </div>
        </div>
 
      </section>
        
    </main> 
  )
}

export default Transition;