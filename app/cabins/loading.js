import Spinner from "@/app/_components/Spinner";

function Loading() {
  return (
    <div className="grid items-center justify-center">
      <p className="text-xl text-primary-200">Loading Cabin Data</p>
      <Spinner />
    </div>
  );
}

export default Loading;
