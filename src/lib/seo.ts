import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

import type { ComponentProps } from 'react';

export function useSeoProps(
	props: Partial<ComponentProps<typeof NextSeo>> = {},
): Partial<ComponentProps<typeof NextSeo>> {
	const router = useRouter();

	const title = 'kavi ─ developer';
	const description = "Hi I'm Kavi, a developer";

	return {
		title,
		description,
		canonical: `https://kavi.dev/${router.asPath}`,
		openGraph: {
			title,
			description,
			site_name: 'kavi',
			url: `https://kavi.dev/${router.asPath}`,
			type: 'website',
			images: [
				{
					url: 'https://kavi.dev/banner.png',
					alt: description,
					width: 1280,
					height: 720,
				},
			],
		},
		twitter: {
			cardType: 'summary_large_image',
			handle: '@nurodev',
			site: '@nurodev',
		},
		...props,
	};
}
