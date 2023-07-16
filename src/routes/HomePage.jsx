import TemplatePage from "./TemplatePage";
// import Contact from "../components/portfolio/Contact";
import Header from "../components/portfolio/Header";
import Portfolio from "../components/portfolio/Portfolio";
import Timeline from "../components/portfolio/Timeline";

export default function Root() {
    const contents = (
        <>
            <Header />
            <Portfolio />
            <Timeline />
            {/* <Contact /> */}
        </>
    );

    return (<TemplatePage contents={contents} />);
}
