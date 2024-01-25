import React from "react";
import { Select, Box } from 'theme-ui'

const SelectLang = () => {
    return (

        <Select defaultValue="Hello">
            <option>Hello</option>
            <option>Hi</option>
            <option>Beep</option>
            <option>Boop</option>
        </Select>
    );
}

export default SelectLang;