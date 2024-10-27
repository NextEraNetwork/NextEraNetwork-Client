
const BASE_URL = "http://localhost:8010/api/v1";

// Define the endpoints as a constant object with specific types
export const authEndpoints = {
    SEND_OTP_API: `${BASE_URL}/auth/sendotp`,
    SIGNUP_API: `${BASE_URL}/auth/signup`,
    LOGIN_API: `${BASE_URL}/auth/login`,
    RESETPASSWORDTOKEN_API: `${BASE_URL}/auth/reset-password-token`,
    RESETPASSWORD_API: `${BASE_URL}/auth/reset-password`,
    LOGOUT_API :`${BASE_URL}/logout`,
} as const;                                 // Use 'as const' to make the object properties readonly

export const userEndpoints = {
    CHANGE_USERNAME_API: `${BASE_URL}/user/changeusername`,
    CHANGE_EMAIL_API: `${BASE_URL}/user/changeemail`,
    CHANGE_PASSWORD_API: `${BASE_URL}/user/changepassword`,
    DELETE_ACCOUNT_API: `${BASE_URL}/user/deleteaccount`
} as const;

export const profileEndpoints = {
    PUT_PROFILE_API: `${BASE_URL}/user/create-profile`,
    GET_PROFILE_API: `${BASE_URL}/user/profile`,
    UPDATE_PROFILE_API: `${BASE_URL}/user/profile/update`,
    DELETE_PROFILE_API: `${BASE_URL}/user/profile/delete`,
    UPDATE_PROFILE_PICTURE_API: `${BASE_URL}/user/profile/update-profile-image`
} as const;

export const questionEndpoints = {
    GET_ALL_QUESTION_API: `${BASE_URL}/question`,
    POST_QUESTION_API : `${BASE_URL}/question/addQuestion`,
    UPDATE_QUESTION_API: `${BASE_URL}/question/updateQuestion`,
    DELETE_QUESTION_API: `${BASE_URL}/question/deleteQuestion`,
} as const;

export const experienceEndpoints = {
    GET_ALL_EXPERIENCE_API: `${BASE_URL}/experience`,
    POST_EXPERIENCE_API : `${BASE_URL}/experience/addExperience`,
    UPDATE_EXPERIENCE_API: `${BASE_URL}/experience/updateExperience`,
    DELETE_EXPERIENCE_API: `${BASE_URL}/experience/deleteExperience`,
} as const;

export const opportunityEndpoints = {
    GET_ALL_OPPORTUNITY_API: `${BASE_URL}/oppportunity`,
    POST_OPPORTUNITY_API : `${BASE_URL}/oppportunity/addOppportunity`,
    UPDATE_OPPORTUNITY_API: `${BASE_URL}/oppportunity/updateOppportunity`,
    DELETE_OPPORTUNITY_API: `${BASE_URL}/oppportunity/deleteOppportunity`,
} as const;

export const discussionEndpoints = {
    GET_ALL_DISCUSSION_API: `${BASE_URL}/discussion`,
    GET_DISCUSSION_DETAIL_API : `${BASE_URL}/discussion/getDiscussionByTitle`,
    POST_DISCUSSION_API : `${BASE_URL}/discussion/addDiscussion`,
    UPDATE_DISCUSSION_API: `${BASE_URL}/discussion/updateDiscussion`,
    DELETE_DISCUSSION_API: `${BASE_URL}/discussion/deleteDiscussion`,

    POST_COMMENT_API : `${BASE_URL}/discussion/discussionId/addComment`,
    POST_NESTED_COMMENT_API :`${BASE_URL}/discussion/discussionId/comment/addComment`,
    GET_COMMENT_API :`${BASE_URL}/discussion/discussionId/comment`,
} as const;

export const allUsersEndpoints ={
    GET_ALL_USER_API: `${BASE_URL}/allusers`,
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
