export default function MoleculeBg() {
  const nodes = [
    { cx: 15, cy: 20 }, { cx: 30, cy: 10 }, { cx: 45, cy: 25 }, { cx: 60, cy: 15 },
    { cx: 75, cy: 30 }, { cx: 85, cy: 18 }, { cx: 20, cy: 45 }, { cx: 40, cy: 55 },
    { cx: 55, cy: 42 }, { cx: 70, cy: 58 }, { cx: 90, cy: 45 }, { cx: 10, cy: 70 },
    { cx: 25, cy: 80 }, { cx: 50, cy: 75 }, { cx: 65, cy: 85 }, { cx: 80, cy: 72 },
    { cx: 95, cy: 80 }, { cx: 35, cy: 90 }, { cx: 72, cy: 92 },
  ];
  const edges = [
    [0,1],[1,2],[2,3],[3,4],[4,5],[0,6],[2,8],[4,9],[5,10],
    [6,7],[7,8],[8,9],[9,10],[6,11],[7,12],[8,13],[9,14],[10,15],
    [11,12],[12,13],[13,14],[14,15],[15,16],[12,17],[14,18],[16,18],
  ];

  return (
    <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
      {edges.map(([a, b], i) => (
        <line key={i} x1={nodes[a].cx} y1={nodes[a].cy} x2={nodes[b].cx} y2={nodes[b].cy}
          stroke="#00C8FF" strokeWidth="0.3" />
      ))}
      {nodes.map((n, i) => (
        <circle key={i} cx={n.cx} cy={n.cy} r="1.2" fill="#00C8FF" opacity="0.8" />
      ))}
    </svg>
  );
}
