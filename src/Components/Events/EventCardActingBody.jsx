import EventSvg from "../EventSvg";

export default function EventCardActingBody() {

    return (
        <div className="flex flex-wrap max-w-[1000px] gap-[10px]">
           
            {/* acting card starts here */}
            <div className="acting-card w-[495px] h-[300px] flex p-[20px] gap-[10px]">
                <EventSvg />
                <div className="w-full h-full bg-white"></div>
            </div>
            {/* acting card ends here */}

        </div>
    )
}