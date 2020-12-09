import React, { createContext, useEffect, useState } from 'react';
import { db } from '../config/firebase'

export const RepoContext = createContext();


export const ReportContextProvider = (props) => {
    const [reports, setreports] = useState([])

    useEffect(() => {
        db.collection('reports').onSnapshot((snapshot) => {
            const NewReport = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }))
            setreports(NewReport)
        })
    }, [])

    return (
        <RepoContext.Provider value={{ reports }}>
            {props.children}
        </RepoContext.Provider>
    )
}

// export default ReportContextProvider;