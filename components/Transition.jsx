"use client";
import { useMyContext } from "@/context/MyContext";
import TransitionDecs from "./Transition/TransitionDecs";
const Transition = () => {
  const { data } = useMyContext([]);
  // Check if data is available and not an empty array
  const allData = data && data.length > 0 ? data : null;

  // Initialize tranHis state with the first commit if data is available
  const initialTranHis = allData ? allData[0].commit : null;
  const initialAmount = allData ? allData[0].value : null;
  const initialOptionId = allData ? allData[0].optionId : null;
  const ID = allData ? allData[0].id : null;

  return (
    <main className="m-2">
      <div>
        <h2>Amount : {}</h2>
        <h2>commit : {initialTranHis}</h2>
        <h2>Option : {initialOptionId}</h2>
        <h2>ID : {ID}</h2>
      </div>

      <section className="SecContainer myRounded h-screen space-y-3 bg-gradient-to-b from-pink-100 to-pink-200 py-2">
        <div className="flex items-center justify-center">
          <h2 className="text-2xl font-bold text-pink-900">Transition</h2>
        </div>

        <div className=" flex items-center justify-center ">
          <div className="flex flex-col items-center justify-center gap-2">
            {/* All transition lists */}

            <TransitionDecs amount={initialAmount} commit={initialTranHis} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Transition;
