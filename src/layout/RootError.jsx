import { useNavigate, useRouteError } from "react-router-dom";
import Navbar from "../Components/Navbar";

const RootError = () => {
  const err = useRouteError();
  console.log(err.data);
  const Navigate = useNavigate();

  return (
    <>
      <div className="p-4 hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"
          />
        </svg>
      </div>
      <Navbar/>

      <div className="flex flex-col justify-center items-center h-[90vh]">
        <strong className="font-bold text-8xl"> {err.status || 500} </strong>

        <div className="flex flex-col justify-center items-center">
          <div>{err?.data} </div>
          <br />
          <div className="font-bold text-xl">{err.statusText}</div>
        </div>
      </div>
    </>
  );
};

export default RootError;