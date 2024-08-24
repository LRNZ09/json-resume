import type { JSONResume } from '../types/json-resume'

type BasicsProps = NonNullable<JSONResume['basics']>

const Basics = ({ name, label, email, location, summary }: BasicsProps) => {
	return (
		<header className='mb-6'>
			<h1 className='text-3xl font-bold mb-2'>{name}</h1>

			<p className='text-sm mb-2'>
				{label} | {email} |{' '}
				{`${location?.city ?? ''} ${location?.countryCode ?? ''}`}
			</p>

			<p className='text-sm text-gray-600'>{summary}</p>
		</header>
	)
}

export { Basics }
