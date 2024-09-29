import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './css/custombutton.css';

interface Props {
    text: string;
    url: string;
}

const CustomButton: React.FC<Props> = ({ text, url }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(url);
    }

    return (
        <Button className='custom' variant="info" onClick={handleClick}>{text}</Button>
    );
};

export default CustomButton;
