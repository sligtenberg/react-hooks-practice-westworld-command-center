import React, { createContext, useState } from "react"

// create the context object
const SelectedHostContext = createContext()

// create the context provider (component)
function SelectedHostProvider({ children }) {
    const [selectedHost, setSelectedHost] = useState(null)

    const value = [selectedHost, setSelectedHost]
    //console.log(selectedHost)
    
    return (
        <SelectedHostContext.Provider value={value}>
            {children}
        </SelectedHostContext.Provider>
    )
}

// export
export { SelectedHostContext, SelectedHostProvider }

// ReactDOM.render(
//    <SelectedHostdProvider>
//      <App />
//    </SelectedHostdProvicer>