import EventCardActingBody from "./EventCardActingBody"

export default function EventMainBody() {

    return (
        <div className="h-full flex-1 flex ">
            
            {/* Cards Container Starts here */}
                <div  className="acting-body w-full flex justify-center items-center">
                    <EventCardActingBody />
                </div>
            {/* Cards Container Ends here */}

            {/* Leveling Container Starts here */}
                {/* <div className="w-[25vw] bg-green-300">
                    not developed yuet
                </div> */}
            {/* Leveling Container Ends here */}
        </div>
    )
}