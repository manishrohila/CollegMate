import { fileUploadEndpoints } from "../apis";
import { apiConnector } from "../apiConnector";
import { toast } from "react-hot-toast";

const { LOCAL_FILE_UPLOAD } = fileUploadEndpoints;

export function localfileUpload(formData) {
    return async (dispatch) => {
        try {
            const uploadFormData = new FormData();

            Object.keys(formData).forEach((key) => {
                uploadFormData.append(key, formData[key]);
            });

            const response = await apiConnector("POST", LOCAL_FILE_UPLOAD, uploadFormData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            console.log("local file upload api response:", response);

            toast.success("File uploaded successfully");
        } catch (error) {
            console.error("Error uploading file:", error);
            toast.error("File upload failed");
        }
    }

}