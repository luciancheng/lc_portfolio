import TimelineContainer from "./timelineContainerTemplate";

const Experience = () => {
    const experiences = [{company: "Bluewrist Inc.", position: "Software Engineering Intern Co-op", time: "May 2024 - Present", desc: "Designed the pipeline and infrastructure for scalable ML model deployment using flask and AWS Sagemaker.", skills: ["python", "aws", "pytorch", "cpp", "docker"], side: "left"},
{company: "Bluewrist Inc.", position: "Software Engineering Intern Co-op", time: "May 2023 - August 2024", desc: "Implemented the Pointnet++ part segmenetation ML model using pytorch for identification of weld surfaces from 3D point cloud scans with +98% accuracy.", skills: ["python", "pytorch", "cpp"], side: "right"},
{company: "McMaster EcoCAR EV Challenge", position: "CAVs General Member", time: "October 2022 - Present", desc: "Collaborated in a team to develop autnomous driving algorithms using sensor data from the vehicle.", skills: ["python"], side: "left"},
{company: "McMaster MED-T Guided Hands", position: "Technical Writer", time: "October 2022 - December 2022", desc: "Transcribed code in C# to readable and understandable code for investors and other stakeholders.", skills: ["csharp"], side: "right"},
{company: "McMaster University", position: "B.Eng.BME Mechatronics & Biomedical Engineering", time: "September 2021 - Present", desc: "Studying Mechatronics and Biomedical Engineering, developing a strong multidisciplinary background in software, electrical, mechanical, and biomedical engineering, Using proper engineering practices and economic analysis to create projects individually and in groups.", skills: ["python", "cpp", "c", "autodesk"], side: "left"},
]
    

    return (
        <div className="experience" id="experience">
            <h1>Experience</h1>
            <div className="seperator"></div>
            <div className="timeline">
                {experiences.map((exp) => (
                    <TimelineContainer experience={exp}/>
                ))}
            </div>
        </div>
     );
}
 
export default Experience;