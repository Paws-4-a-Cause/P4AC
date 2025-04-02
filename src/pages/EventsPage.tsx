import React from "react";

const EventsPage = () => {
  const events = [
    {
      id: 1,
      date: "29th Feb 2024",
      organization: "MercyLight",
      event: "DraVIA",
    },
    {
      id: 2,
      date: "18th October 2024",
      organization: "MercyLight",
      event: "DraVIA",
    },
    {
      id: 3,
      date: "19th Feb 2025",
      organization: "Love Kuching Project",
      event: "Cattery visit",
    },
  ];

  return (
    <div>
      <h1>Events</h1>
      <div>
        {events.map((event) => (
          <div
            key={event.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "15px",
              margin: "15px 0",
              backgroundColor: "#f9f9f9",
            }}
          >
            <h3>{event.event}</h3>
            <p>
              <strong>Organization:</strong> {event.organization}
            </p>
            <p>
              <strong>Date:</strong> {event.date}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsPage;
