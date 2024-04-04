import React from "react"

const Subscription = () => {
    return(
        <div className="w-full h-screen" >
              <img className="hidden sm:block absolute w-full h-full object-cover" src="https://images.unsplash.com/photo-1547623641-d2c56c03e2a7?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
    <div className="fixed w-full max-w-[800px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 grid md:grid-cols-2 gap-8">
                <div className="shadow-2xl flex flex-col p-4 gap-4 bg-black/45"> 
                    <h2 className="text-4xl font-semibold text-center py-8">Basic </h2>
                    <div className="text-center">
                        <p className="py-2 mx-8 mt-8">Millions of project-ready photos and illustrations, for less</p>
                        <p className="py-2 mx-8 mt-8">Gives you 30 downloads a month</p>
                        <p className="text-center font-medium">$29/month</p>
                    </div>
                <       button className=" hover:scale-110 ease-in bg-green-400 w-[200px] rounded-md font-medium my-6 mx-auto px-6 py3"> Subscribe </button>
                </div>

                <div className="shadow-2xl flex flex-col p-4 gap-4 bg-black/45"> 
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