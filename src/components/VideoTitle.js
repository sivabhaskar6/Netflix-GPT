



const VideoTitle = ({ title, overview }) => {
    return (
        <div className="absolute top-0 left-0 w-full h-screen bg-gradient-to-r from-black text-white">
            <div className="pt-60 px-20 w-1/3">
                <h1 className="text-6xl font-bold">
                    {title}
                </h1>

                <p className="pb-6 pt-2 text-sm">
                    {overview}
                </p>

                <div className="flex gap-4">
                    <button className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-200">
                        ▶ Play
                    </button>

                    <button className="bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-500">
                        More Info
                    </button>
                </div>
            </div>
        </div>
    );
};

export default VideoTitle;