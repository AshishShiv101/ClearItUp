import { useState, createContext } from "react";
import { useAuth, useClerk, useUser } from "@clerk/clerk-react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

const AppContextProvider = (props) => {
    const [credit, setCredit] = useState(false);
    const [image, setImage] = useState(false);
    const [resultImage, setResultImage] = useState(false);

    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    const navigate = useNavigate();
    const { getToken } = useAuth();
    const { isSignedIn } = useUser();
    const { openSignIn } = useClerk();

    const loadCreditsData = async () => {
        try {
            const token = await getToken();
            const { data } = await axios.get(`${backendUrl}/api/user/credits`, {
                headers: {
                    Authorization: `Bearer ${token}`, // ✅ Corrected
                },
            });

            if (data.success) {
                setCredit(data.credits);
                console.log(data.credits);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    };

    const removeBg = async (image) => {
        try {
            if (!isSignedIn) {
                return openSignIn();
            }

            setImage(image);
            setResultImage(false);
            navigate("/result");

            const token = await getToken();
            const formData = new FormData();
            if (image) formData.append("image", image);

            const { data } = await axios.post(
                `${backendUrl}/api/image/remove-bg`,
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`, // ✅ Corrected
                        "Content-Type": "multipart/form-data",
                    },
                }
            );

            if (data.success) {
                setResultImage(data.resultImage);
                if (data.creditBalance !== undefined) {
                    setCredit(data.creditBalance);
                }
            } else {
                toast.error(data.message);
                if (data.creditBalance !== undefined) {
                    setCredit(data.creditBalance);
                    if (data.creditBalance === 0) {
                        navigate("/buy");
                    }
                }
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    };
    const resetImageData = () => {
        setImage(false);
        setResultImage(false);
    };
    const value = {
        credit,
        setCredit,
        loadCreditsData,
        backendUrl,
        image,
        setImage,
        removeBg,
        resultImage,
        setResultImage,
        resetImageData,
    };



    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;
