import EventBadgePanel from "./EventBadgePanel"
import EventCardActingBody from "./EventCardActingBody"
import MiniLeaderBoard from "./MiniLeaderBoard"

export default function EventMainBody() {

    return (
        <div className="h-full flex-1 flex ">
            
            {/* Cards Container Starts here */}
                <div  className="acting-body w-full flex justify-center items-center">
                    <EventCardActingBody />
                </div>
            {/* Cards Container Ends here */}

            {/* Leveling Container Starts here */}
                <div className="right-badgebanner w-[30vw] flex flex-col">
                    <EventBadgePanel />
                    <MiniLeaderBoard />
                </div>
            {/* Leveling Container Ends here */}
        </div>
    )
}