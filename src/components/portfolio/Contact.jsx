import SectionTitle from "./SectionTitle";

export default function Contact() {
    return (
        <>
            <div className="flex flex-col justify-center px-2 mt-5 md:px-0 md:flex-row">
                <div className="w-full md:w-7/12">
                    <SectionTitle>Find out more</SectionTitle>
                </div>
            </div>

            <div className="flex flex-col px-2 mx-auto mb-10 md:px-0">
                <div className="flex items-center justify-center">
                    <form
                        action="https://getform.io/f/8862dd60-57cc-4106-9755-9e9d5bfe07df"
                        method="POST"
                        className="flex flex-col w-full md:w-7/12"
                    >
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
                        />
                        <input
                            type="text"
                            name="email"
                            placeholder="Email"
                            className="p-2 my-2 bg-transparent border-2 rounded-md focus:outline-none"
                        />
                        <textarea
                            name="message"
                            placeholder="Message"
                            rows="10"
                            className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none"
                        />
                        <button
                            type="button"
                            className="inline-block px-8 py-3 text-base font-medium text-center text-white rounded-md w-max bg-gradient-to-r from-yellow-500 to-pink-500 drop-shadow-md hover:stroke-white"
                        >
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </>



    )
}
