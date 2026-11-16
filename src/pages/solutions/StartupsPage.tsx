import { SolutionDetailTemplate } from './SolutionDetailTemplate'
import { solutionsData } from '../../data/solutions'

export function StartupsPage() {
  return <SolutionDetailTemplate solution={solutionsData['startups']} />
}
