'use client';

import { useFlowStore } from '@/store/flowstore';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { ArrowLeft } from 'lucide-react';

const SettingsPanel = () => {
    const { selectedNode, updateNodeText, setSelectedNode } = useFlowStore();

    const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (selectedNode) {
            updateNodeText(selectedNode.id, event.target.value);
        }
    };

    if (!selectedNode) {
        return null;
    }

    return (
        <div className="flex flex-col h-full">
            <div className="flex items-center p-2 border-b">
                <Button variant="ghost" size="icon" onClick={() => setSelectedNode(null)}>
                    <ArrowLeft className="h-4 w-4" />
                </Button>
                <h3 className="flex-grow text-center font-semibold">Message Settings</h3>
            </div>
            <div className="flex-grow p-4 space-y-4 overflow-y-auto">
                <div>
                    <Label htmlFor="text-editor" className="text-sm font-medium text-gray-700">Text</Label>
                    <Textarea
                        id="text-editor"
                        value={selectedNode.data.text || ''}
                        onChange={handleTextChange}
                        className="mt-1"
                        rows={5}
                    />
                </div>
            </div>
        </div>
    );
};

export default SettingsPanel;
