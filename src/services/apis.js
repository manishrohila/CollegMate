const BASE_URL = process.env.REACT_APP_BASE_URL

export const endpoints = {
    LOGIN_API: BASE_URL+`/auth/login`,
    SIGNUP_API: BASE_URL + "/auth/signup",
}

export const fileUploadEndpoints={
    LOCAL_FILE_UPLOAD:BASE_URL+"/upload/localFileUpload",
}