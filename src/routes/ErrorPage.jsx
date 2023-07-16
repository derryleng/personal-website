import { useRouteError } from "react-router-dom";
import TemplatePage from "./TemplatePage";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    const contents = (
        <div className="flex flex-col items-center justify-center">
                <h1 className="my-5 text-2xl font-semibold">Oops!</h1>
                <p>An error has occurred:</p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
                <p className="mt-10">Click <a className="text-blue-600 hover:underline underline-offset-2" href="/">here</a> to go back to the home page.</p>
        </div>
    );

    return (<TemplatePage contents={contents} />);
}
