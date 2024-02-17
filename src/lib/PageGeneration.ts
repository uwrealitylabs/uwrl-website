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

export interface BlogMeta {
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

export const processMarkdown = async (rawJSON: BlogMeta) => {
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


export const readBlog = async (fileName: string): Promise<BlogMeta> => {
	const blog = await fs.readFile(`static/blog/${fileName}.md`, 'utf-8');

	const data = await unified()
		.use(remarkParse)
		.use(remarkStringify)
		.use(remarkFrontmatter(['yaml', 'toml']))
		.use(() => (tree, vfile) => matter(vfile))
		.process(blog)
		.then((file) => file.data.matter) as BlogMeta;

	console.log(data)
	data.body = blog
	data.unixDate = dayjs(data.date).unix();
	data.unixLastMod = dayjs(data.lastMod).unix();
	return data;
};