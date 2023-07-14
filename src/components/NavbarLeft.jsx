import React from "react";

function NavbarLeft() {
    return (
        <div className="flex items-center justify-center flex-1 px-1 py-2 sm:items-stretch sm:justify-start">
            <div className="flex items-center flex-shrink-0">Derry&rsquo;s Website</div>

            <div className="hidden sm:ml-6 sm:block">
                <div className="flex px-4 space-x-4">
                    <a href="https://www.linkedin.com/in/derry-leng/" target="_blank" rel="noreferrer noopener" className="hover:underline underline-offset-2 decoration-1">LinkedIn</a>
                    <a href="https://github.com/derryleng" target="_blank" rel="noreferrer noopener" className="item-right hover:underline underline-offset-2 decoration-1">GitHub</a>
                    <p>Testing</p>
                    <p>Testing</p>
                    <p>Testing</p>
                    <p>Testing</p>
                    <p>Testing</p>
                    <p>Testing</p>
                    <p>Testing</p>
                    <p>Testing</p>
                    <p>Testing</p>
                </div>
            </div>
        </div>
    )
}

export default NavbarLeft;
