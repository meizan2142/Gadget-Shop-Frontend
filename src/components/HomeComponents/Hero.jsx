const Hero = () => {
    return (
        <div className="w-full bg-center bg-cover h-[38rem]"   style={{
            backgroundImage: "url(https://img.freepik.com/free-photo/bags-rack-store_107420-94851.jpg?t=st=1731558536~exp=1731562136~hmac=4309f4baa4ea27fd4197b65a904a6c3d28f030d1cab379e4d2c6fe06b0679bcd&w=1380)"}}>
            <div className="flex items-center justify-center w-full h-full bg-gray-900/40">
                <div className="text-center">
                    <h1 className="text-3xl font-semibold text-white lg:text-4xl">Build your new <span className="text-blue-400">Gadget</span> Shop</h1>
                </div>
            </div>
        </div>
    )
};

export default Hero;