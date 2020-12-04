import React from 'react'
import { Icon } from '@iconify/react'
import LocationIcon from '@iconify/icons-mdi/alert-circle'

const Header = () => {
    return (
        <header className="header">
            <h1>
                <Icon icon={LocationIcon} /> Potholes Tracker (for Goverment only)
            </h1>
        </header>
    )
}

export default Header
