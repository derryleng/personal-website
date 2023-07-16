export default function Footer() {
    return (
        <footer className="py-2 text-center">
            <div className="mt-4 mb-2 text-sm opacity-50">
                <p>Thank you for visiting my website today!</p>
                <p>Please feel free to contact me or visit my other sites via the links below.</p>
            </div>
            <div className="flex items-center justify-center mb-4 space-x-5 text-base opacity-50">
                <a href="mailto:derry.leng@gmail.com" className="hover:underline underline-offset-2 decoration-1">Email</a>
                <a href="https://github.com/derryleng" target="_blank" rel="noreferrer noopener" className="item-right hover:underline underline-offset-2 decoration-1">GitHub</a>
                <a href="https://www.facebook.com/people/Derry-Leng/pfbid02gn2gU5DPGCHhunCSGU2zwzm2HdhJP3UuoHYNhF48eM5MuEkZjqpxw4pgLCaZ5keNl/" target="_blank" rel="noreferrer noopener" className="hover:underline underline-offset-2 decoration-1">Facebook</a>
                <a href="https://www.linkedin.com/in/derry-leng/" target="_blank" rel="noreferrer noopener" className="hover:underline underline-offset-2 decoration-1">LinkedIn</a>
            </div>
        </footer>
    )
}
