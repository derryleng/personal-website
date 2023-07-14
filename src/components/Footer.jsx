import React from "react";

function Footer() {
    return (
        <div className="py-2 text-center">
            <p className="mt-2 text-sm opacity-50">
                Copyright &copy; {new Date().getFullYear()} Derry Leng
            </p>
        </div>
    )
}

export default Footer;
