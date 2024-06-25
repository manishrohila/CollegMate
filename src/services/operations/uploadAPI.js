import { fileUploadEndpoints } from "../apis";
import { apiConnector } from "../apiConnector"
import { toast } from "react-hot-toast";
const { LOCAL_FILE_UPLOAD } = fileUploadEndpoints;


export function localfileUpload(data) {
    return async (dispatch) => {
        const toastId = toast.loading("Loading...")
        try {
            const response = await apiConnector("POST", LOCAL_FILE_UPLOAD, {
                data
            }, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            console.log("local file upload api response ....", response);
            if (!response.data.success) {
                throw new Error(response.data.message);
            }
            toast.success("file uploaded successfully");
            toast.dismiss(toastId);

        }
        catch (error) {
            toast.dismiss(toastId);
            console.log("file upload API error ", error.message);
            toast.error("File upload failed");
        }
    }
}