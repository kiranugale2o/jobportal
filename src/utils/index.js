//Check password format
export function passwordChecker(e) {
  let password = e.target.value.trim();

  // This regex matches specific special characters like @, #, $, %, &, etc.
  const specificSpecialCharRegex = /[@#$%^&*()_+[\]{};':"\\|,.<>?]/;
  if (password.length >= 6) {
    if (!specificSpecialCharRegex.test(password)) {
      const msg = {
        status: false,
        message: "At least One Special character add in Password !",
      };
      return msg;
    }
    const msg = {
      status: true,
      message: "Strong Password !",
    };
    return msg;
  } else {
    const msg = {
      status: false,
      message: "Password must be 6 character !",
    };
    return msg;
  }
}

export const CandidateRequireField = [
  {
    label: "resume",
    name: "resume",

    placeholder: "Upload Resume",
    contentType: "file",
  },
  {
    label: "name",
    name: "name",
    placeholder: "Enter your full Name",
    contentType: "input",
  },
  {
    label: "email",
    name: "email",
    placeholder: "Enter your Email",
    contentType: "input",
  },
  {
    label: "company",
    name: "company",
    placeholder: "Enter your current company Name",
    contentType: "input",
  },
  {
    label: "joblocation",
    name: "joblocation",
    placeholder: "Enter your current job location",
    contentType: "input",
  },
  {
    label: "csalary",
    name: "csalary",
    placeholder: "Enter your current Salary In LPA ",
    contentType: "input",
  },
  {
    label: "skill",
    name: "skill",
    placeholder: "Enter your Skills",
    contentType: "input",
  },
  {
    label: "experience",
    name: "experience",
    placeholder: "Enter your total experience ",
    contentType: "input",
  },
  {
    label: "college",
    name: "college",
    placeholder: "Enter your college name",
    contentType: "input",
  },
  {
    label: "collegelocation",
    name: "collegelocation",
    placeholder: "Enter your college location",
    contentType: "input",
  },
  {
    label: "degree",
    name: "degree",
    placeholder: "Enter your Complated Degree in college",
    contentType: "input",
  },
  {
    label: "graduationYear",
    name: "graduationYear",
    placeholder: "Enter your Graduated year ",
    contentType: "input",
  },
  {
    label: "linkedin",
    name: "linkedin",
    placeholder: "Enter your linkedIn profile url",
    contentType: "input",
  },

  {
    label: "github",
    name: "github",
    placeholder: "Enter your github profile url",
    contentType: "input",
  },
];

export const initialCandidateData = {
  resume: "",
  name: "",
  email: "",
  company: "",
  joblocation: "",
  csalary: "",
  skill: "",
  experience: "",
  college: "",
  collegelocation: "",
  degree: "",
  graduationYear: "",
  linkedin: "",
  github: "",
};

//Recruiter Form Fields
export const recruiterFromfield = [
  {
    label: "name",
    name: "name",
    placeholder: "Enter your full Name",
    contentType: "input",
  },
  {
    label: "company",
    name: "company",
    placeholder: "Enter your Company Name",
    contentType: "input",
  },
  {
    label: "role",
    name: "role",
    placeholder: "Enter your Role in Company ",
    contentType: "input",
  },
];

export const initialRecruterData = {
  name: "",
  company: "",
  role: "",
};

export const jobFormFields = [
  {
    label: "companyName",
    name: "companyName",
    placeholder: "Company Name ",
    contentType: "input",
    disabled: true,
  },
  {
    label: "jobtitle",
    name: "jobtitle",
    placeholder: "Job Title",
    contentType: "input",
  },
  {
    label: "joblocation",
    name: "joblocation",
    placeholder: "Job Location",
    contentType: "input",
  },
  {
    label: "jobdescription",
    name: "jobdescription",
    placeholder: "Job Description ",
    contentType: "input",
  },
  {
    label: "skill",
    name: "skill",
    placeholder: "Job Skill",
    contentType: "input",
  },
  {
    label: "experience",
    name: "experience",
    placeholder: "Experience",
    contentType: "input",
  },
  {
    label: "jobtype",
    name: "jobtype",
    placeholder: "Job Type ,like > hybrid,remote",
    contentType: "input",
  },
];

export const initialJobData = {
  companyName: "",
  jobtitle: "",
  joblocation: "",
  jobdescription: "",
  skill: "",
  experience: "",
  jobtype: "",
  postDate: "",
};

export const filterMenuDataArray = [
  {
    id: "companyName",
    label: "company",
  },
  {
    id: "jobtitle",
    label: "title",
  },
  {
    id: "jobtype",
    label: "Type",
  },
  {
    id: "joblocation",
    label: "location",
  },
];

import qs from "query-string";
export function formUrlQuery({ params, data }) {
  const currentUrl = qs.parse(params);
  if (Object.keys(data).length > 0) {
    Object.keys(data).map((key) => {
      if (data[key].length === 0) delete currentUrl[key];
      else currentUrl[key] = data[key].join(",");
    });
  }

  return qs.stringifyUrl(
    {
      url: window.location.pathname,
      query: currentUrl,
    },
    {
      skipNull: true,
    }
  );
}

//toast

//Nodemailer Transporter

export const suggestQuestions = [
  {
    id: "que1",
    question:
      "What are the most important skills or attributes needed to succeed in this position?",
  },
  {
    id: "que3",
    question:
      "Can you give me an example of how the company promotes work-life balance?",
  },
  {
    id: "que4",
    question: "What are the next steps in the hiring process?",
  },
  {
    id: "que5",
    question:
      "Can you provide an example of a project or task that you’re particularly proud of? What was your role, and what was the outcome?",
  },
  {
    id: "que6",
    question:
      "Tell me about a time when you faced a major challenge at work. How did you handle it?",
  },
  {
    id: "que7",
    question: "How do you handle working under pressure or tight deadlines?",
  },
  {
    id: "que8",
    question:
      "Can you describe a time when you worked as part of a team to achieve a common goal? What role did you play?",
  },
  {
    id: "que9",
    question:
      "Where do you see yourself in five years? How does this position fit into your career goals?",
  },
];

//jobs Category
export const jobCategories = [
  "Engineering",
  "Marketing",
  "Sales",
  "Finance",
  "Human Resources",
  "Customer Service",

  "Software Development",
  "Design",
  "Healthcare",
  "Education",
  "Legal",
  "Project Management",
  "Operations",
  "IT Support",
  "Business Development",
  "Data Science",
  "Accounting",
  "Construction",
  "Consulting",
  "Content Writing",
  "Hospitality",
  "Real Estate",
  "Public Relations",
  "Logistics",
  "Manufacturing",
];
