import Head from 'next/head';
import PostForm from './components/PostForm';
import PostsList from './components/PostList';

export default function Home() {
	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta
					name='description'
					content='Generated by create next app'
				/>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main>
				<div className='row'>
					<div className='col-md-6 offset-md-3'>
						<div className='page-header'>
							<h1>Project Reddit</h1>
						</div>

						<div className='posts'>{/* Render posts here */}</div>
						<PostsList />
						<PostForm />
					</div>
				</div>
			</main>
		</>
	);
}
