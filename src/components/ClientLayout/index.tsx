"use client";
import Navbar from "@/components/Navbar";

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Navbar />
            {children}
        </>
    );
};

export default ClientLayout;
