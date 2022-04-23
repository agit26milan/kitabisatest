import React from 'react'
import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem, DropdownItemProps} from 'reactstrap'

type DropdownPropsArray = {
    data: object[],
    label?:string,
    onClick: (d:object) => void,
}


const DropdownComponent = (props: DropdownPropsArray) => {
    const {data, label, onClick} = props
    const [toggleDropdown, setToggleDropdown] = React.useState(false)

    const handleToggle = () => setToggleDropdown((prevState) => !prevState)

    return (
  <Dropdown toggle={handleToggle} isOpen={toggleDropdown} >
    <DropdownToggle caret>
        {label}
    </DropdownToggle>
    <DropdownMenu
    >
        {data.map((d:DropdownItemProps, index) => (
             <DropdownItem onClick={() => onClick(d)} key={index} >
             {d.label}
           </DropdownItem>
        ))}
    </DropdownMenu>
  </Dropdown>
    )
}

export default DropdownComponent