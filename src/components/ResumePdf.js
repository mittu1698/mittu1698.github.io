import React, {useState} from 'react';
import {Document, Page} from 'react-pdf/dist/umd/entry.webpack';
import resumePath from "./../assets/docs/resume.pdf"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";

function ResumePdf(props) {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    const onDocumentLoadSuccess = ({numPages}) => {
        setNumPages(numPages);
    }

    return (
        <div className="resume-pdf-wrapper">
            <div className="resume-pdf-main">
                <Document
                    file={resumePath}
                    onLoadSuccess={onDocumentLoadSuccess}
                >
                    <Page pageNumber={pageNumber}/>
                </Document>
            </div>
            <div className="page-controls">
                <button type="button" className={pageNumber === 1 ? "disabled" : ""} onClick={()=>{
                    if(pageNumber !== 1){
                        setPageNumber(pageNumber-1);
                    }
                }} aria-label="Pdf previous page"><FontAwesomeIcon icon={faChevronLeft}/></button>
                <span>{pageNumber} of {numPages}</span>
                <button type="button" className={pageNumber === numPages ? "disabled" : ""} onClick={()=>{
                    if(pageNumber !== numPages){
                        setPageNumber(pageNumber+1);
                    }
                }} aria-label="Pdf next page"><FontAwesomeIcon icon={faChevronRight}/></button>
            </div>
        </div>
    );
}

export default ResumePdf;