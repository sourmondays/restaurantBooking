import React from 'react'
import { Link } from "react-router-dom";

const Privacy = () => {
    return (
        <>
            <div>
                <h1 className="header text-center mt-5">Privacy Policy</h1>
                <p className="GDPRinfo w-50 p-4 mx-auto">
                <p className="mb-1">Svenska</p>
                Dataskyddsförordningen (GDPR, The General Data Protection Regulation) gäller i hela EU och har till syfte att skapa en enhetlig och likvärdig nivå för skyddet av personuppgifter så att det fria flödet av uppgifter inom Europa inte hindras. 
                <br/>
                Mycket i dataskyddsförordningen liknar de regler som fanns i personuppgiftslagen. Här nedan kan du läsa mer om dataskyddsförordningens delar. Vill du ha mer information om vad som gäller för vissa grupper och roller eller i olika situationer kan du hitta det under våra Vägledningar.
                <br/>
                <br/>
                <p className="mb-1">English</p>
                <p>The General Data Protection Regulation (GDPR) applies throughout the European Union and its purpose is to create a uniform and harmonised level for the protection of personal data so that the free movement of personal data within Europe is not hindered.
                <br/>
                Much of the General Data Protection Regulation is similar to the rules that were laid down in the Personal Data Act. You can read more about the various parts of the General Data Protection Regulation below. If you would like to know more about what applies for certain groups and roles or in different situations, you can find more information under our Guides</p>
                <div class="d-flex justify-content-center">
                 <Link to="/" > <button className="mt-3 btn btn-sm btn-dark align-center ">Back</button></Link>
                 </div>
                </p>

            </div>
        </>
    )
}

export default Privacy