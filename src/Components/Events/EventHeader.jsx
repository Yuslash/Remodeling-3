export default function EventHeader() {

    return <>
        <div className="events-navbar w-full h-[80px] flex px-[24px] justify-between items-center ">
            
            {/* comapny name starts */}
            <div className="company-name">
                Billionoillid
            </div>
            {/* company name ends here */}

            {/* navbar middle content starts here */}
            <div className="navs-content flex gap-[5vw]">
                <div>Home</div>
                <div>Events</div>
                <div>Arena</div>
                <div>Borad</div>
                <div>Shop</div>
            </div>
            {/* navbar middle content ends here */}

            {/* profile nav starts here */}
            <div className="navbar-profile">
                Profile
            </div>
            {/* profile nav ends here */}
        </div>
    </>
}