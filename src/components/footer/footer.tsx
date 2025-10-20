const Footer = () => {
    return (
        <footer>
            <section className="footerContainer items-center justify-center h-40 px-20 flex w-full bg-transparent border-t border-black font-karla text-sm">
                <div className="footerItem w-1/4">Item 1</div>
                <div className="footerItem w-1/4">Item 2</div>
                <div className="footerItem w-1/4 flex-col">
                    <p><b>Facultad de Artes Universidad de Chile</b></p>
                    <p>Dr. Sotero del Río 1270, 8340381 Santiago,</p>
                    <p>Región Metropolitana, Chile</p>
                </div>
                <div className="footerItem w-1/4">Item 4</div>
            </section>
        </footer>
    );
}

export default Footer;