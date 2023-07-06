import { JoinUs, JobList } from '../components/';
import styles from '../styles/Home.module.css';
import { REMOTECOMPANIES } from './remotecompanies/remotecompanies';
export default function Home() {
  return (
    <div className="container m-20">
      <h1 className="font-bold text-lg">
        Find your next digital/tech remote job in India
      </h1>
      <h3>
        Indian Remote Work ap helps you to find the best remote-first companies
        that are looking for the best talented digital workers.
      </h3>
      <JoinUs />
      <div className="flex justify-center w-full m-4 text-center align-middle">
        <div className="m-2 flex">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </span>
        </div>
        <div>
          <input type="text" className="rounded-md" />
        </div>
      </div>
      <div className="m-4">
        <JobList items={REMOTECOMPANIES} />
      </div>
    </div>
  );
}
