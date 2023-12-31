/** @format */

import {
	mobile,
	backend,
	creator,
	web,
	javascript,
	typescript,
	html,
	css,
	reactjs,
	redux,
	tailwind,
	nodejs,
	mongodb,
	git,
	figma,
	docker,
	meta,
	starbucks,
	tesla,
	shopify,
	carrent,
	jobit,
	tripguide,
	threejs,
} from "../assets";

/*
 * You can add more navlinks as per your requirements
 */
export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "work",
		title: "Work",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

/**
 *You can change the service as per your requirements, make sure to import the logo/icon against it
 */
const services = [
	{
		title: "Web Developer",
		icon: web,
	},
	{
		title: "React Native Developer",
		icon: mobile,
	},
	{
		title: "Backend Developer",
		icon: backend,
	},
	{
		title: "Content Creator",
		icon: creator,
	},
];

/**
 * You can change, add,delete the skills with your skill set
 */
const technologies = [
	{
		name: "HTML 5",
		icon: html,
	},
	{
		name: "CSS 3",
		icon: css,
	},
	{
		name: "JavaScript",
		icon: javascript,
	},
	{
		name: "TypeScript",
		icon: typescript,
	},
	{
		name: "React JS",
		icon: reactjs,
	},
	{
		name: "Redux Toolkit",
		icon: redux,
	},
	{
		name: "Tailwind CSS",
		icon: tailwind,
	},
	{
		name: "Node JS",
		icon: nodejs,
	},
	{
		name: "MongoDB",
		icon: mongodb,
	},
	{
		name: "Three JS",
		icon: threejs,
	},
	{
		name: "git",
		icon: git,
	},
	{
		name: "figma",
		icon: figma,
	},
	{
		name: "docker",
		icon: docker,
	},
];

/**
 * Add your experience accordingly
 */
const experiences = [
	{
		title: "Role/ Title",
		company_name: "Company Name",
		icon: starbucks,
		iconBg: "#383E56",
		date: "start date - end date",
		points: [
			"point -1 role description in point form",
			"point - 2",
			"point -3 ",
			"point-4 ",
		],
	},
	{
		title: "Role/ Title",
		company_name: "Company Name",
		icon: tesla,
		iconBg: "#E6DEDD",
		date: "start date - end date",
		points: [
			"point -1 role description in point form",
			"point - 2",
			"point -3 ",
			"point-4 ",
		],
	},
	{
		title: "Role/ Title",
		company_name: "Company Name",
		icon: shopify,
		iconBg: "#383E56",
		date: "start date - end date",
		points: [
			"point -1 role description in point form",
			"point - 2",
			"point -3 ",
			"point-4 ",
		],
	},
	{
		title: "Role/ Title",
		company_name: "Company Name",
		icon: meta,
		iconBg: "#E6DEDD",
		date: "start date - end date",
		points: [
			"point -1 role description in point form",
			"point - 2",
			"point -3 ",
			"point-4 ",
		],
	},
];

const testimonials = [
	{
		testimonial:
			"eg. I thought it was impossible to make a website as beautiful as our product, but yourName proved me wrong.",
		name: "testimonial name",
		designation: "thier designation",
		company: "company name",
		image: "https://randomuser.me/api/portraits/women/4.jpg",
	},
	{
		testimonial:
			"I've never met a web developer who truly cares about their clients' success like Rick does.",
		name: "testimonial name",
		designation: "thier designation",
		company: "company name",
		image: "https://randomuser.me/api/portraits/men/5.jpg",
	},
	{
		testimonial:
			"After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
		name: "testimonial name",
		designation: "thier designation",
		company: "company name",
		image: "https://randomuser.me/api/portraits/women/6.jpg",
	},
];

/**
 * Add your project details. below are the sample ones
 */
const projects = [
	{
		name: "Car Rent",
		description:
			"Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "mongodb",
				color: "green-text-gradient",
			},
			{
				name: "tailwind",
				color: "pink-text-gradient",
			},
		],
		image: carrent,
		source_code_link: "https://github.com/",
	},
	{
		name: "Job IT",
		description:
			"Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "restapi",
				color: "green-text-gradient",
			},
			{
				name: "scss",
				color: "pink-text-gradient",
			},
		],
		image: jobit,
		source_code_link: "https://github.com/",
	},
	{
		name: "Trip Guide",
		description:
			"A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
		tags: [
			{
				name: "nextjs",
				color: "blue-text-gradient",
			},
			{
				name: "supabase",
				color: "green-text-gradient",
			},
			{
				name: "css",
				color: "pink-text-gradient",
			},
		],
		image: tripguide,
		source_code_link: "https://github.com/",
	},
];

export { services, technologies, experiences, testimonials, projects };
