import JoinUs from '../components/JoinUs';
import styles from '../styles/Home.module.css';

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
