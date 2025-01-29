import EventCardActingBody from "./EventCardActingBody"

export default function EventMainBody() {

    console.log(window.innerWidth * 0.75)

    return (
        <div className="h-full bg-orange-500 flex-1 flex ">
            
            {/* Cards Container Starts here */}
                <div  className="acting-body w-[75vw] flex justify-center items-center">
                    <EventCardActingBody />
                </div>
            {/* Cards Container Ends here */}

            {/* Leveling Container Starts here */}
                <div className="w-[25vw] bg-green-300">

                </div>
            {/* Leveling Container Ends here */}
        </div>
    )
}