/** A bio */
export type About = {
    image_url: string;
    bio: string;
};

/** An external link */
export type Link = {
    name: string;
    url: string;
};

/** A contact method */
export type Contact = {
    type: string;
    name: string;
    value: string;
};

/** An instance of work experience */
export type WorkExperience = {
    company: string;
    title: string;
    timespan: string;
    technologies: string[];
    points: string[];
};

/** An instance of education experience */
export type Education = {
    institution: string;
    timespan: string;
    degree: string;
    major: string;
    points: string[];
}

/** A link to a resume pdf */
export type Resume = {
    pdf_usr: string;
}
