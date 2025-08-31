'use client';

import React, { useRef, useCallback, useEffect } from 'react';
import ReactFlow, {
    ReactFlowProvider,
    useReactFlow,
    Controls,
    Background,
    MiniMap,
} from 'reactflow';
import 'reactflow/dist/style.css';

import { useFlowStore } from '@/store/flowstore';
import { useToast } from '@/hooks/use-toast';
import Header from './ui/Header';
import NodesPanel from './panels/NodesPanel';
import SettingsPanel from './panels/SettingsPanel';
import TextNode from './nodes/TextNodes';

const nodeTypes = { textNode: TextNode };

const Builder: React.FC = () => {
    const reactFlowWrapper = useRef<HTMLDivElement>(null);
    const { toast } = useToast();
    const {
        nodes,
        edges,
        onNodesChange,
        onEdgesChange,
        onConnect,
        selectedNode,
        setSelectedNode,
        addNode,
        setReactFlowInstance,
    } = useFlowStore();

    const reactFlowInstance = useReactFlow();

    useEffect(() => {
        if (reactFlowInstance) {
            setReactFlowInstance(reactFlowInstance);
        }
    }, [reactFlowInstance, setReactFlowInstance]);

    const onNodeClick = useCallback((_: React.MouseEvent, node: any) => {
        setSelectedNode(node);
    }, [setSelectedNode]);

    const onPaneClick = useCallback(() => {
        setSelectedNode(null);
    }, [setSelectedNode]);

    const onDragOver = useCallback((event: React.DragEvent) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    }, []);

    const onDrop = useCallback(
        (event: React.DragEvent) => {
            event.preventDefault();

            const type = event.dataTransfer.getData('application/reactflow');
            if (typeof type === 'undefined' || !type) {
                return;
            }

            if (!reactFlowWrapper.current) return;

            const position = reactFlowInstance.screenToFlowPosition({
                x: event.clientX,
                y: event.clientY,
            });

            const newNode = {
                id: `${type}-${Date.now()}`,
                type,
                position,
                data: { text: `New ${type}` },
            };

            addNode(newNode);
        },
        [reactFlowInstance, addNode]
    );

    const onSave = () => {
        const targetNodes = new Set(edges.map((edge) => edge.target));
        const nodesWithEmptyTargets = nodes.filter((node) => !targetNodes.has(node.id));

        if (nodes.length > 1 && nodesWithEmptyTargets.length > 1) {
            toast({
                title: 'Error: Cannot Save Flow',
                description: 'More than one node has an empty target handle. Please connect all nodes.',
                variant: 'destructive',
            });
        } else {
            toast({
                title: 'Success!',
                description: 'Flow saved successfully.',
            });
            console.log('Flow saved:', { nodes, edges });
        }
    };

    return (
        <div className="flex flex-col h-screen w-screen bg-background">
            <Header onSave={onSave} />
            <div className="flex flex-grow h-[calc(100vh-57px)]">
                <div className="flex-grow h-full" ref={reactFlowWrapper}>
                    <ReactFlow
                        nodes={nodes}
                        edges={edges}
                        onNodesChange={onNodesChange}
                        onEdgesChange={onEdgesChange}
                        onConnect={onConnect}
                        onNodeClick={onNodeClick}
                        onPaneClick={onPaneClick}
                        onDrop={onDrop}
                        onDragOver={onDragOver}
                        nodeTypes={nodeTypes}
                        fitView
                        className="bg-background"
                    >
                        <Controls />
                        <MiniMap />
                        <Background gap={12} size={1} />
                    </ReactFlow>
                </div>
                <aside className="w-[350px] bg-card border-l shadow-lg">
                    {selectedNode ? <SettingsPanel /> : <NodesPanel />}
                </aside>
            </div>
        </div>
    );
};

const FlowBuilderProvider = () => (
    <ReactFlowProvider>
        <Builder />
    </ReactFlowProvider>
);

export default FlowBuilderProvider;
