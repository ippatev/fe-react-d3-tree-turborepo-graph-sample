import React, { useRef } from 'react';
import ForceGraph2D from 'react-force-graph-2d';
import preactLogo from './assets/preact.svg';
import viteLogo from '/vite.svg';
import './app.css';

const treeData = {
  name: 'lk-general#build',
  attributes: { type: 'aggregator' },
  children: [
    {
      name: '@repo/budget-module#build',
      children: [
        { name: '@repo/eslint-config#build' },
        { name: '@repo/tailwind-config#build' },
        { name: '@repo/typescript-config#build' },
      ],
    },
    {
      name: '@repo/finance-module#build',
      children: [
        { name: '@repo/eslint-config#build' },
        { name: '@repo/tailwind-config#build' },
        { name: '@repo/typescript-config#build' },
      ],
    },
    {
      name: '@repo/mero-module#build',
      children: [
        { name: '@repo/eslint-config#build' },
        { name: '@repo/tailwind-config#build' },
        { name: '@repo/typescript-config#build' },
      ],
    },
    {
      name: '@repo/np-module#build',
      children: [
        { name: '@repo/eslint-config#build' },
        { name: '@repo/finance-module#build' },
        { name: '@repo/tailwind-config#build' },
        { name: '@repo/typescript-config#build' },
      ],
    },
    {
      name: '@repo/oks-module#build',
      children: [
        { name: '@repo/eslint-config#build' },
        { name: '@repo/tailwind-config#build' },
        { name: '@repo/typescript-config#build' },
      ],
    },
    {
      name: '@repo/oper-module#build',
      children: [
        { name: '@repo/eslint-config#build' },
        { name: '@repo/tailwind-config#build' },
        { name: '@repo/typescript-config#build' },
      ],
    },
    {
      name: '@repo/operinfo-module#build',
      children: [
        { name: '@repo/eslint-config#build' },
        { name: '@repo/tailwind-config#build' },
        { name: '@repo/typescript-config#build' },
      ],
    },
    {
      name: '@repo/rating-module#build',
      children: [
        { name: '@repo/eslint-config#build' },
        { name: '@repo/typescript-config#build' },
      ],
    },
    {
      name: '@repo/rivers-module#build',
      children: [
        { name: '@repo/eslint-config#build' },
        { name: '@repo/tailwind-config#build' },
        { name: '@repo/typescript-config#build' },
      ],
    },
    {
      name: '@repo/ship-module#build',
      children: [
        { name: '@repo/eslint-config#build' },
        { name: '@repo/tailwind-config#build' },
        { name: '@repo/typescript-config#build' },
      ],
    },
    {
      name: '@repo/team-module#build',
      children: [
        { name: '@repo/eslint-config#build' },
        { name: '@repo/tailwind-config#build' },
        { name: '@repo/typescript-config#build' },
      ],
    },
    {
      name: '@repo/ui#build',
      children: [
        { name: '@repo/eslint-config#build' },
        { name: '@repo/typescript-config#build' },
      ],
    },
    {
      name: '@repo/example-module#build',
      children: [
        { name: '@repo/eslint-config#build' },
        { name: '@repo/tailwind-config#build' },
        { name: '@repo/typescript-config#build' },
      ],
    },
    {
      name: '@repo/vdl-module#build',
      children: [
        { name: '@repo/eslint-config#build' },
        { name: '@repo/tailwind-config#build' },
        { name: '@repo/typescript-config#build' },
      ],
    },
    {
      name: '@repo/vp-mero-module#build',
      children: [
        { name: '@repo/eslint-config#build' },
        { name: '@repo/mero-module#build' },
        { name: '@repo/tailwind-config#build' },
        { name: '@repo/typescript-config#build' },
      ],
    },
    {
      name: '@repo/vp-module#build',
      children: [
        { name: '@repo/eslint-config#build' },
        { name: '@repo/tailwind-config#build' },
        { name: '@repo/typescript-config#build' },
      ],
    },
  ],
};

export default function InteractiveTree() {
  return (
    <div style={{ width: '100%', height: '100vh', background: '#fafafa' }}>
      <Tree
        data={treeData}
        orientation="vertical"
        pathFunc="elbow"
        translate={{ x: 600, y: 50 }}
        nodeSize={{ x: 200, y: 100 }}
        styles={{
          links: { stroke: '#cbd5e1', strokeWidth: 2 },
          nodes: {
            node: { circle: { fill: '#4f46e5', r: 10 } },
            leafNode: { circle: { fill: '#4f46e5', r: 8 } },
            text: { fill: '#111', fontSize: 12 },
          },
        }}
        collapsible={true} // узлы можно сворачивать
        zoomable={true}
      />
    </div>
  );
}

export function App() {
  return (
    <>
      <div>
        <InteractiveTree></InteractiveTree>
      </div>
    </>
  );
}
