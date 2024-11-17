"use client"
import { Dropdown } from "flowbite-react";
export const UserDropDown = () => {
    return (
        <Dropdown label={
            <img
                width={500}
                height={500}
                tabIndex={0}
                id="dropdown"
                className="size-10 rounded-full bg-slate-500 object-cover"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop"
                alt="avatar navigate ui"
            />
        } 
        >
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
    )
}
