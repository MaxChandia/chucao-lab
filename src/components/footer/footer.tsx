const Footer = () => {
    return (
        <footer>
            <section className="footerContainer flex flex-col lg:flex-row items-center justify-center min-h-screen lg:min-h-1 px-20  w-full bg-transparent border-t border-black font-karla text-sm gap-10 lg:gap-0 lg:py-10">
                <div className="footerItem lg:w-1/4">Item 1</div>
                <div className="footerItem lg:w-1/4">Item 2</div>
                <div className="footerItem lg:w-1/4 flex-col">
                    <p><b>Facultad de Artes Universidad de Chile</b></p>
                    <p>Dr. Sotero del Río 1270, 8340381 Santiago,</p>
                    <p>Región Metropolitana, Chile</p>
                </div>
                <div className="footerItem lg:w-1/4">Item 4</div>
            </section>
        </footer>
    );
}

export default Footer;