import React from 'react'
import {BsBriefcase} from 'react-icons/bs'
import {FaUniversity} from 'react-icons/fa'

import "./timeline.css"

import timelineElements from "./timelineElements"

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"


const Timeline = () => {
    let workIconStyles = { background: "#4db5ff" }
    let schoolIconStyles = { background: "#4db537" } 
    return (
        <section id="timeline">
        
            <h2 className="title">Work Experience & Education</h2>
        
            <VerticalTimeline animate={true}>
                {timelineElements.map(element => {
                    let isWorkIcon = element.icon === "work"
                    let showButton =
                    element.buttonText !== undefined &&
                    element.buttonText !== null &&
                    element.buttonText !== ""

                return (
                    <VerticalTimelineElement id="my-timeline"
                    key={element.key}
                    date={element.date}
                    dateClassName="date"
                    iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                    icon={isWorkIcon ? <BsBriefcase /> : <FaUniversity />}
                    link={element.link}
                    >
                    <h3 className="vertical-timeline-element-title">
                        {element.title}
                    </h3>
                    <h5 className="vertical-timeline-element-subtitle">
                        {element.location}
                    </h5>
                    <p id="description">{element.description}</p>
                    {showButton && (
                        <a className={`btn ${
                            isWorkIcon ? "workButton" : "schoolButton"
                        }
                    `}
                        href={element.link}
                        >
                        {element.buttonText}
                        </a>
                    )}
                    </VerticalTimelineElement>
                )
                })}
            </VerticalTimeline>
        </section>
    )
}

export default Timeline