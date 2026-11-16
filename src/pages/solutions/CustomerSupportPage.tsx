import { SolutionDetailTemplate } from './SolutionDetailTemplate'
import { solutionsData } from '../../data/solutions'

export function CustomerSupportPage() {
  return <SolutionDetailTemplate solution={solutionsData['customer-support']} />
}
