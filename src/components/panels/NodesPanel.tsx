'use client';

import { MessageSquare } from 'lucide-react';

const NodesPanel = () => {
    const onDragStart = (event: React.DragEvent, nodeType: string) => {
        event.dataTransfer.setData('application/reactflow', nodeType);
        event.dataTransfer.effectAllowed = 'move';
    };

    return (
        <div className="p-4">
            <h3 className="text-lg font-semibold mb-4 text-center">Nodes</h3>
            <div
                className="flex flex-col items-center p-4 border-2 border-dashed border-primary rounded-lg cursor-grab hover:bg-primary/10 transition-colors"
                onDragStart={(event) => onDragStart(event, 'textNode')}
                draggable
            >
                <MessageSquare className="h-8 w-8 text-primary mb-2" />
                <span className="text-sm font-medium text-primary">Message</span>
            </div>
            <p className="text-xs text-muted-foreground mt-4 text-center">
                Drag and drop a node to the canvas to get started.
            </p>
        </div>
    );
};

export default NodesPanel;
