import { SolutionDetailTemplate } from './SolutionDetailTemplate'
import { solutionsData } from '../../data/solutions'

export function SalesTeamsPage() {
  return <SolutionDetailTemplate solution={solutionsData['sales-teams']} />
}
