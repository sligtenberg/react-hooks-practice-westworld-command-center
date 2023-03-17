import React, { createContext, useState } from "react"

// create the context object
const SelectedHostContext = createContext()
const AreasContext = createContext()

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

// create the context provider (component)
function AreasProvider({ children }) {
    const [areas, setAreas] = useState(null)
    const value = [areas, setAreas]
    return (
        <AreasContext.Provider value={value}>
            {children}
        </AreasContext.Provider>
    )
}

// export
export { SelectedHostContext, AreasContext, SelectedHostProvider, AreasProvider }

// ReactDOM.render(
//    <SelectedHostdProvider>
//      <App />
//    </SelectedHostdProvicer>