import React from 'react';

interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
            <main>
                {children}
            </main>
        </div>
    );
}
