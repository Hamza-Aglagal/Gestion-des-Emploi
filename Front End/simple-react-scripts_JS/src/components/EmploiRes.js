import React from 'react'
import '../assets/css/EmploiRespo.css'


const Emploi = ({ dates, seances }) => {

    const formatTime = (time) => {
        const parsedTime = new Date(`2000-01-01T${time}`);
        return parsedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    const PoSe = {
        L1: null, L2: null, L3: null, L4: null, L5: null, L6: null,
        M1: null, M2: null, M3: null, M4: null, M5: null, M6: null,
        Me1: null, Me2: null, Me3: null, Me4: null, Me5: null, Me6: null,
        J1: null, J2: null, J3: null, J4: null, J5: null, J6: null,
        V1: null, V2: null, V3: null, V4: null, V5: null, V6: null,
        S1: null, S2: null, S3: null, S4: null, S5: null, S6: null,
    }

    const Generate = () => {

    }

    return (

        <div className="timetable">

            <div className="week-names">
                <div>Lundi</div>
                <div>Mardi</div>
                <div>Mercredi</div>
                <div>Jeudi</div>
                <div>Vendredi</div>
                <div>Samedi</div>
                {/* <div className="weekend">sunday</div> */}
            </div>

            <div className="time-interval">
                {
                    dates && dates.map((item) =>
                        <div key={item.id} >{formatTime(item.heur_debut)} - {formatTime(item.heur_fin)}</div>
                    )
                }
                {/* <div>8:00 - 10:00</div>
                <div>10:00 - 12:00</div>
                <div>12:00 - 14:00</div>
                <div>14:00 - 16:00</div>
                <div>16:00 - 18:00</div>
                <div>18:00 - 20:00</div> */}
            </div>


            <div className="content">

                <div>
                    <div className="accent-orange-gradient">.ff</div>
                </div>
                <div>.ff</div>
                <div>.</div>
                <div>.</div>
                <div>
                    <div className="accent-green-gradient">.</div>
                </div>
                <div >.</div>
                <div >.</div>


                <div>.</div>
                <div>.</div>
                <div>.</div>
                <div>
                    <div className="accent-cyan-gradient">.</div>
                </div>
                <div>.</div>
                <div >.</div>
                <div >.</div>


                <div>
                    <div className="accent-pink-gradient">.</div>
                </div>
                <div>.</div>
                <div>
                    <div className="accent-purple-gradient">.</div>
                </div>
                <div>.</div>
                <div>.</div>
                <div >.</div>
                <div >.</div>


                <div>.</div>
                <div>.</div>
                <div>.</div>
                <div>.</div>
                <div>.</div>
                <div >.</div>
                <div >.</div>


                <div>
                    <div className="accent-purple-gradient">.</div>
                </div>
                <div>.</div>
                <div>.</div>
                <div>.</div>
                <div>.</div>
                <div >.</div>
                <div >.</div>


                <div>.</div>
                <div>.</div>
                <div>.</div>
                <div>.</div>
                <div>.</div>
                <div >.</div>
                <div >.</div>


            </div>
        </div>

    )
}

export default Emploi
