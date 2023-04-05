import React, { useRef, useState } from 'react';
import Nav from "./components/nav";
// import AudioControl from "./components/audioControl";
import gsap from 'gsap';

const caseStudyData = [
    {
        id: 1,
        // Hero
        heroImage: ['./images/agavos-hero-mockup.png'],
        heroAltText: "Hi fidelity mockup of Agavos hero.  Includes navigation menu with additional information for job seekers, employers, courses, pricing, and an about us page. Also, includes a video of services.",
        // Details
        projectName: "Agavos Group",
        projectDescription: "is an individually owned recruitment agency specializing in the solar industry.",
        goal: "In this design case study our primary objective was to highlight the agency's placement services for both companies and individuals with a focus on optimizing the website for relevant SEO keywords.",
        contribution: ["User Experience", "Visual Design", "Content Strategy", "SEO Keyword Analysis"],
        userStory: "As a specialized job seeker, I want to get placed at a new company, so that I can get a job in the solar industry and as a solar company, I want to find specialized candidates, so that I can build an effective team.",
        targetAudience: "Companies and job seekers in the solar industry.",
        site: "Design Stage",
       
        wireframeImage: ['./images/agavos-wireframe.png'],
        wireframeAltText: "Hand written wireframe of Agavos Group landing page.",
        userFlowImages: [],
        description: "This is placeholder text for an explanation of design decisions.",
        challenge: "This is placeholder text for a design challenge",
        solution: "This is placeholder text for a design solution",
        keyFeatures: "KEY FEATURE",
        functionality: "FUNCTION",
        hifiImages: [],
        // This can be hardcoded into the site layout
        // feedbackTitle: "FEEDBACK"
        analytics: "Analytics placeholder text",
        data: "Data placeholder text"
    }
];

const Card = ({ content, title}) => {

    return (
        <div className="details">
            <div className="details-header">
                {title}
            </div>
            <div className="details-content">
                {Array.isArray(content) ? (
                    <ul className="contribution-list">
                        {content.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                ) : (
                    content
                )}
            </div>
        </div>
    )
}

export default function CaseStudy(props){
    const { 
        id,
        heroImage,
        heroAltText,
        projectName,
        projectDescription,
        goal, 
        contribution, 
        userStory, 
        targetAudience,
        site,
        wireframeImage,
        wireframeAltText,
        userFlowImages,
        description,
        challenge,
        solution,
        keyFeatures,
        functionality, 
        hifiImages,
        analytics,
        data
     } = caseStudyData[0];

     const contentRef = useRef(null);
     const imageRef = useRef(null);

     React.useEffect(() => {

        gsap.fromTo(
            imageRef.current,
            { x: "-5%", opacity: 0},
            { x: 0, opacity: 1, duration: 2.5, ease: "power2.out"}
        );
     }, []);


 return(
    <>
        <div className="fullscreen-section">
            <img src={heroImage} alt={heroAltText} ref={imageRef}></img>
        </div>
        <div className="casestudy-body" ref={contentRef}>
            <div className="title">
               {projectName} {projectDescription}
            </div>
            <div className="description-container">
                <div className="details-container">
                    <Card content={goal} title="GOAL"></Card>
                    <Card content={contribution} title="CONTRIBUTION"></Card>
                    <Card content={userStory} title="USER STORY"></Card>
                    <Card content={targetAudience} title="TARGET AUDIENCE"></Card>
                    <Card content={site} title="SITE"></Card>
                </div>
                <div className="wireframe-container">
                    <img src={wireframeImage} alt={wireframeAltText} className="wireframe-img"></img>
                </div>
            </div>
            {/* <AudioControl></AudioControl> */}
            <Nav></Nav>
         </div>
    </>
 )
}