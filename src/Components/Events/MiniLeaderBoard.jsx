import EarSvg from "../EarTesting/EarSvg";
import EventAvatar from "./EventAvatar";
import EventAvatarRed from "./EventAvatarRed";

export default function MiniLeaderBoard() {
    return (
        <div className="leaderboard-container w-full h-full flex flex-col items-center p-[15px]">
            <div className="leaderboard-title"></div>
                <div>LeaderBoard</div>
                <div className="minileader-content overflow-y-auto w-full bg-black flex flex-col gap-4">

                    {/* the title row starts here  */}
                    <div className="content-row justify-between px-4 flex text-white py-[20px]">
                        <div className="first-bench flex gap-4 ">
                            <div>S.No</div>
                            <div>Badge</div>
                            <div>Player</div>
                        </div>
                        <div className="score-bench">Score</div>
                    </div>
                    {/* the title row starts here  */}
                
                <div className="playerslist-column flex flex-col gap-4 h-[390px] overflow-y-auto scrollbar-hidden">
        
                
                {/* player list startin here */}
                <div className="player-row flex px-4 text-white  rounded-xl items-center justify-between py-[16px]">
                <div className="flex gap-[35px] items-center ">
                    <div>253</div>
                    <img className="w-[24px]" src="/badgecrown.png" />
                    <div className="flex gap-[5px] items-center">
                    <EventAvatar />
                    <div>@Sibikrishna</div>
                    </div>
                </div>
                <div>26578</div>
                </div>
                {/* player list ending here */}


                  {/* player list startin here */}
                <div className="player-row flex px-4 text-white rounded-xl items-center justify-between py-[16px]">
                <div className="flex gap-[35px] items-center ">
                    <div>253</div>
                    <img className="w-[24px]" src="/badgecrown.png" />
                    <div className="flex gap-[5px] items-center">
                    <EventAvatarRed />
                    <div>@Yuslash Crimson</div>
                    </div>
                </div>
                <div>26578</div>
                </div>
                {/* player list ending here */}

                 {/* player list startin here */}
                 <div className="player-row flex px-4 text-white bg-[#132702] rounded-xl items-center justify-between py-[16px]">
                <div className="flex gap-[35px] items-center ">
                    <div>253</div>
                    <img className="w-[24px]" src="/badgecrown.png" />
                    <div className="flex gap-[5px] items-center">
                    <EventAvatar />
                    <div>@WatchingHere</div>
                    </div>
                </div>
                <div>26578</div>
                </div>
                {/* player list ending here */}

                 {/* player list startin here */}
                 <div className="player-row flex px-4 text-white rounded-xl items-center justify-between py-[16px]">
                <div className="flex gap-[35px] items-center ">
                    <div>253</div>
                    <img className="w-[24px]" src="/badgecrown.png" />
                    <div className="flex gap-[5px] items-center">
                    <EventAvatarRed />
                    <div>@Crimson Connor</div>
                    </div>
                </div>
                <div>26578</div>
                </div>
                {/* player list ending here */}


                 {/* player list startin here */}
                 <div className="player-row flex px-4 text-white rounded-xl items-center justify-between py-[16px]">
                <div className="flex gap-[35px] items-center ">
                    <div>253</div>
                    <img className="w-[24px]" src="/badgecrown.png" />
                    <div className="flex gap-[5px] items-center">
                    <EventAvatar />
                    <div>@Jhon Snow</div>
                    </div>
                </div>
                <div>26578</div>
                </div>
                {/* player list ending here */}

                 {/* player list startin here */}
                 <div className="player-row flex px-4 text-white rounded-xl items-center justify-between py-[16px]">
                <div className="flex gap-[35px] items-center ">
                    <div>253</div>
                    <img className="w-[24px]" src="/badgecrown.png" />
                    <div className="flex gap-[5px] items-center">
                    <EventAvatarRed />
                    <div>@Sibikrishna</div>
                    </div>
                </div>
                <div>26578</div>
                </div>
                {/* player list ending here */}

                </div>
                {/* playerlist-colmn list ending here */}


                </div>
        </div>
    )
}