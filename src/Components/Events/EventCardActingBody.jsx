import EventSvg from "../EventSvg";

export default function EventCardActingBody() {

    return (
        <div className="flex flex-wrap max-w-[1000px] gap-[10px]">
           
            {/* acting card starts here */}
            <div className="acting-card w-[495px] h-[300px] flex p-[20px] gap-[10px]">
                <EventSvg />

                {/* right side container for content information */}
                <div className="w-[265px] h-full  text-white flex flex-col justify-between pl-[20px]">

                    {/* games names column starts here */}
                    <div className="flex flex-col">
                        <div>Games Name</div>
                        <div className="flexq">
                            <img alt="sibi"></img>
                            <div>Certification</div>
                        </div>
                    </div>
                    {/* games names column ends here */}

                    {/* game current level starts here */}
                    <div className="flex flex-col">
                        <div>Game Current Level</div>
                        <div>Master RainDrop</div>
                    </div>
                    {/* game current level ends here */}

                    {/* Previous Level Starts here */}
                    <div className="flex gap-[20px]">
                        
                        <div className="flex flex-col">
                            <div>Previous Level</div>
                            <div>Shang Chi</div>
                        </div>

                        <div className="flex flex-col">
                            <div>Next Level</div>
                            <div>Jackie Chan</div>
                        </div>
                    
                    </div>
                    {/* Previous Level ends here */}

                    {/* Select Button Starts here */}
                    <div onClick={console.log('sibikrishna')} className="event-select-btn w-full bg-green-500 justify-center flex h-[28px]">
                        Select
                    </div>
                    {/* Select Button Ends here */}


                </div>
            </div>
            {/* acting card ends here */}

        </div>
    )
}