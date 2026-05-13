import styled from '@emotion/styled'

interface SectionCardProps {
  title: string
  children: React.ReactNode
}

const Card = styled.div`
  background-color: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  padding: 1.5rem;

  & > h3:first-child {
    font-size: 1.25rem;
    font-weight: 700;
    color: #111827;
    margin: 0 0 0.75rem 0;
  }

  & p {
    color: #374151;
    margin: 0 0 0.75rem 0;
  }

  & p:last-of-type {
    margin-bottom: 0;
  }

  & ul {
    color: #374151;
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
    color: #111827;
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
