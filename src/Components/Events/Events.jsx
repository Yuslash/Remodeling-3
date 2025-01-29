import EventHeader from "./EventHeader";
import EventMainBody from "./EventMainBody";
import './Events.css'

export default function Events() {
  return (
    <div className="min-h-screen flex flex-col">
      
      {/* Event Navbar Starts */}
      <EventHeader />
      {/* Event Navbar Starts */}

      {/* Event MainBody Starts */}
      <EventMainBody />
      {/* Event MainBody Starts */}
    </div>
  )
}