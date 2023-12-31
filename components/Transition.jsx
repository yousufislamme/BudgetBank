import DisplayData from "./DisplayData";
import TransitionDes from "./Transition/TransitionDes";

const Transition = ( ) => {



  return (
    <main className="m-2">
      <div>
        <DisplayData />
      </div>
      <section className="SecContainer bg-gradient-to-b from-pink-100 to-pink-200 h-screen myRounded space-y-3 py-2">
          <div className="flex justify-center items-center">
          <h2 className="font-bold text-2xl text-pink-900">Transition</h2>
       
          </div>
        <div className="flex justify-center items-center ">
          {/* All transition lists */}
          <div className="flex flex-col gap-2 justify-center items-center">
            <TransitionDes />
            <TransitionDes />
            <TransitionDes />
           


          </div>

        </div>
      </section>
    </main>
  )
}

export default Transition;