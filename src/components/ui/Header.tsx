'use client';

import { Button } from '@/components/ui/button';

interface HeaderProps {
    onSave: () => void;
}

const Header: React.FC<HeaderProps> = ({ onSave }) => {
    return (
        <header className="flex justify-between items-center p-2 bg-card border-b shadow-sm z-10">
            <h1 className="text-lg font-semibold text-primary-foreground ml-4">BiteSpeed FlowBuilder</h1>
            <Button onClick={onSave} className="bg-accent hover:bg-accent/90 text-accent-foreground mr-4">
                Save Changes
            </Button>
        </header>
    );
};

export default Header;
