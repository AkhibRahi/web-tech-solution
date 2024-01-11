// components/WhatsAppButton.js
import React from 'react';
import WhatsAppWidget from 'react-whatsapp-widget';
import 'react-whatsapp-widget/dist/index.css'; // Import the styles

const WhatsAppButton = () => {
    return (
        <>
            <WhatsAppWidget
                phoneNumber={'8688284092'}
                textMessage={'Hamara message'}
                companyName="Your Company Name" // Replace with your company name
            />
        </>
    );
};

export default WhatsAppButton;
