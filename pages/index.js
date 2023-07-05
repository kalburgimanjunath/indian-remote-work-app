import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className="container">
      <h1 className="font-bold text-lg">
        Find your next digital/tech remote job in India
      </h1>
      <h3>
        Indian Remote Work ap helps you to find the best remote-first companies
        that are looking for the best talented digital workers.
      </h3>
      <div className="bg-white-100 border-2 rounded p-20 justify-center ">
        <h1 className="font-bold text-lg">
          Join our community of Remote Workers
        </h1>
        <h3>We are now more than +2k remote workers, join us now.</h3>
        <div className="justify-center w-full flex">
          <button className="bg-blue-300 p-2 rounded-md mt-2 hover:bg-blue-400">
            Sign in/Sign up
          </button>
        </div>
      </div>
      <div className="flex justify-center w-full">
        <div>Search</div>
        <div>
          <input type="text" />
        </div>
      </div>
      <div>Jobs List</div>
    </div>
  );
}
