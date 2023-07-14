import React from "react";

function Navigation() {
    return (
        <div className="sticky top-0 z-50">
            <div className="flex flex-row items-center justify-center py-2 space-x-3 bg-white">
                <div><a href="https://www.linkedin.com/in/derry-leng/" target="_blank" rel="noreferrer noopener" className="hover:underline underline-offset-2 decoration-1">LinkedIn</a></div>
                <div><a href="https://github.com/derryleng" target="_blank" rel="noreferrer noopener" className="hover:underline underline-offset-2 decoration-1">GitHub</a></div>
            </div>
            <div className="h-3 bg-gradient-to-b from-white to-transparent" />
        </div>
    )
}

export default Navigation;
