import React, { createContext, useState } from "react"

// create the context object
const SelectedHostContext = createContext()

// create the context provider (component)
function SelectedHostProvider({ children }) {
    const [selectedHost, setSelectedHost] = useState(null)
    const value = [selectedHost, setSelectedHost]
    return (
        <SelectedHostContext.Provider value={value}>
            {children}
        </SelectedHostContext.Provider>
    )
}

export { SelectedHostContext, SelectedHostProvider }
