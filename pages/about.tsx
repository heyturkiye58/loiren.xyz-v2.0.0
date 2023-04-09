import Head from 'next/head';

export default function About() {
    return (
        <>
            <Head>
                 <title>About | Loiren</title>
            </Head>
            <div className="w-full my-5 mt-10">
                <h1 className="text-4xl text-white font-bold text-center">About Me</h1>
                <p className="font-medium text-lg text-white/50 text-center">Learn more about me.</p>
            </div>
            <div className="flex text-center text-gray-400/90 font-medium">
                <h1 className="w-1/2 mx-auto">coming soon...</h1>
            </div>
        </>
    );
};
