import { ChangeEvent } from 'react';
import Link from 'next/link';
import { Input } from '../ui/input2';
import { Label } from '../ui/label';
import { LabelInputContainer } from '../label-input-container';

interface Props {
	labelId: string;
	type: string;
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
	value: string;
	children: React.ReactNode;
	link?: {
		linkText: string;
		linkUrl: string;
	};
	placeholder?: string;
	required?: boolean;
}

export default function FormInput({
	labelId,
	type,
	onChange,
	value,
	children,
	link,
	placeholder,
	required = false,
}: Props) {
	return (
		<LabelInputContainer className='mb-4'>
				<Label
					htmlFor={labelId}
				>
					{children}
				</Label>
				{/* {link && (
					<div className='text-sm'>
						<Link
							className='font-semibold text-indigo-600 hover:text-indigo-500'
							href={link.linkUrl}
						>
							{link.linkText}
						</Link>
					</div>
				)} */}
				<Input
					id={labelId}
					name={labelId}
					type={type}
					onChange={onChange}
					value={value}
					placeholder={placeholder}
					required={required}
				/>
		</LabelInputContainer>
	);
}