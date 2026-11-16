import { SolutionDetailTemplate } from './SolutionDetailTemplate'
import { solutionsData } from '../../data/solutions'

export function MarketingTeamsPage() {
  return <SolutionDetailTemplate solution={solutionsData['marketing-teams']} />
}
