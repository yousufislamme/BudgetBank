import { useMyContext } from "@/context/MyContextTest";

// ShowValuesComponent.js

const ShowValuesComponent = () => {
  const { values } = useMyContext();

  return (
    <div>
      <h2>Values:</h2>
      <ul>
        {values.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    </div>
  );
};

export default ShowValuesComponent;
