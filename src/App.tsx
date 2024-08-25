import { Basics } from './components/basics'
import resume from './resume.json'
import type { JSONResume } from './types'

interface WorkExperience {
	name: string
	location: string
	description?: string
	position: string
	startDate: string
	endDate?: string
	summary: string
	highlights: string[]
	url?: string
}

interface Education {
	institution: string
	url: string
	area: string
	studyType: string
	startDate: string
	endDate: string
	score?: string
	courses: string[]
}

interface Skill {
	name: string
	level: string
	keywords: string[]
}

interface Language {
	language: string
	fluency: string
}

interface SectionProps {
	title: string
	children: unknown
}

const Section = ({ title, children }: SectionProps) => (
	<section className='mb-6'>
		<h2 className='text-xl font-semibold mb-3 border-b border-gray-300 pb-1'>
			{title}
		</h2>
		{children}
	</section>
)

interface EducationProps {
	items: Education[]
}

const Education = ({ items }: EducationProps) => (
	<Section title='EDUCATION'>
		{items.map((item, index) => (
			<div key={index} className='mb-4'>
				<p className='font-semibold'>
					{item.startDate} - {item.endDate} {item.studyType} in {item.area}
				</p>
				<p className='text-sm'>
					{item.institution} <span className='text-gray-600'>{item.score}</span>
				</p>
				{item.courses.map((course, i) => (
					<p key={i} className='text-sm mt-1'>
						{course}
					</p>
				))}
			</div>
		))}
	</Section>
)

interface ExperienceProps {
	items: WorkExperience[]
}

const Experience = ({ items }: ExperienceProps) => (
	<Section title='EXPERIENCE'>
		{items.map((item, index) => (
			<div key={index} className='mb-4'>
				<p className='font-semibold'>
					{item.startDate} - {item.endDate || 'Present'} {item.position}
				</p>
				<p className='text-sm'>
					{item.name} <span className='text-gray-600'>{item.location}</span>
				</p>
				<ul className='list-disc list-inside text-sm mt-1'>
					{item.highlights.map((highlight, i) => (
						<li key={i}>{highlight}</li>
					))}
				</ul>
			</div>
		))}
	</Section>
)

interface SkillsProps {
	items: Skill[]
}

const Skills = ({ items }: SkillsProps) => (
	<Section title='SKILLS'>
		{items.map((item, index) => (
			<div key={index} className='mb-2'>
				<p className='font-semibold'>{item.name}</p>
				<p className='text-sm'>{item.keywords.join(', ')}</p>
			</div>
		))}
	</Section>
)

interface LanguagesProps {
	items: Language[]
}

const Languages = ({ items }: LanguagesProps) => (
	<Section title='LANGUAGES'>
		<p className='text-sm'>
			{items.map((item, index) => (
				<span key={index}>
					{item.language} ({item.fluency})
					{index < items.length - 1 ? ' | ' : ''}
				</span>
			))}
		</p>
	</Section>
)

const Resume = ({ basics, education, work, skills, languages }: JSONResume) => (
	<div className='max-w-4xl mx-auto p-8 bg-white shadow-lg'>
		<Basics {...basics} />
		<Education items={education} />
		<Experience items={work} />
		<Skills items={skills} />
		<Languages items={languages} />
	</div>
)

const App = () => <Resume {...resume} />

export default App
