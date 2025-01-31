import { useControls } from "leva";

export default function EventBadgePanel() {
    const { width } = useControls({
        width: { value: 225, min: 0, max: 184, step: 0.01 }
    });

    const startX = 30.2871;
    const endX = startX + width;
    const endL = endX - 20;

    return (
        <div className="main-badgeContainer flex flex-col p-[10px]">
            <div className="badge-holder h-[260px] bg-black flex justify-center items-center">
                <img className="w-[200px] h-[200px]" src="badgecrown.png" />
            </div>
            <div className="badge-content flex pl-[10px] py-[5px] pr-[10px]">
                <div className="content-badge gap-[8px] flex flex-col">
                    <div className="title-cyber">CYBER SPECIALIST</div>
                    <div className="desc-cyber">Elite Access To cutting-Edge Security tools</div>
                    
                    {/* Updated progress bar with dynamic values */}
                    <svg width="225" height="13" viewBox="0 0 225 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 12.9167L10.6235 0H225L207.022 12.9167H0Z" fill="black" fillOpacity="0.56"/>
                        <path d={`M8 9L12.9348 3H${endX}L${endL} 9H8Z`} fill="#0AFF9D"/>
                    </svg>

                    <div className="numberpercent flex justify-between">
                        <div>0%</div>
                        <div>100%</div>
                    </div>
                </div>
                <div className="upcoming-holder w-full flex">
                    <div className="upcoming-style">UPCOMING NEXT</div>
                    <img className="w-[40px]" src="conq.png" />
                </div>
            </div>
        </div>
    );
}