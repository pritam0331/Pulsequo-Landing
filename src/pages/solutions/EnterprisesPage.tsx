import { SolutionDetailTemplate } from './SolutionDetailTemplate'
import { solutionsData } from '../../data/solutions'

export function EnterprisesPage() {
  return <SolutionDetailTemplate solution={solutionsData['enterprises']} />
}
