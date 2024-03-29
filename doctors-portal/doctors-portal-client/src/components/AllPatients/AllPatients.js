import React from 'react';
import AppointmentDataTable from '../Dashboard/AppointmentDataTable/AppointmentDataTable';
import Sidebar from '../Dashboard/Sidebar/Sidebar'
const AllPatients = () => {
    const [appointments, setAppointments] = React.useState([])
    React.useEffect(() => {
        fetch('http://localhost:9000/appointments')
            .then(res => res.json())
            .then(data => setAppointments(data))
    }, [])
    return (
        <div className="container-fluid row " >
            <Sidebar />
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand">All Patients</h5>
                <AppointmentDataTable appointments={appointments} />
            </div>
        </div >
    );
};

export default AllPatients;