import "./Homepage.css"

const Homepage = () => {
    return (
        <div className="homepage-container w-[100%] flex flex-col justify-center items-center">
            <div className="h-[800px] w-[70%] bg-black mt-4 mb-4 flex flex-col items-center">
                <span className="text-cyan-400 text-2xl font-bold mt-3">WELCOME TO ML POWERED RECOMENDATION SHOP</span>
                <span className="text-white text-xl font-semibold mt-3">Find the best electronics products tailored to your preferences!</span>
                <img src="images/products/keyboards/keyboard1.jpg" alt="Homepage keyboard image" className="w-[50%] mt-[15px]" />
            </div>
        </div>
    )
}

export default Homepage