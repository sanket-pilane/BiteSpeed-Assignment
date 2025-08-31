'use client';

import { Handle, Position, NodeProps } from 'reactflow';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { MessageSquare } from 'lucide-react';
import { useFlowStore } from '@/store/flowstore';

function TextNode({ id, data, selected }: NodeProps<{ text: string }>) {
    const { selectedNode } = useFlowStore();
    const isSelected = selectedNode?.id === id || selected;

    return (
        <Card className={`w-64 shadow-md ${isSelected ? 'border-primary ring-2 ring-primary' : ''}`}>
            <CardHeader className="flex flex-row items-center justify-between p-2 bg-gray-100 rounded-t-lg border-b">
                <div className="flex items-center gap-2">
                    <MessageSquare className="h-4 w-4" />
                    <CardTitle className="text-sm font-semibold">Send Message</CardTitle>
                </div>
            </CardHeader>
            <CardContent className="p-3">
                <p className="text-sm text-gray-700 break-words">{data.text || 'Enter message text...'}</p>
            </CardContent>
            <Handle type="target" position={Position.Left} className="!bg-primary" />
            <Handle type="source" position={Position.Right} className="!bg-primary" />
        </Card>
    );
}

export default TextNode;
