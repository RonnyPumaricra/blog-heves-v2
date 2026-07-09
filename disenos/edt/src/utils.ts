import { WBSNode, ProjectStats } from './types';

/**
 * Recursively calculates aggregated budget, hours, and progress for a node.
 * If the node is a leaf, it returns its own values.
 * If it has children, it sums their budgets and hours, and computes a progress weighted by hours.
 */
export function getNodeAggregates(
  nodes: Record<string, WBSNode>,
  id: string,
  autoAggregate: boolean = true
): { budget: number; hours: number; progress: number; isLeaf: boolean } {
  const node = nodes[id];
  if (!node) return { budget: 0, hours: 0, progress: 0, isLeaf: true };

  const children = Object.values(nodes).filter((n) => n.parentId === id);
  if (children.length === 0 || !autoAggregate) {
    return {
      budget: node.budget || 0,
      hours: node.hours || 0,
      progress: node.progress || 0,
      isLeaf: children.length === 0,
    };
  }

  let totalBudget = 0;
  let totalHours = 0;
  let weightedProgressSum = 0;

  children.forEach((child) => {
    const agg = getNodeAggregates(nodes, child.id, autoAggregate);
    totalBudget += agg.budget;
    totalHours += agg.hours;
    weightedProgressSum += agg.progress * (agg.hours || 1);
  });

  const calculatedHours = totalHours;
  const calculatedProgress =
    totalHours > 0
      ? Math.round(weightedProgressSum / totalHours)
      : children.length > 0
      ? Math.round(children.reduce((acc, c) => acc + (nodes[c.id].progress || 0), 0) / children.length)
      : 0;

  return {
    budget: totalBudget,
    hours: calculatedHours,
    progress: Math.min(100, Math.max(0, calculatedProgress)),
    isLeaf: false,
  };
}

/**
 * Calculates project-wide statistics
 */
export function calculateProjectStats(
  nodes: Record<string, WBSNode>,
  autoAggregate: boolean = true
): ProjectStats {
  const rootNodes = Object.values(nodes).filter((n) => n.parentId === null);
  
  let totalBudget = 0;
  let totalHours = 0;
  let weightedProgressSum = 0;
  const totalNodes = Object.keys(nodes).length;

  if (rootNodes.length === 0) {
    return { totalNodes: 0, totalBudget: 0, totalHours: 0, averageProgress: 0, maxDepth: 0, nodesPerLevel: {} };
  }

  // Aggregate values at root node level
  rootNodes.forEach((root) => {
    const agg = getNodeAggregates(nodes, root.id, autoAggregate);
    totalBudget += agg.budget;
    totalHours += agg.hours;
    weightedProgressSum += agg.progress * (agg.hours || 1);
  });

  const averageProgress =
    totalHours > 0
      ? Math.round(weightedProgressSum / totalHours)
      : rootNodes.length > 0
      ? Math.round(rootNodes.reduce((acc, r) => acc + (nodes[r.id].progress || 0), 0) / rootNodes.length)
      : 0;

  // Calculate depths and levels
  const levels: Record<number, number> = {};
  let maxDepth = 0;

  Object.keys(nodes).forEach((id) => {
    const depth = getNodeDepth(nodes, id);
    maxDepth = Math.max(maxDepth, depth);
    levels[depth] = (levels[depth] || 0) + 1;
  });

  return {
    totalNodes,
    totalBudget,
    totalHours,
    averageProgress: Math.min(100, Math.max(0, averageProgress)),
    maxDepth,
    nodesPerLevel: levels,
  };
}

/**
 * Calculates the depth of a node in the tree (0 for root, 1 for level 1, etc.)
 */
export function getNodeDepth(nodes: Record<string, WBSNode>, id: string): number {
  let depth = 0;
  let current = nodes[id];
  while (current && current.parentId) {
    depth++;
    current = nodes[current.parentId];
  }
  return depth;
}

/**
 * Recursively deletes a node and all its descendants.
 */
export function deleteNodeAndDescendants(
  nodes: Record<string, WBSNode>,
  idToDelete: string
): Record<string, WBSNode> {
  const nextNodes = { ...nodes };
  
  // Find all descendant IDs recursively
  const getDescendantIds = (parentId: string): string[] => {
    const children = Object.values(nextNodes).filter((n) => n.parentId === parentId);
    return [
      parentId,
      ...children.flatMap((child) => getDescendantIds(child.id)),
    ];
  };

  const idsToRemove = getDescendantIds(idToDelete);
  idsToRemove.forEach((id) => {
    delete nextNodes[id];
  });

  return nextNodes;
}

/**
 * Gets a clean list of direct children sorted by order index.
 */
export function getSortedChildren(
  nodes: Record<string, WBSNode>,
  parentId: string | null
): WBSNode[] {
  return Object.values(nodes)
    .filter((n) => n.parentId === parentId)
    .sort((a, b) => a.order - b.order);
}

/**
 * Returns a list of parent nodes from the node up to the root (bread-crumbs path)
 */
export function getNodePath(nodes: Record<string, WBSNode>, id: string): WBSNode[] {
  const path: WBSNode[] = [];
  let current = nodes[id];
  while (current) {
    path.unshift(current);
    if (!current.parentId) break;
    current = nodes[current.parentId];
  }
  return path;
}

/**
 * Generates a unique, short ID
 */
export function generateId(): string {
  return 'node_' + Math.random().toString(36).substring(2, 11);
}

/**
 * Calculates standard project WBS/EDT outline numbering codes recursively
 */
export function getOutlineCodes(nodes: Record<string, WBSNode>): Record<string, string> {
  const codes: Record<string, string> = {};
  
  const rootNodes = Object.values(nodes)
    .filter((n) => n.parentId === null)
    .sort((a, b) => a.order - b.order);
  
  const assignCode = (nodeId: string, parentCode: string) => {
    codes[nodeId] = parentCode;
    const children = Object.values(nodes)
      .filter((n) => n.parentId === nodeId)
      .sort((a, b) => a.order - b.order);
      
    children.forEach((child, index) => {
      const childCode = parentCode ? `${parentCode}.${index + 1}` : `${index + 1}`;
      assignCode(child.id, childCode);
    });
  };
  
  rootNodes.forEach((root, index) => {
    const rootCode = rootNodes.length > 1 ? `${index + 1}` : '1';
    assignCode(root.id, rootCode);
  });
  
  return codes;
}

