import styled from '@emotion/styled'

interface SectionCardProps {
  title: string
  children: React.ReactNode
}

const Card = styled.div`
  background-color: var(--card);
  border: 1px solid var(--border);
  border-radius: 0.5rem;
  padding: 1.5rem;

  & > h3:first-child {
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--card-foreground);
    margin: 0 0 0.75rem 0;
  }

  & p {
    color: var(--muted-foreground);
    margin: 0 0 0.75rem 0;
  }

  & p:last-of-type {
    margin-bottom: 0;
  }

  & ul {
    color: var(--muted-foreground);
    margin: 0 0 0.5rem 1rem;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  & ul:last-of-type {
    margin-bottom: 0;
  }

  & li {
    margin: 0;
  }

  & h4 {
    font-size: 1rem;
    font-weight: 600;
    color: var(--card-foreground);
    margin: 0 0 0.5rem 0;
  }
`

export function SectionCard({ title, children }: SectionCardProps) {
  return (
    <Card>
      <h3>{title}</h3>
      {children}
    </Card>
  )
}
