import React from 'react';
import Nav from "./components/nav";
import AudioControl from "./components/audioControl";

const caseStudyData = [
    {
        id: 1,
        title: "Agavos Group",
        goal: "In this design case study, our goal was to redesign the website of an individual recruitment agency that specializes in the solar industry. Our primary objective was to highlight the agency's placement services for both companies and individuals, with a focus on optimizing the website for relevant SEO keywords.",
        userStory: "For this landing page redesign we had two user stories: 1) As a specialized job seeker, I want to get placed at a new company, so that I can get a job in the solar industry. 2) As a solar company, I want to find specialized candidates, so that I can build an effective team.",
        targetAudience: "Companies and job seekers in the solar industry.",
        // This can be hardcoded into the site layout 
        // processTitle: "PROCESS"
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
        <div className="card">
            <div className="details">
                <div className="details-header front">
                    {title}
                </div>
                <div className="details-content back">
                    {content}
                </div>
            </div>
        </div>
    )
}

export default function CaseStudy(props){
    const { 
        id,
        title, 
        goal, 
        userStory, 
        targetAudience,
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

 return(
    <div>
        <div className="title">
            {title.toUpperCase()}
        </div>
        <div className="details-container">
            <Card content={goal} title="GOAL"></Card>
            <Card content={userStory} title="USER STORY"></Card>
            <Card content={targetAudience} title="TARGET AUDIENCE"></Card>
        </div>
        <AudioControl></AudioControl>
        <Nav></Nav>
   </div>
 )
}