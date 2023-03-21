import React from 'react';
import Nav from "./components/nav";
import AudioControl from "./components/audioControl";
import gsap from 'gsap';

const caseStudyData = [
    {
        id: 1,
        title: "Agavos Group",
        subheader: "Website Redesign",
        goal: "In this design case study, our goal was to redesign the website of an individual recruitment agency that specializes in the solar industry. Our primary objective was to highlight the agency's placement services for both companies and individuals, with a focus on optimizing the website for relevant SEO keywords.",
        userStory: "As a specialized job seeker, I want to get placed at a new company, so that I can get a job in the solar industry and as a solar company, I want to find specialized candidates, so that I can build an effective team.",
        targetAudience: "Companies and job seekers in the solar industry.",
        // This can be hardcoded into the site layout 
        // processTitle: "PROCESS"
        wireframeImage: ['./images/agavos-wireframe.png'],
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
                {content}
            </div>
        </div>
    )
}

export default function CaseStudy(props){
    const { 
        id,
        title,
        subheader, 
        goal, 
        userStory, 
        targetAudience,
        wireframeImage,
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

     const subheaderRef = React.useRef();

     React.useEffect(() => {
        gsap.to(subheaderRef.current, {x: 0, duration: 2.5, ease: "Power2.easeOut", opacity: 1});
     });


 return(
        <div className="casestudy-body">
            <div className="title">
                {title}:
            </div>
            <div className="title subheader" ref={subheaderRef}>
                {subheader}
            </div>
            <div className="description-container">
                <div className="details-container">
                    <Card content={goal} title="GOAL"></Card>
                    <Card content={userStory} title="USER STORY"></Card>
                    <Card content={targetAudience} title="TARGET AUDIENCE"></Card>
                </div>
                <div className="wireframe-container">
                    <img src={wireframeImage} alt="Hand written wireframe of Agavos Group landing page." className="wireframe-img"></img>
                </div>
            </div>
            <AudioControl></AudioControl>
            <Nav></Nav>
    </div>
 )
}