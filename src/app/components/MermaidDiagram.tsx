import { useEffect, useRef, useId } from 'react';
import mermaid from 'mermaid';

mermaid.initialize({
  startOnLoad: false,
  theme: 'default',
  securityLevel: 'loose',
  fontFamily: 'ui-sans-serif, system-ui, sans-serif',
  flowchart: {
    useMaxWidth: true,
    htmlLabels: true,
    curve: 'basis',
  },
});

interface MermaidDiagramProps {
  chart: string;
}

export default function MermaidDiagram({ chart }: MermaidDiagramProps) {
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const renderMermaid = async () => {
      ref.current!.innerHTML = '';
      try {
        const { svg } = await mermaid.render(
          `mermaid-${id.replace(/[^a-zA-Z0-9]/g, '')}`,
          chart,
        );
        ref.current!.innerHTML = svg;
      } catch (error) {
        console.error('Error rendering Mermaid diagram:', error);
        ref.current!.innerHTML = `<p class="text-red-500">Error al renderizar el diagrama</p>`;
      }
    };

    renderMermaid();
  }, [chart, id]);

  return (
    <div
      ref={ref}
      className="w-full overflow-x-auto py-4 flex justify-center"
    />
  );
}
