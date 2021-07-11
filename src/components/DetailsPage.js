import React, {useState} from "react";
import Sidebar from "./Sidebar"
import Editor from "./Editor"

function DetailsPage() {

    const [currentTab, setCurrentTab] = useState(undefined);
    return (
        <>
            <Sidebar setCurrentTab={setCurrentTab}/>
            <Editor currentTab={currentTab}/>
        </>
    );
}

export default DetailsPage;