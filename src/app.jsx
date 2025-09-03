import Tree from "react-d3-tree";
import "./app.css";

const treeData = {};

export default function InteractiveTree() {
  return (
    <div style={{ width: "100vw", height: "100vh", background: "#fafafa" }}>
      <Tree
        data={treeData}
        orientation="vertical"
        pathFunc="step"
        translate={{ x: 600, y: 50 }}
        nodeSize={{ x: 200, y: 100 }}
        styles={{
          links: { stroke: "#cbd5e1", strokeWidth: 2 },
          nodes: {
            node: { circle: { fill: "#4f46e5", r: 10 } },
            leafNode: { circle: { fill: "#4f46e5", r: 8 } },
            text: { fill: "#111", fontSize: 12 },
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
