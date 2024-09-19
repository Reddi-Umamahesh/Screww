import { IJob } from "@/Interfaces/job";

const randomJobs: IJob[] = [
  {
    _id: "1",
    title: "Electrician",
    description:
      "Provide electrical installations and repairs for residential and commercial properties.",
    fee: 300000,
    experience: 3,
    location: "Bangalore, India",
    jobCategory: "Electrical Services",
    company: {
      _id: "company1",
      name: "Bright Spark Electrics",
      userId: "user001",
      description: "Expert electricians for all your needs.",
      createdAt: "2023-01-01T10:00:00.000Z",
      updatedAt: "2023-01-02T10:00:00.000Z",
      __v: 0,
    },
    created_by: "user123",
    previousWorks: [],
  },
  {
    _id: "2",
    title: "Plumber",
    description:
      "Specialize in plumbing installations, maintenance, and repairs.",
    fee: 250000,
    experience: 4,
    location: "Mumbai, India",
    jobCategory: "Plumbing Services",
    company: {
      _id: "company2",
      name: "Swift Plumbing Solutions",
      userId: "user002",
      description: "Reliable plumbing services at your doorstep.",
      createdAt: "2023-01-03T10:00:00.000Z",
      updatedAt: "2023-01-04T10:00:00.000Z",
      __v: 0,
    },
    created_by: "user456",
    previousWorks: [],
  },
  {
    _id: "3",
    title: "Painter",
    description:
      "Provide professional painting services for interiors and exteriors.",
    fee: 150000,
    experience: 2,
    location: "Delhi, India",
    jobCategory: "Painting Services",
    company: {
      _id: "company3",
      name: "Vibrant Coatings",
      userId: "user003",
      description: "Transform your space with expert painting.",
      createdAt: "2023-01-05T10:00:00.000Z",
      updatedAt: "2023-01-06T10:00:00.000Z",
      __v: 0,
    },
    created_by: "user789",
    previousWorks: [],
  },
  {
    _id: "4",
    title: "Civil Engineer",
    description:
      "Design and oversee construction projects from inception to completion.",
    fee: 900000,
    experience: 5,
    location: "Chennai, India",
    jobCategory: "Engineering Services",
    company: {
      _id: "company4",
      name: "BuildRight Engineering",
      userId: "user004",
      description: "Your partner in structural integrity and design.",
      createdAt: "2023-01-07T10:00:00.000Z",
      updatedAt: "2023-01-08T10:00:00.000Z",
      __v: 0,
    },
    created_by: "user101",
    previousWorks: [],
  },
  {
    _id: "5",
    title: "Roofing Specialist",
    description:
      "Install and repair roofs for residential and commercial buildings.",
    fee: 400000,
    experience: 3,
    location: "Hyderabad, India",
    jobCategory: "Roofing Services",
    company: {
      _id: "company5",
      name: "TopTier Roofing",
      userId: "user005",
      description: "Quality roofing solutions that last.",
      createdAt: "2023-01-09T10:00:00.000Z",
      updatedAt: "2023-01-10T10:00:00.000Z",
      __v: 0,
    },
    created_by: "user202",
    previousWorks: [],
  },
  {
    _id: "6",
    title: "Tiler",
    description:
      "Expert in tile installations for bathrooms, kitchens, and other areas.",
    fee: 200000,
    experience: 2,
    location: "Pune, India",
    jobCategory: "Tiling Services",
    company: {
      _id: "company6",
      name: "Precision Tiling",
      userId: "user006",
      description: "Perfect finishes for every tile job.",
      createdAt: "2023-01-11T10:00:00.000Z",
      updatedAt: "2023-01-12T10:00:00.000Z",
      __v: 0,
    },
    created_by: "user303",
    previousWorks: [],
  },
  {
    _id: "7",
    title: "General Contractor",
    description:
      "Manage and coordinate construction projects from start to finish.",
    fee: 1000000,
    experience: 6,
    location: "Gurgaon, India",
    jobCategory: "Construction Services",
    company: {
      _id: "company7",
      name: "All-In-One Contractors",
      userId: "user007",
      description: "Comprehensive solutions for your construction needs.",
      createdAt: "2023-01-13T10:00:00.000Z",
      updatedAt: "2023-01-14T10:00:00.000Z",
      __v: 0,
    },
    created_by: "user404",
    previousWorks: [],
  },
];
export default randomJobs