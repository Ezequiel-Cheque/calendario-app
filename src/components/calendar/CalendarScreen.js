import React, { useState } from 'react';
import { Navbar } from '../ui/Navbar';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { messages } from '../../helpers/calendar-messages-es';

import 'moment/locale/es'
import { CalendarEvent } from './CalendarEvent';
import { CalendarModal } from './CalendarModal';
moment.locale('es');

const localizer = momentLocalizer(moment)
const myEventsList = [
    { 
        title: 'Cumpleaños del jefe',
        start: moment().toDate(),
        end: moment().add(2, "hours").toDate(),
        bgcolor: "#fafafa",
        notes:'Comprar el pastel',
        user: {
            _id: '123',
            name: 'Cheque'
        }
    }
];

export const CalendarScreen = () => {

    const [lastView, setLastView] = useState(localStorage.getItem("lastView") || 'month');

    const onDoubleClick = (e) => {
        console.log(e);
    }

    const onSelectEvent = (e) => {
        console.log(e);
    };

    const onViewChange = (e) =>{
        setLastView(e);
        localStorage.setItem("lastView", e);
    };

    const eventStyleGetter = (event, start, end, isSelected) => {
        
        const style={
            backgroundColor: '#367CF7',
            borderRadius: '0px',
            opacity: 0.8,
            display: 'block',
            color: "#fff"
        }

        return {
            style
        }
    };

    return (
        <div className="calendar-screen">
            <Navbar />
            <Calendar
                localizer={localizer}
                events={myEventsList}
                startAccessor="start"
                endAccessor="end"
                messages={messages}
                eventPropGetter={eventStyleGetter}
                onDoubleClickEvent={onDoubleClick}
                onSelectEvent={onSelectEvent}
                onView={onViewChange}
                view={lastView}
                components={{
                    event: CalendarEvent
                }}
            />

            <CalendarModal />
        </div>
    )
}
