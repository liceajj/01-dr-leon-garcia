import { useState, useRef, useEffect } from 'react';
import { FaWhatsapp, FaBriefcaseMedical, FaPhone } from 'react-icons/fa';
import EmergencyModal from './EmergencyModal';
import { createBlendy } from 'blendy'; 
import '../styles/FloatingButtons.css';

function FloatingButtons() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isBlendyReady, setIsBlendyReady] = useState(false);
    const blendyInstance = useRef(null);

    useEffect(() => {
        blendyInstance.current = createBlendy({ animation: 'dynamic' });
        
        setTimeout(() => {
            setIsBlendyReady(true);
        }, 300); 
    }, []);

    const openModal = () => {
        if (!isBlendyReady) return; 

        setIsModalOpen(true);

        requestAnimationFrame(() => {
            blendyInstance.current?.toggle('emergencyModal');
        });
    };

    const closeModal = () => {
        if (!isBlendyReady) return;

        blendyInstance.current?.untoggle('emergencyModal', () => {
            setIsModalOpen(false);
        });
    };

    return (
        <>
            <div className="floating-buttons">
                <div
                    className="floating-button emergency-button"
                    data-blendy-from="emergencyModal"
                    onClick={openModal}
                >
                    <FaBriefcaseMedical className="icon" />
                    <span className="button-text">Urgencias</span>
                </div>
                <a href="tel:+525535176177" className="floating-button phone-button">
                    <FaPhone className="icon" />
                    <span className="button-text">Llamar por teléfono</span>
                </a>
                <a
                    href="https://wa.me/525535176177"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="floating-button whatsapp-button"
                >
                    <FaWhatsapp className="icon" />
                    <div className="notification-badge">1</div>
                </a>
            </div>
            <EmergencyModal isOpen={isModalOpen} closeModal={closeModal} />
        </>
    );
}

export default FloatingButtons;
