"use client"

import { useState, useEffect } from "react"

export function CustomDropdown({ children, trigger }: { children: React.ReactNode; trigger: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(false)

    const toggleDropdown = () => {
        setIsOpen(!isOpen)
    }

    const handleClickOutside = (event) => {
        if (!event.target.closest(".dropdown")) {
            setIsOpen(false)
        }
    }

    useEffect(() => {
        document.addEventListener("click", handleClickOutside)
        return () => {
            document.removeEventListener("click", handleClickOutside)
        }
    }, [])

    return (
        <div className="dropdown relative inline-block">
            <div onClick={toggleDropdown}>{trigger}</div>
            {isOpen && (
                <div className="dropdown-content absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded shadow-lg z-10">
                    {children}
                </div>
            )}
        </div>
    )
}
