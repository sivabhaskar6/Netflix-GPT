
const GptSearchBar = () => {
    return(
        <div className="flex  justify-center">
            <div className="inline-flex mt-44  gap-2 bg-black p-4 rounded-md">
                <form>
                    <input className= "w-[600px] border-gray-300 rounded-lg py-2 px-4 focus:outline-blue-500" 
                    type="text" placeholder="What movies could you like to watch today?" /> 
                </form>
                <button className="px-6 py-2  bg-red-600 text-white rounded-lg">Search</button>
            </div>
        </div>
    
    )
}

export default GptSearchBar;