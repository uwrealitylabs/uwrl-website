import { promises as fs } from 'fs';
import dayjs from 'dayjs';

import { unified } from 'unified';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import rehypeStringify from 'rehype-stringify';
import remark2rehype from 'remark-rehype';
import rehypeHighlight from 'rehype-highlight';
import rehypePicture from 'rehype-picture';
import remarkFrontmatter from 'remark-frontmatter';
import remarkStringify from 'remark-stringify';
import { matter } from 'vfile-matter';


export type PageOption = "blog" | "project";
export interface PageMeta {
	title: string;
	date: string;
	lastMod: string;
	unixDate: number;
	unixLastMod: number;
	description: string;
	body: string;
	path: string;
	thumbnail?: string;
	tags?: string[];
	license?: string;
}

export const processMarkdown = async (rawJSON: PageMeta): Promise<PageMeta> => {
	const tree = unified()
		.use(remarkParse)
		.use(remarkGfm)
		.parse(rawJSON.body);

	const processor =  unified()
		.use(remark2rehype)
		.use(rehypePicture)
		.use(rehypeStringify)
		.use(rehypeHighlight);

	return {
		...rawJSON,
		body: await processor.run(tree)
			.then((processor) => processor.toString())
	};
}


export const readPage = async (fileName: string, pageType: PageOption): Promise<PageMeta> => {
	const page = await fs.readFile(`static/${pageType.toString()}/${fileName}.md`, 'utf-8');

	const data = await unified()
		.use(remarkParse)
		.use(remarkStringify)
		.use(remarkFrontmatter(['yaml', 'toml']))
		.use(() => (tree, vfile) => matter(vfile))
		.process(page)
		.then((file) => file.data.matter) as PageMeta;

	console.log(data)
	data.body = page
	data.unixDate = dayjs(data.date).unix();
	data.unixLastMod = dayjs(data.lastMod).unix();

	return data;
};