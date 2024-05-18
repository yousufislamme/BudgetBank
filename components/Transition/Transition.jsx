import { useMyContext } from "@/context/MyDataContext";
import TransitionDecs from "./TransitionDecs";

const Transition = () => {
  const { values, commits } = useMyContext(); // global state

  console.log(values, commits);
  return (
    <main className="m-2">
      <section className="SecContainer myRounded min-h-screen space-y-3 bg-gradient-to-b from-pink-100 to-pink-200 py-2">
        <div className="flex items-center justify-center">
          <h2 className="text-2xl font-bold text-pink-900">Transition</h2>
        </div>

        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-2">
            {/* Ensure both arrays have the same length */}
            {values.length === commits.length &&
              values.map((value, index) => (
                <TransitionDecs
                  key={index}
                  amount={value}
                  commit={commits[index]} // Access corresponding commit using the same index
                />
              ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Transition;
