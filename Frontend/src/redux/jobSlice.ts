import { IJob } from "@/Interfaces/job";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the JobState interface
interface JobState {
  allJobs: IJob[];
  allAdminJobs: IJob[];
  singleJob: IJob | null;
  searchJobByText: string;
  allAppliedJobs: IJob[];
  searchedQuery: string;
}

// Define the initial state
const initialState: JobState = {
  allJobs: [],
  allAdminJobs: [],
  singleJob: null,
  searchJobByText: "",
  allAppliedJobs: [],
  searchedQuery: "",
};

const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    // Update allJobs array
    setAllJobs: (state, action: PayloadAction<IJob[]>) => {
      state.allJobs = action.payload;
    },
    // Update singleJob object or set it to null
    setSingleJob: (state, action: PayloadAction<IJob | null>) => {
      state.singleJob = action.payload;
    },
    // Update allAdminJobs array
    setAllAdminJobs: (state, action: PayloadAction<IJob[]>) => {
      state.allAdminJobs = action.payload;
    },
    // Update searchJobByText string
    setSearchJobByText: (state, action: PayloadAction<string>) => {
      state.searchJobByText = action.payload;
    },
    // Update allAppliedJobs array
    setAllAppliedJobs: (state, action: PayloadAction<IJob[]>) => {
      state.allAppliedJobs = action.payload;
    },
    // Update searchedQuery string
    setSearchedQuery: (state, action: PayloadAction<string>) => {
      state.searchedQuery = action.payload;
    },
  },
});

// Export the actions
export const {
  setAllJobs,
  setSingleJob,
  setAllAdminJobs,
  setSearchJobByText,
  setAllAppliedJobs,
  setSearchedQuery,
} = jobSlice.actions;

// Export the reducer
export default jobSlice.reducer;
