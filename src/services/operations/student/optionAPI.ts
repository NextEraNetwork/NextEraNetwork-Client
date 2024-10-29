import { AppDispatch } from '@/reducer/store';
import { setBranch, setColleges, setCourses, setDepartments, setUniversities } from '@/reducer/studentSlices/optionSlice';
import { apiConnector } from '@/services/apiConnector';
import { superAdminEndpoints } from '@/services/api';
import { toast } from 'react-toastify';

const {
    GET_UNIVERSITY_API,
    GET_COLLEGE_API,
    GET_DEPARTMENT_API,
    GET_COURSE_API,
    GET_BRANCH_API
} = superAdminEndpoints;

interface University {
    _id : string;
    universityName: string;
}

interface College {
    _id:string;
    collegeName:string;
}

interface Department{
    _id:string;
    departmentName:string;
}

interface Course {
    _id:string;
    courseName:string;
}

interface Branch{
    _id:string;
    branchName:string;
}

export const fetchUniversities = () => async (dispatch: AppDispatch) => {

    try {

        const response = await apiConnector({
            method: 'GET',
            url: GET_UNIVERSITY_API,

        });
        // console.log("Full response of university:", response.data);

        // Check if response status is OK (200)
        if (response && response.data.success === true && response.data) {

            // Check if the response structure matches the expected format
            if (response.data.success && Array.isArray(response.data.data)) {
                const universities = response.data.data;
                // formatin according to options displayed
                const formattedUniversities = universities.map((university: University) => ({
                    value: university._id,
                    label: university.universityName
                }));
                dispatch(setUniversities(formattedUniversities));
                // toast.success("Universities fetched successfully");
            } else {
                console.error("Unexpected response structure:", response.data);
                toast.error("Failed to fetch universities. Invalid response structure.");
            }
        } else {
            console.error("Unexpected response status or no data:", response);
            toast.error("Failed to fetch universities. Please try again.");
        }
    } catch (error) {
        // Log the error for debugging purposes
        console.error("Error while fetching universities:", error);
        toast.error("An error occurred while fetching universities.");
    }

}

export const fetchColleges = (university_id: string) => async (dispatch: AppDispatch) => {
    try {
        const url = GET_COLLEGE_API + "/" + university_id;
        const response = await apiConnector({
            method: 'GET',
            url: url,
        });
        console.log("Full response of college:", response.data.data);

        // Check if response status is OK (200)
        if (response.data.success === true && Array.isArray(response.data.data)) {

            if (response.data) {
                const colleges = response.data.data[0].college;

                console.log("colleges", colleges);

                if (colleges) {
                    const formattedColleges = colleges.map((college: College) => ({
                        value: college._id,
                        label: college.collegeName
                    }));

                    dispatch(setColleges(formattedColleges));
                } else {
                    console.error('No college data found');
                }

            } else {
                console.error('Data not found');
            }

        } else {
            console.log("Unexpected response status or no data:", response);
        }
    } catch (error) {
        // Log the error for debugging purposes
        console.log("Error while fetching universities:", error);
    }
}

export const fetchDepartment = (university_id: string, college_id: string) => async (dispatch: AppDispatch) => {
    try {
        const response = await apiConnector({
            method: 'GET',
            url: GET_DEPARTMENT_API,
            params: {
                university_id: university_id,
                college_id: college_id
            }
        });
        console.log("Full response of department:", response.data.data);

        // Check if response status is OK (200)
        if (response.data.success === true && Array.isArray(response.data.data)) {

            if (response.data) {
                const departments = response.data.data[0].dept;

                console.log("departments", departments);

                if (departments) {
                    const formattedDepartment = departments.map((department: Department) => ({
                        value: department._id,
                        label: department.departmentName
                    }));

                    dispatch(setDepartments(formattedDepartment));
                } else {
                    console.error('No departments data found');
                }

            } else {
                console.error('Data not found');
            }

        } else {
            console.log("Unexpected response status or no data:", response);
        }
    } catch (error) {
        // Log the error for debugging purposes
        console.log("Error while fetching universities:", error);
    }
}

export const fetchCourses = (university_id: string, college_id: string, dept_id: string) => async (dispatch: AppDispatch) => {
    try {
        const response = await apiConnector({
            method: 'GET',
            url: GET_COURSE_API,
            params: {
                university_id: university_id,
                college_id: college_id,
                dept_id: dept_id
            }
        });
        console.log("Full response of Courses:", response.data.data);

        // Check if response status is OK (200)
        if (response.data.success === true && Array.isArray(response.data.data)) {

            if (response.data) {
                const courses = response.data.data[0].Courses;

                console.log("Courses", courses);

                if (courses) {
                    const formattedCourses = courses.map((course: Course) => ({
                        value: course._id,
                        label: course.courseName
                    }));

                    dispatch(setCourses(formattedCourses));
                } else {
                    console.error('No courses  found');
                }

            } else {
                console.error('Data not found');
            }

        } else {
            console.log("Unexpected response status or no data:", response);
        }
    } catch (error) {
        // Log the error for debugging purposes
        console.log("Error while fetching universities:", error);
    }
}

export const fetchBranches = (university_id: string, college_id: string, dept_id: string, course_id: string) => async (dispatch: AppDispatch) => {
    try {
        const response = await apiConnector({
            method: 'GET',
            url: GET_BRANCH_API,
            params: {
                university_id: university_id,
                college_id: college_id,
                dept_id: dept_id,
                course_id: course_id
            }
        });
        console.log("Full response of Branches:", response.data.data);

        // Check if response status is OK (200)
        if (response.data.success === true && Array.isArray(response.data.data)) {
            if (response.data) {
                const branches = response.data.data[0].branch;

                console.log("branches", branches);

                if (branches) {
                    const formattedBranches = branches.map((branch: Branch) => ({
                        value: branch._id,
                        label: branch.branchName
                    }));

                    console.log("branchesbranches", formattedBranches)
                    dispatch(setBranch(formattedBranches));
                } else {
                    console.error('No branch found');
                }

            } else {
                console.error('Data not found');
            }

        } else {
            console.log("Unexpected response status or no data:", response);
        }
    } catch (error) {
        // Log the error for debugging purposes
        console.log("Error while fetching universities:", error);
    }
}
