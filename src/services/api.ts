
const BASE_URL = "http://localhost:8010/api/v1";

// Define the endpoints as a constant object with specific types

// user auth endpoints
export const authEndpoints = {

    SEND_OTP_API: `${BASE_URL}/auth/sendotp`,
    SIGNUP_API: `${BASE_URL}/user/auth/create`,
    LOGIN_API: `${BASE_URL}/auth/login`,
    RESETPASSWORDTOKEN_API: `${BASE_URL}/auth/reset-password-token`,
    POST_UPDATE_PASSWORD_API: `${BASE_URL}/auth/updatePassword`,
    LOGOUT_API :`${BASE_URL}/auth/logout`,
} as const;                                 

export const userEndpoints = {
    PUT_EMAIL_USERNAME_API : `${BASE_URL}/user/user/edit`,
    CHANGE_USERNAME_API: `${BASE_URL}/user/changeusername`,
    CHANGE_EMAIL_API: `${BASE_URL}/user/changeemail`,
    CHANGE_PASSWORD_API: `${BASE_URL}/user/changepassword`,
    DELETE_ACCOUNT_API: `${BASE_URL}/user/deleteaccount`
} as const;

export const profileEndpoints = {

    PUT_PROFILE_API: `${BASE_URL}/college/profile/create`,
    GET_PROFILE_API: `${BASE_URL}/college/student/profile`,
    GET_USER_EXPERIENCE : `${BASE_URL}/user/user/experience`,
    GET_USER_PROJECT : `${BASE_URL}/user/user/project`,
    GET_USER_EDUCATION : `${BASE_URL}/user/user/education`,
    GET_USER_ACHIEVEMENT : `${BASE_URL}/user/user/achievement`,
    GET_USER_CERTIFICATE: `${BASE_URL}/user/user/certificate`
} as const;

export const profileUpdateEndpoints = {

    UPDATE_ABOUT_API :``,
    UPDATE_PROFILE_PICTURE_API: `${BASE_URL}/user/profile/update-profile-image`,
    UPDATE_SKILLS_API:``,
    UPDATE_LINKS_API:``,
    UPDATE_HOBBIES_API:``,
    //below ADD keywords is used because, we have to create education or update education and are not comprising in profile model
    ADD_EDUCATION_API :`${BASE_URL}/user/create/education`,
    ADD_EXPERIENCE_API:`${BASE_URL}/college/create/experience`,
    ADD_PROJECT_API:`${BASE_URL}/user/create/project`,
    ADD_CERTIFICATION_API:`${BASE_URL}/user/create/certification`,
    ADD_ACHIEVEMENT_API:`${BASE_URL}/user/create/achievement`,

    DELETE_USER_DETAILS_LIST : `${BASE_URL}/user/delete/user/details`,
    DELETE_EDUCATION_API :``,
    DELETE_EXPERIENCE_API:``,
    DELETE_PROJECT_API:``,
    DELETE_CERTIFICATION_API:``,
    DELETE_ACHIEVEMENT_API:``,
    
}


export const discussionEndpoints = {

    GET_ALL_DISCUSSION_API: `${BASE_URL}/user/user/discussion`,
    GET_DISCUSSION_DETAIL_API : `${BASE_URL}/discussion/getDiscussionByTitle`,
    POST_DISCUSSION_API : `${BASE_URL}/user/create/discussion`,
    UPDATE_DISCUSSION_API: `${BASE_URL}/discussion/updateDiscussion`,
    DELETE_DISCUSSION_API: `${BASE_URL}/discussion/deleteDiscussion`,
    // comments
    POST_COMMENT_API : `${BASE_URL}/discussion/discussionId/addComment`,
    POST_NESTED_COMMENT_API :`${BASE_URL}/discussion/discussionId/comment/addComment`,
    GET_COMMENT_API :`${BASE_URL}/discussion/discussionId/comment`,
} as const;

export const questionEndpoints = {

    GET_ALL_QUESTION_API: `${BASE_URL}/user/user/question`,
    GET_QUESTION_DETAIL_API:`${BASE_URL}/question/questionByID`,
    POST_QUESTION_API : `${BASE_URL}/user/create/question`,
    UPDATE_QUESTION_API: `${BASE_URL}/question/updateQuestion`,
    DELETE_QUESTION_API: `${BASE_URL}/question/deleteQuestion`,
} as const;

export const experienceEndpoints = {

    GET_ALL_EXPERIENCE_API: `${BASE_URL}/user/user/insight`,
    GET_EXPERIENCE_DETAIL_API :`${BASE_URL}/experience/experienceByID`,
    POST_EXPERIENCE_API : `${BASE_URL}/user/create/insight`,
    UPDATE_EXPERIENCE_API: `${BASE_URL}/experience/updateExperience`,
    DELETE_EXPERIENCE_API: `${BASE_URL}/experience/deleteExperience`,
} as const;

export const opportunityEndpoints = {

    GET_ALL_OPPORTUNITY_API: `${BASE_URL}/user/user/opportunity`,
    GET_OPPORTUNITY_DETAIL_API : `${BASE_URL}/oppportunity/opportunityByID`,
    POST_OPPORTUNITY_API : `${BASE_URL}/user/create/opportunity`,
    UPDATE_OPPORTUNITY_API: `${BASE_URL}/oppportunity/updateOppportunity`,
    DELETE_OPPORTUNITY_API: `${BASE_URL}/oppportunity/deleteOppportunity`,
} as const;

export const allUsersEndpoints ={

    GET_ALL_USER_API: `${BASE_URL}/college/getAllUsers`,
    // add filter endpoints on basis of profile created, department, course, branch, passoutyear, position, profession, name, username
} as const;

export const newsEndpoints = {

    POST_NEWS_API : `${BASE_URL}/news/addNews`,
    GET_ALL_NEWS_API: `${BASE_URL}/news`,
    GET_NEWS_DETAIL_API : `${BASE_URL}/news/newsId`,
    UPDATE_NEWS_API : `${BASE_URL}/news/newsId/update`,
    DELETE_NEWS_API : `${BASE_URL}/news/newsId/delete`,
}

export const superAdminEndpoints = {
    
    POST_UNIVERSITY_API:`${BASE_URL}/`,
    POST_COLLEGE_API:`${BASE_URL}/`,
    POST_DEPARTMENT_API:`${BASE_URL}/`,
    POST_COURSE_API:`${BASE_URL}/`,
    POST_BRANCH_API:`${BASE_URL}/`,

    GET_UNIVERSITY_API: `${BASE_URL}/university/get/university`,
    GET_COLLEGE_API: `${BASE_URL}/college/university/college`,
    GET_DEPARTMENT_API: `${BASE_URL}/college/college/department`,
    GET_COURSE_API: `${BASE_URL}/college/college/course`,
    GET_BRANCH_API: `${BASE_URL}/college/college/branch`,
}



// export const 
// Optionally, you can create a type for the endpoints if needed
export type AuthEndpoints = typeof authEndpoints;
export type UserEndpoints = typeof userEndpoints;
export type ProfileEndpoints = typeof profileEndpoints;
export type ExperienceEndpoints = typeof experienceEndpoints
export type DiscussionEndpoints = typeof discussionEndpoints;
export type QuestionEndpoints = typeof questionEndpoints;
export type OpportunityEndpoints  = typeof opportunityEndpoints;
export type AllUsersEndpoints = typeof allUsersEndpoints;
export type NewsEndpoints = typeof newsEndpoints;
export type SuperAdminEndpoints = typeof superAdminEndpoints
