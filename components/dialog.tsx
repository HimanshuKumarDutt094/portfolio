'use client'

import React, { useRef, useEffect } from 'react';

interface DialogProps {
    url: string;
    onClose: () => void;
}

const Dialog: React.FC<DialogProps> = ({ url, onClose }) => {
    const dialogRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        const dialog = dialogRef.current;
        if (dialog) {
            dialog.showModal();
        }
        return () => {
            if (dialog && dialog.open) {
                dialog.close();
            }
        };
    }, []);

    const handleClose = () => {
        if (dialogRef.current) {
            dialogRef.current.close();
        }
        onClose();
    };

    return (
        <dialog
            ref={dialogRef}
            className="fixed inset-0 p-4 bg-black bg-opacity-50"
            style={{ width: '70vw', height: '70vh' }}
        >
            <div className="w-full h-full bg-white rounded-lg shadow-xl flex flex-col">
                <div className="flex justify-between items-center p-4 border-b">
                    <h2 className="text-xl font-bold">Project Preview</h2>
                    <button
                        onClick={handleClose}
                        className="text-gray-500 hover:text-gray-700"
                    >
                        Close
                    </button>
                </div>
                <div className="flex-grow overflow-hidden">
                    <div style={{
                        width: '100%',
                        height: '100%',
                        overflow: 'hidden',
                        position: 'relative',
                    }}>
                        <iframe
                            src={url}
                            style={{
                                position: 'absolute',
                                top: '0',
                                left: '0',
                                width: '166.67%',  // 100% / 0.6
                                height: '166.67%', // 100% / 0.6
                                transform: 'scale(0.6)',
                                transformOrigin: '0 0',
                                border: 'none',
                            }}
                            title="Project Preview"
                        />
                    </div>
                </div>
            </div>
        </dialog>
    );
};

export default Dialog;