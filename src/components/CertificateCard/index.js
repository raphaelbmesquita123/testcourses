import React, { useState, useEffect } from 'react'



//styles
import { Container } from './styles'

export function CertificateCard() {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
      }
    
    return (
        <div>
            
        </div>
    )
}
