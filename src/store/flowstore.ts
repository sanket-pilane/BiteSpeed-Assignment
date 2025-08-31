"use client";

import { create } from "zustand";
import {
  Connection,
  Edge,
  EdgeChange,
  Node,
  NodeChange,
  addEdge,
  OnNodesChange,
  OnEdgesChange,
  OnConnect,
  applyNodeChanges,
  applyEdgeChanges,
  ReactFlowInstance,
} from "reactflow";

const initialNodes: Node[] = [
  {
    id: "1",
    type: "textNode",
    data: { text: "Welcome! This is a text node." },
    position: { x: 250, y: 5 },
  },
];

type FlowState = {
  nodes: Node[];
  edges: Edge[];
  selectedNode: Node | null;
  reactFlowInstance: ReactFlowInstance | null;
  onNodesChange: OnNodesChange;
  onEdgesChange: OnEdgesChange;
  onConnect: OnConnect;
  addNode: (node: Node) => void;
  updateNodeText: (nodeId: string, text: string) => void;
  setSelectedNode: (node: Node | null) => void;
  setReactFlowInstance: (instance: ReactFlowInstance | null) => void;
};

export const useFlowStore = create<FlowState>((set, get) => ({
  nodes: initialNodes,
  edges: [],
  selectedNode: null,
  reactFlowInstance: null,

  onNodesChange: (changes: NodeChange[]) => {
    set({
      nodes: applyNodeChanges(changes, get().nodes),
    });
  },

  onEdgesChange: (changes: EdgeChange[]) => {
    set({
      edges: applyEdgeChanges(changes, get().edges),
    });
  },

  onConnect: (connection: Connection) => {
    const hasExistingConnection = get().edges.some(
      (edge) =>
        edge.source === connection.source &&
        edge.sourceHandle === connection.sourceHandle
    );

    if (hasExistingConnection) {
      console.warn("Source handle can only have one outgoing edge.");
      return;
    }

    set({
      edges: addEdge({ ...connection, animated: true }, get().edges),
    });
  },

  addNode: (node: Node) => {
    set({
      nodes: get().nodes.concat(node),
    });
  },

  updateNodeText: (nodeId: string, text: string) => {
    let updatedNode: Node | null = null;
    const newNodes = get().nodes.map((node) => {
      if (node.id === nodeId) {
        const newNode = { ...node, data: { ...node.data, text } };
        updatedNode = newNode;
        return newNode;
      }
      return node;
    });

    set({
      nodes: newNodes,
      selectedNode: updatedNode ? { ...updatedNode } : get().selectedNode,
    });
  },

  setSelectedNode: (node: Node | null) => {
    set({ selectedNode: node });
  },

  setReactFlowInstance: (instance: ReactFlowInstance | null) => {
    set({ reactFlowInstance: instance });
  },
}));
