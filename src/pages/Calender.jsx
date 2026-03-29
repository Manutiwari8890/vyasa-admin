import { useRef, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

export default function Calender() {
  const calendarRef = useRef(null);
  const [events, setEvents] = useState([]);
  const [eventType, setEventType] = useState("primary");
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [title, setTitle] = useState("");
  const [calendarTitle, setCalendarTitle] = useState("");
  const [editingEvent, setEditingEvent] = useState(null);

  const addEvent = () => {
    if (!title) return;
    if (editingEvent) {
      editingEvent.setProp("title", title);
      editingEvent.setStart(selectedDate);
      editingEvent.setAllDay(true);
      editingEvent.setProp("classNames", [`fc-event-${eventType}`]);
    } else {
      setEvents([
        ...events,
        {
          id: Date.now(),
          title,
          start: selectedDate,
          allDay: true,
          classNames: [`fc-event-${eventType}`],
        },
      ]);
    }
    resetModal();
  };
  const resetModal = () => {
    setTitle("");
    setEventType("primary");
    setSelectedDate(null);
    setEditingEvent(null);
    setShowModal(false);
  };


  return (
    <div className="bg-white rounded-2xl shadow-xs border border-gray-300 dark:bg-white/[0.03] dark:border-gray-800">
      <div className="flex justify-between items-center p-6">
        <div className="flex gap-2">
          <button
            onClick={() => calendarRef.current.getApi().prev()}
            className="text-gray-600 border border-gray-300 p-3 rounded-xl cursor-pointer duration-200 hover:bg-gray-100 dark:text-gray-400 dark:border-gray-800 dark:hover:bg-gray-800"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 24" fill="none" className="w-5 h-5"><path d="M16.0068 6L9.75684 12.25L16.0068 18.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <button
            onClick={() => calendarRef.current.getApi().next()}
            className="text-gray-600 border border-gray-300 p-3 rounded-xl cursor-pointer duration-200 hover:bg-gray-100 dark:text-gray-400 dark:border-gray-800 dark:hover:bg-gray-800"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 24" fill="none" className="w-5 h-5"><path d="M9.50684 19L15.7568 12.75L9.50684 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
        <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-300">{calendarTitle}</h2>
      </div>

      <FullCalendar
        ref={calendarRef}
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        editable={true}
        selectable={true}
        events={events}
        height="auto"
        headerToolbar={false}
        datesSet={(info) => {
            setCalendarTitle(info.view.title);
        }}
        dateClick={(info) => {
          setSelectedDate(info.date);
          setShowModal(true);
        }}
        eventClick={(info) => {
          setEditingEvent(info.event);          
          setTitle(info.event.title);
          setEventType(
            info.event.classNames?.[0]?.replace("fc-event-", "") || "primary"
          );
          setSelectedDate(info.event.start);
          setShowModal(true);
        }}
      />

      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 backdrop-blur-[2px]" onClick={() => setShowModal(false)}>
          <div className="bg-white rounded-4xl p-10 w-1/2" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-start mb-8">
                <div>
                    <h3 className="text-2xl font-semibold mb-2">Add Event</h3>
                    <p className="text-sm font-medium text-gray-500">Plan your next big moment: schedule or edit an event to stay on track</p>
                </div>
                <button className="w-12 h-12 rounded-full bg-gray-100 text-gray-500 content-center cursor-pointer hover:bg-gray-200"
                    onClick={() => {setShowModal(false); resetModal();}}
                >
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 mx-auto"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.04289 16.5413C5.65237 16.9318 5.65237 17.565 6.04289 17.9555C6.43342 18.346 7.06658 18.346 7.45711 17.9555L11.9987 13.4139L16.5408 17.956C16.9313 18.3466 17.5645 18.3466 17.955 17.956C18.3455 17.5655 18.3455 16.9323 17.955 16.5418L13.4129 11.9997L17.955 7.4576C18.3455 7.06707 18.3455 6.43391 17.955 6.04338C17.5645 5.65286 16.9313 5.65286 16.5408 6.04338L11.9987 10.5855L7.45711 6.0439C7.06658 5.65338 6.43342 5.65338 6.04289 6.0439C5.65237 6.43442 5.65237 7.06759 6.04289 7.45811L10.5845 11.9997L6.04289 16.5413Z" fill="currentColor"></path></svg>
                </button>
            </div>
            <label htmlFor="eventTitle" className="text-base font-medium mb-2 inline-block">Event Title</label>
            <input
              type="text"
              id="eventTitle"
              placeholder="Event title"
              className="w-full border border-gray-300 shadow-xs p-3 rounded-lg mb-4 outline-none"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <h4 className="text-base font-medium my-4 text-gray-700">Event Type</h4>
            <div className="flex gap-8">
              <label htmlFor="primary" className="flex items-center gap-2 text-base text-gray-700 cursor-pointer">
                <span className="relative content-center -mb-2">
                  <input type="radio" className="sr-only" value="primary" id="primary" checked={eventType==="primary"} onChange={(e) => setEventType(e.target.value)} />
                  <span className={`w-5 h-5 border border-gray-300 rounded-full flex justify-center items-center ${eventType==="primary" ? "bg-red-600" : ""}`}>
                    <span className="bg-white w-2 h-2 rounded-full inline-block"></span>
                  </span>
                </span>
                Primary
              </label>
               <label htmlFor="danger" className="flex items-center gap-2 text-base text-gray-700 cursor-pointer">
                <span className="relative content-center -mb-2">
                  <input type="radio" className="sr-only" value="danger" id="danger" checked={eventType==="danger"} onChange={(e) => setEventType(e.target.value)} />
                  <span className={`w-5 h-5 border border-gray-300 rounded-full flex justify-center items-center ${eventType==="danger" ? "bg-red-600" : ""}`}>
                    <span className="bg-white w-2 h-2 rounded-full inline-block"></span>
                  </span>
                </span>
                Danger
              </label>
              <label htmlFor="success" className="flex items-center gap-2 text-base text-gray-700 cursor-pointer">
                <span className="relative content-center -mb-2">
                  <input type="radio" className="sr-only" value="success" id="success" checked={eventType==="success"} onChange={(e) => setEventType(e.target.value)} />
                  <span className={`w-5 h-5 border border-gray-300 rounded-full flex justify-center items-center ${eventType==="success" ? "bg-red-600" : ""}`}>
                    <span className="bg-white w-2 h-2 rounded-full inline-block"></span>
                  </span>
                </span>
                Success
              </label>
               <label htmlFor="warning" className="flex items-center gap-2 text-base text-gray-700 cursor-pointer">
                <span className="relative content-center -mb-2">
                  <input type="radio" className="sr-only" value="warning" id="warning" checked={eventType==="warning"} onChange={(e) => setEventType(e.target.value)} />
                  <span className={`w-5 h-5 border border-gray-300 rounded-full inline-block text-center content-center ${eventType==="warning" ? "bg-red-600" : ""}`}>
                    <span className="bg-white w-2 h-2 rounded-full inline-block mb-[4px]"></span>
                  </span>
                </span>
                Warning
              </label>
            </div>

            <div className="flex justify-end gap-2 mt-8">
              <button
                onClick={() => resetModal()}
                className="px-4 py-2 text-base bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200"
              >
                Cancel
              </button>
              <button
                onClick={() => {addEvent(); resetModal()}}
                className="px-4 py-2 text-base bg-red-600 text-white rounded-xl cursor-pointer hover:bg-red-700"
              >
                  {editingEvent ? "Update Event" : "Add Event"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
