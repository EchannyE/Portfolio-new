import React from 'react';

const Button = ({ title, variant = 'primary', size = 'md', className, ...props }) => {
    // Base styles applied to all buttons
    let baseStyles = 'inline-flex items-center justify-center font-semibold rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';

    // Variant styles for different button types
    let variantStyles = '';
    switch (variant) {
        case 'primary':
            variantStyles = 'bg-yellow-500 text-white hover:bg-yellow-600 focus:ring-yellow-500';
            break;
        case 'outline':
            variantStyles = 'bg-transparent border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white focus:ring-yellow-500';
            break;
        case 'secondary':
            variantStyles = 'bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 focus:ring-gray-400';
            break;
        case 'danger':
            variantStyles = 'bg-red-500 text-white hover:bg-red-600 focus:ring-red-500';
            break;
        default:
            variantStyles = 'bg-yellow-500 text-white hover:bg-yellow-600 focus:ring-yellow-500';
    }

    // Size styles for different button sizes
    let sizeStyles = '';
    switch (size) {
        case 'sm':
            sizeStyles = 'px-3 py-1.5 text-sm';
            break;
        case 'md':
            sizeStyles = 'px-4 py-2 text-base';
            break;
        case 'lg':
            sizeStyles = 'px-6 py-3 text-lg';
            break;
        default:
            sizeStyles = 'px-4 py-2 text-base';
    }

    // Combine all styles with any custom className provided
    const buttonClasses = `${baseStyles} ${variantStyles} ${sizeStyles} ${className}`;

    return (
        <button className={buttonClasses} {...props}>
            {title}
        </button>
    );
};

export default Button;
