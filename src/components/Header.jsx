
import myFace from "/assets/me_2021_365_365.jpg";

function Header() {
    return (
        <div className="flex flex-col items-center justify-center pt-20 pb-6 text-center">
            <img
                className="w-20 h-20 rounded-full md:w-40 md:h-40 ring-2 ring-slate-200 border-stone-500 border-3"
                src={myFace}
                alt="Derry"
            />
            <h1 className="mb-2 text-4xl font-bold md:text-7xl md:mb-4">Derry Leng</h1>
            <p className="mb-3 font-lg text-md md:text-xl">Data Analyst and Web Developer</p>
            <p className="max-w-xl mb-6 text-sm text-justify">I am a data analyst with experience applying R, Python, SQL on data-driven projects within consulting firms, as well as a full stack developer with experience building web applications using technologies such as React, Django, R Shiny and more - hosting and maintaining these applications on various cloud providers. I have worked solo and in small agile teams using CI/CD. I am fascinated by learning new things in the world of Finance and Tech.</p>
        </div>
    )
}

export default Header;
