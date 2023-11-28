import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div id="error-page">
        <h1 className="text-5xl font-bold">Oops!</h1>
        <p className="text-2xl">Sorry, an unexpected error has occurred.</p>
        <p className="text-2xl">
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
}
