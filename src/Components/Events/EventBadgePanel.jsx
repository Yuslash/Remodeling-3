import Progress from "../EarTesting/Progress";
import ProgressBadge from "./ProgressBadge";

export default function EventBadgePanel() {
 
    return (
        <div className="main-badgeContainer flex flex-col p-[10px]">
            <div className="badge-holder h-[292px] bg-black"></div>
            <div className="badge-content flex bg-green-500 pl-[10px] py-[5px] pr-[20px]">
                <div className="content-badge flex flex-col">
                    <div>CYBER SPECIALIST</div>
                    <div>Elite Access To cutting-Edge Security tools</div>
                    <ProgressBadge />
                    <div className="flex bg-cyan-500">
                        <div>0%</div>
                        <div>100%</div>
                    </div>
                </div>
            </div>
        </div>
    )
    
}