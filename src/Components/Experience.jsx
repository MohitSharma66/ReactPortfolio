import React from 'react';
import pdf from "../pdf/InternShip-Certificate.pdf";
import experience from './data/experience.json';

const Experience = () => {
  return (
    <>
    <div className="container ex mt-3 col-6" id="experience">
        <h1>EXPERIENCE</h1>
        {
            experience.map((data) => {
                return (
                    <>
                    <div key={data.id} className='ex-items text-center my-5' data-aos="zoom-in" data-aos-duration="1000">
                        <div className="left">
                            <img src={`/assets/${data.imageSrc}`} alt="Company Image" />
                        </div>
                        <div className="right">
                            <h2>{data.role}</h2>
                            <h4>
                                <span style={{color: 'yellowgreen'}}>{data.startDate} {" - "} {data.endDate}</span>
                                {" "}
                                <span style={{color: 'yellow'}}>{data.location}</span>
                            </h4>
                            <h5 style={{color: 'yellow'}}>{data.experiences}</h5>
                            <a className="btn btn-outline-warning mt-2 mb-0" href={pdf} download="Certificate.pdf">View Internship Certificate</a>
                        </div>
                    </div>
                    </>
                )
            })
        }

    </div>
    </>
  )
}

export default Experience
