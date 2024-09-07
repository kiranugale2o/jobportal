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
