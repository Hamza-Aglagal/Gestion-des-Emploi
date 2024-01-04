import React from 'react'



const TimeTable = () => {



    return (


        <main className='MaineTimeTable' style={{ margin: "0" }}>
            <div className="timetable active" id="timetable" style={{marginLeft:'7rem'}}>
                <div>
                    {/* <span id="prevDay">&lt;</span> */}
                    <h2 style={{width:'100%',textAlign:'center'}}> Timetable</h2>
                    {/* <span id="nextDay">&gt;</span> */}
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Time</th>
                            <th>Room No.</th>
                            <th>Subject</th>
                            {/* <th></th> */}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>10:30</td>
                            <td>Salle 501</td>
                            <td>Merise</td>
                        </tr>
                        <tr>
                            <td>10:30</td>
                            <td>Salle 501</td>
                            <td>Merise</td>
                        </tr>
                        <tr>
                            <td>10:30</td>
                            <td>Salle 501</td>
                            <td>Merise</td>
                        </tr>
                        <tr>
                            <td>10:30</td>
                            <td>Salle 501</td>
                            <td>Merise</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </main>



    )
}

export default TimeTable


