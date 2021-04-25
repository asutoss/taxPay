import React, { useState } from 'react';
import Project from './project';

const ProjectsPage = () => {
    var list = [
        {
            name: "A",
            sub: "something AAAAAAAAAAAAAAAAAAAAAAAAA"
        },
        {
            name: "B",
            sub: "something B"
        },
        {
            name: "C",
            sub: "something C"
        },
        {
            name: "D",
            sub: "something D"
        }
    ];
    return (
        <div>
            <h1>Projects</h1>
            {
                list.map((project) => <Project 
                    name={project.name} 
                    sub={project.sub}
                />)
            }
        </div>
    );
}

export default ProjectsPage;