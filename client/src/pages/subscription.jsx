import React from "react"

const Subscription = () => {
    return(
        <div className="w-full py-[10rem] h-screen bg-slate-300" >
            <div className="max-w-[900px] mx-auto grid md:grid-cols-2 ">
                <div className="shadow-2xl flex flex-col p-4 gap-4 bg-gradient-to-r from-stone-50"> 
                    <h2 className="text-4xl font-semibold text-center py-8">Basic </h2>
                    <div className="text-center">
                        <p className="py-2 mx-8 mt-8">Millions of project-ready photos and illustrations, for less</p>
                        <p className="py-2 mx-8 mt-8">Gives you 30 downloads a month</p>
                        <p className="text-center font-medium">$29/month</p>
                    </div>
                <       button className=" hover:scale-110 ease-in bg-green-400 w-[200px] rounded-md font-medium my-6 mx-auto px-6 py3"> Subscribe </button>
                </div>

                <div className="shadow-2xl flex flex-col p-4 gap-4 bg-gradient-to-r from-stone-50"> 
                <h2 className="text-4xl font-semibold text-center py-8">Premium </h2>
                <div className="text-center">
                <p className="py-2 mx-8 mt-8">Gives you 100 downloads a month</p>
                <p className="py-2 mx-8 mt-8">Access to all images, including authentic, high-quality downloads</p>
                <p className="font-medium">$70/month</p>
                </div>
                <button className="hover:scale-110 ease-in bg-green-400 w-[200px] rounded-md font-medium my-6 mx-auto px-6 py3"> Subscribe </button>
                </div>
            </div>
            </div>
    ) 
}

export default Subscription;