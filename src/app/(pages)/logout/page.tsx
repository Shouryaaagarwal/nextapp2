"use client";
import appwriteService from "@/appwrite/config";
import useAuth from "@/context/useAuth";
import { useRouter } from "next/navigation";
import React, {useEffect} from "react";

const LogoutPage = () => {
    const router = useRouter();
    const {setauthStatus} = useAuth();

    useEffect(() => {
        appwriteService.logout()
        .then(() => {
            setauthStatus(false);
            router.replace("/");
        })
    }, []);

    return(
        <></>
    )
}


export default LogoutPage;