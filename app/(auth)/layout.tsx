import React from "react";


const Layout = ({children} : {children:React.ReactNode})=>{
    return (

        <div className=" flex-center min-h-screen w-full bg-primary-50 bg-dotted-pattern bg-fixed bg-center bg-cover">
            {
                children
            }
        </div>
    );
}

export default Layout;