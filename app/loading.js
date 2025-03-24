import Spinner from "./components/Spinner";

function loading() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-20 h-20 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}

export default loading;
