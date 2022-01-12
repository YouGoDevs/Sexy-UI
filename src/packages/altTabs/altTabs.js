import React, { useState } from 'react'

export const AltTabs = ({children}) => {
    const [activeTab, setActiveTab] = useState(null);
    const [content, setContent] = useState(null);

    if (!children) return null;
    
    return (
        <div>
            {children}
        </div>
    )
}
